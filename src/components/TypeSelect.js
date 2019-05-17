import React from 'react';

const TypeSelect = ({ types, changeType }) => {
  return (
    <div className="TypeSelect">
      {types.map((type, index) => (
        <button key={type.name} onClick={() => changeType(type)}>
          {type.name} <span>[{index + 1}]</span>
        </button>
      ))}
    </div>
  );
};

export default TypeSelect;
