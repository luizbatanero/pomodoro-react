import React from 'react';
import { formatTime } from '../helpers';
import './TimeDisplay.css';

const TimeDisplay = ({ time, status, progress }) => {
  document.title = `(${formatTime(time)}) Pomodoro`;

  const radius = 150;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="TimeDisplay">
      <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <circle
          stroke="#ddd"
          fill="none"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="red"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <h1>{formatTime(time)}</h1>
      <p>{status}</p>
    </div>
  );
};

export default TimeDisplay;
