import React from 'react';

const Controls = ({ start, reset, pause, running, interval, time }) => {
  return (
    <div className="Controls">
      {running === false ? (
        <button onClick={start}>
          {time === 0 ? 'Restart timer' : 'Start timer'}
        </button>
      ) : (
        <>
          <button onClick={reset}>Reset</button>
          <button onClick={pause}>{interval ? 'Pause' : 'Resume'}</button>
        </>
      )}
    </div>
  );
};

export default Controls;
