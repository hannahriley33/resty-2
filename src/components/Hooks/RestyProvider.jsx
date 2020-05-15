import React, { createContext, useState, useContext } from 'react';
import { makeRequest } from '../../Services/fetchRequest';
import { useLocalStorage } from './localStorage';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useLocalStorage('history', []);

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const onSubmit = ({ event }) => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(response => {
        setResponse(response)
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);
      });
  };

  const context = {
    url, 
    method,
    history,
    body,
    onChange,
    onSubmit,
    response
  };

  return (
    <RestyContext.Provider value={context}>
      {children}
    </RestyContext.Provider>
  )
};

export const useResty = () => {
  const context = useContext(RestyContext);
  return context;
};
