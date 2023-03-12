import { useEffect, useState } from 'react';

/**
 * Hook to trigger some event when element is visible on screen
 *
 * @param {*} ref
 * @param {string} [rootMargin='0px']
 * @return {boolean} - true if ref element is visible
 *
 * See: https://usehooks.com/useOnScreen/
 */
const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const { current } = ref;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};

export default useOnScreen;
