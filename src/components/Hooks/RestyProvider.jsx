import React, { createContext, useState } from 'react';
import { makeRequest } from '../../Services/fetchRequest';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setUrl(target.value);
    if(target.name === 'body') setUrl(target.value);
  };

  const onSubmit = ({ event }) => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(response => setResponse(response));
  };

  const context = {
    url, 
    method,
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
