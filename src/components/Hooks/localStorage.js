import { useState, useEffect } from 'react';

const fetchState = (key, startingValue) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : startingValue;

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(getState(key, startingValue));

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(state));
}, [state]);

return [state, setState];

};