import React from 'react';
import { useResty } from '../Hooks/RestyProvider';

const Response = () => {
  const { response } = useResty();
  
  return (
    <pre>
      {JSON.stringify(response, null, 2)}
    </pre>
  );
};

export default Response;