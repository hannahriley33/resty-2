import React, { createContext, useState, useContext } from 'react';
import FETCH CALL
import { useLocalStorage } from './localStorage';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [history, setHistory] = useLocalStorage('history', []);
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});

  const onChange = ({ target }) => {
    if(target.name === 'body') setBody(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(res => {
        setResponse(res);
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);
      });
  };

  const context = {
    body,
    url,
    method,
    history,
    response,
    onSubmit,
    onChange
  };

  return (
    <RestyContext.Provider value={context}>
      {children}
    </RestyContext.Provider>
  );
  
};

export const useResty = () => {
  const context = useContext(RestyContext);
  return context;
};
