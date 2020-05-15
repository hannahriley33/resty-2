import React from 'react';
import Request from '../../components/Request/Request';
import Response from '../../components/Response/Response';
import HistoryDeck from '../History/HistoryDeck';


const Resty = () => (
  <>
    <HistoryDeck />
    <Request />
    <Response />
  </>
);

export default Resty;
