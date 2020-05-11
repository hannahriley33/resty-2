import React from 'react';
import { RestyProvider } from '../Hooks/RestyProvider';
import RestyDisplay from '../RestyDisplay/RestyDisplay';


export default function App() {
  return (
    <RestyProvider>
      <RestyDisplay />
    </RestyProvider>
  );
}
