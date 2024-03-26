import { useEffect } from 'react';

/**
 * Trigger function call when mouse click is outside the ref element.
 *
 * @param {{current:import('react').ReactHTMLElement}} ref
 * @param {function} handler
 */
export const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
