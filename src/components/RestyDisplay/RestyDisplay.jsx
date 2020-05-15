import React from 'react';
import Request from '../../components/Request/Request';
import Response from '../../components/Response/Response';
import HistoryDeck from '../History/HistoryDeck';

const RestyDisplay = () => (
  <>
    <HistoryDeck />
    <Request />
    <Response />
  </>
);
export default RestyDisplay;
