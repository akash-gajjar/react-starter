import { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

/**
 * Scroll element into view or scroll to Top
 *
 * @param {object} options - Scroll options
 *
 * @param {string} options.behavior - Scroll options `auto` or `smooth`.
 * @param {string} options.trigger - reference value to trigger scroll effect
 * @param {boolean} options.scrollInto - `true` for scroll into-view `false`
 * otherwise
 *
 * @return {response} useQuery response
 */
const ScrollToTop = ({ behavior, scrollInto = false, trigger = null }) => {
  const injectedDiv = useRef();

  useEffect(() => {
    try {
      if (scrollInto && injectedDiv.current) {
        injectedDiv.current.scrollIntoView({ behavior: behavior || 'smooth' });
      } else {
        window.scroll({
          top: 0,
          left: 0,
          behavior: behavior || 'smooth',
        });
      }
    } catch (err) {
      window.scrollTo(0, 0);
    }

    return () => null;
  }, [behavior, scrollInto, trigger]);

  return scrollInto ? <div ref={injectedDiv} style={{ position: 'absolute', width: 0, height: 0 }} /> : null;
};

ScrollToTop.propTypes = {
  behavior: PropTypes.string,
  scrollInto: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  trigger: PropTypes.any,
};

ScrollToTop.defaultProps = {
  behavior: 'smooth',
  scrollInto: false,
  trigger: null,
};

export { ScrollToTop };
