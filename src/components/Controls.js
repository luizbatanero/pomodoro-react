import React, { memo } from 'react';
import './Controls.css';

const Controls = ({ start, reset, pause, status }) => {
  let controls;

  if (!status) {
    controls = (
      <button onClick={start} className="start">
        Start Timer
      </button>
    );
  } else if (status === 'Finished') {
    controls = (
      <button onClick={start} className="start">
        Restart Timer
      </button>
    );
  } else if (status === 'Paused') {
    controls = (
      <div>
        <button onClick={reset} className="reset">
          Reset
        </button>
        <button onClick={pause} className="resume">
          Resume
        </button>
      </div>
    );
  } else {
    controls = (
      <div>
        <button onClick={reset} className="reset">
          Reset
        </button>
        <button onClick={pause} className="pause">
          Pause
        </button>
      </div>
    );
  }

  return <div className="Controls">{controls}</div>;
};

export default memo(Controls);
