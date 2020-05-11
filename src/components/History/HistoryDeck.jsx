import React from 'react';
import HistoryCard from './HistoryCard';
import { useResty } from '../Hooks/RestyProvider';

const HistoryDeck = () => {
  const { history } = useResty();
  
  const historyToShow = history.map((item, i) => (
    <li key={i}>
      <HistoryCard {...item} />
    </li>
  ));

  return (
    <ul>
      {historyToShow}
    </ul>
  );
};

export default HistoryDeck;