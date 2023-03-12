import { useEffect } from 'react';

const useAutoScroll = (target, options = { minHeight: 700 }) => {
  useEffect(() => {
    if (target.current) {
      const { height } = target.current.getBoundingClientRect();
      const translateHeight = height - options.minHeight;
      target.current.parentElement.setAttribute(
        'style',
        `
          max-height: ${options.minHeight}px;
          overflow: hidden;
        `
      );
      target.current.setAttribute(
        'style',
        `
          transition: transform 2000ms 4000ms ease-in-out;
          transform: translate(0, ${translateHeight}px)
        `
      );
    }
  }, [target, options.minHeight]);
};

export default useAutoScroll;
