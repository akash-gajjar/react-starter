import { useEffect } from 'react';

const Favicon = () => {
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const favicon = document.querySelector('link[rel~="icon"]');

    const handleMatch = (isMatch) => {
      // we force refresh favicon using version specifiers
      const value = isMatch ? '/images/favicon.png' : '/images/favicon.png';
      favicon.href = `${value}?v=v${Date.now()}`;
    };

    query.onchange = (evt) => {
      handleMatch(evt.matches);
    };

    handleMatch(query.matches);
  }, []);

  return null;
};

export default Favicon;
