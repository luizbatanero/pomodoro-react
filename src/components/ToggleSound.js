import React from 'react';
import './ToggleSound.css';

const ToggleSound = ({ sound, toggleSound }) => {
  return (
    <button className="ToggleSound" onClick={toggleSound}>
      {sound ? 'Disable Sound' : 'Enable Sound'}
    </button>
  );
};

export default ToggleSound;
