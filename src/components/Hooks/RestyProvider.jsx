import React, { createContext, useState } from 'react';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setUrl(target.value);
    if(target.name === 'body') setUrl(target.value);
  };


  return (
    <RestyContext.Provider value={{ url, method, body, onChange }}>
      {children}
    </RestyContext.Provider>

  )
};

export const useResty = () => {
  const context = useContext(RestyContext);
  return context;
};

