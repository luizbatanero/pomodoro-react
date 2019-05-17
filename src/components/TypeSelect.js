import React from 'react';

const TypeSelect = ({ types, changeType }) => {
  return (
    <div className="TypeSelect">
      {types.map(type => (
        <button key={type.name} onClick={() => changeType(type)}>
          {type.name}
        </button>
      ))}
    </div>
  );
};

export default TypeSelect;
