import React from 'react';
import { formatTime } from './helpers';

const TimeDisplay = ({ time }) => {
  return (
    <div className="TimeDisplay">
      <h1>{formatTime(time)}</h1>
      {time === 0 && <p>Finished</p>}
    </div>
  );
};

export default TimeDisplay;
