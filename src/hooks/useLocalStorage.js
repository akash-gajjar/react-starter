import { useState } from 'react';

/**
 * React Hook for interacting with Browser's Local Storage
 *
 * @param {string} keyName - localstorage `key` name
 * @param {string|object} initialValue - fallback value to use
 * @return {array} - [value, setValue]
 *
 * See: https://web.archive.org/web/20220503083827/https://usehooks.com/useLocalStorage/
 */
const useLocalStorage = (keyName, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      // Get from local storage by keyName
      const item = window.localStorage.getItem(keyName);

      // Parse stored json or if none return initialvalue
      return item || initialValue;
    } catch (err) {
      // If errors also return initialvalue
      // TODO: Handle these error cases
      // eslint-disable-next-line no-console
      console.error(err);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(keyName, JSON.stringify(valueToStore));
      }
    } catch (err) {
      // TODO: Handle these error cases
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
