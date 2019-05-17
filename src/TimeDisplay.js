import React from 'react';
import { formatTime } from './helpers';

const TimeDisplay = ({ time, status }) => {
  document.title = `${formatTime(time)}  |  Pomodoro`;

  return (
    <div className="TimeDisplay">
      <h1>{formatTime(time)}</h1>
      <p>{status}</p>
    </div>
  );
};

export default TimeDisplay;
