import React from 'react';

const Controls = ({ start, reset, pause, running, interval, time }) => {
  return (
    <div className="Controls">
      {running === false ? (
        <button onClick={start}>
          {time === 0 ? 'Restart timer' : 'Start timer'} <span>[space]</span>
        </button>
      ) : (
        <>
          <button onClick={reset}>
            Reset <span>[esc]</span>
          </button>
          <button onClick={pause}>
            {interval ? 'Pause' : 'Resume'} <span>[space]</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Controls;
