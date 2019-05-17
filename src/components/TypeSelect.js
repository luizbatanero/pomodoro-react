import React from 'react';

const TypeSelect = ({ types, changeType, selected }) => {
  return (
    <div className="TypeSelect">
      {types.map((type, index) => (
        <button
          key={type.name}
          onClick={() => changeType(type)}
          style={{
            fontWeight: type === selected ? 'bold' : 'normal'
          }}
        >
          {type.name} <span>[{index + 1}]</span>
        </button>
      ))}
    </div>
  );
};

export default TypeSelect;
