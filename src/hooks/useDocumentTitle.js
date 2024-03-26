import { useEffect } from 'react';

/**
 * Set document title
 *
 * @param {string} [title='']
 * @param {*} [trigger=null]
 */
const useDocumentTitle = (title = '', trigger = null) => {
  const setNewTitle = (t) => {
    document.title = [t, 'PROJECT_NAME'].filter((part) => part.length > 0).join(' | ');
  };

  useEffect(() => {
    setNewTitle(title);
  }, [trigger, title]);
};

export default useDocumentTitle;
