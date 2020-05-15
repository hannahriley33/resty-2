import { useState, useEffect } from 'react';

const getState = (key, initalValue) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initalValue;

export const useLocalStorage = (key, initalValue) => {
  const [state, setState] = useState(getState(key, initalValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
