import React, { memo } from 'react';
import './TypeSelect.css';

const TypeSelect = ({ types, changeType, selected }) => {
  return (
    <div className="TypeSelect">
      {types.map((type, index) => (
        <button
          key={type.name}
          onClick={() => changeType(type)}
          className={type === selected ? 'active' : ''}
        >
          {type.name} <span>[{index + 1}]</span>
        </button>
      ))}
    </div>
  );
};

export default memo(TypeSelect);
