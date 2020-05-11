import React from 'react';
import { useResty } from '../../components/Hooks/RestyProvider';

const Request = () => {
  const { url, method, body, onChange, onSubmit } = useResty();

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="url" value={url} onChange={onChange} />
  
      <label>
        <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />
        POST
      </label>
  
      <label>
        <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />
        GET
      </label>
  
      <label>
        <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />
        PUT
      </label>
  
      <label>
        <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />
        PATCH
      </label>
  
      <label>
        <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />
        DELETE
      </label>
  
      <textarea name="body" value={body} onChange={onChange}></textarea>
      <button>Request</button>
    </form>
  );
};

