import { useEffect, useReducer } from 'react';

import { useSearchParams } from 'react-router-dom';

/**
 * Returns a stateful query value, and a function to update it.
 *
 * @param {object} initialState - Initial State
 */
const useQueryState = (initialState) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [queryState, setQueryState] = useReducer((state, action) => ({ ...state, ...action }), {
    ...initialState,
    ...Object.fromEntries([...searchParams]),
  });

  useEffect(() => {
    setSearchParams(queryState);
  }, [queryState, setSearchParams]);

  return [queryState, setQueryState];
};

export default useQueryState;
