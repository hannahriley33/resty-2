import React from 'react';
import { useResty } from '../Hooks/RestyProvider';

const Request = () => {
  const { url, method, body, onChange } = useResty();
  return (
  <form onSubmit={onSubmit}> 
    <input type="text" name="url" value={url} onChange={onChange} />

    <label>
      <input type="radio" name="method" checked={method === 'POST'} value="POST" />
      POST
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'GET'} value="GET" />
      GET
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'PUT'} value="PUT" />
      PUT
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'PATCH'} value="PATCH" />
      PATCH
    </label>

    <textarea name="body" value={body} onChange={onChange}></textarea>
    <button>Submit Request</button>
  </form>
  );
};



export default Request;
