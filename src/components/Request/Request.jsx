import React from 'react';
import { useResty } from '../Hooks/RestyProvider';

const Request = () => {
  const { url, method, body, onChange, onSubmit } = useResty();
  
  return (
  <form onSubmit={onSubmit}> 
    <input type="text" name="url" value={url} onChange={onChange} />

    <label>
      <input type="radio" name="method" checked={method === 'POST'} value="POST" onChange={onChange}/>
      POST
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'GET'} value="GET" onChange={onChange}/>
      GET
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'PUT'} value="PUT" onChange={onChange}/>
      PUT
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'PATCH'} value="PATCH" onChange={onChange}/>
      PATCH
    </label>

    <textarea name="body" value={body} onChange={onChange}></textarea>
    <button>Submit Request</button>
  </form>
  );
};



export default Request;
