import React from 'react';
import './Controls.css';

const Controls = ({ start, reset, pause, running, interval, time }) => {
  return (
    <div className="Controls">
      {running === false ? (
        <button onClick={start} className="start">
          {time === 0 ? 'Restart timer' : 'Start timer'}
        </button>
      ) : (
        <div>
          <button onClick={reset} className="reset">
            Reset
          </button>
          <button onClick={pause} className={interval ? 'pause' : 'resume'}>
            {interval ? 'Pause' : 'Resume'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Controls;
