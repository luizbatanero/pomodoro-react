import React from 'react';

const ToggleSound = ({ sound, toggleSound }) => {
  return (
    <button onClick={toggleSound}>
      {sound ? 'Disable Sound' : 'Enable Sound'}
    </button>
  );
};

export default ToggleSound;
