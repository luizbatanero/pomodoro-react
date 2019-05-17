import React from 'react';

const Controls = ({ start, reset, pause, running, interval }) => {
  return (
    <div className="Controls">
      {running === false ? (
        <button onClick={start}>Start</button>
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
