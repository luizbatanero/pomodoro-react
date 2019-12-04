import React, { memo } from 'react';
import './TypeSelect.css';

const TypeSelect = ({ types, changeType, selected }) => (
  <div className="TypeSelect">
    {types.map((type, index) => (
      <button
        key={type.name}
        onClick={() => changeType(type)}
        className={type.name === selected.name ? 'active' : ''}
      >
        {type.name}
      </button>
    ))}
  </div>
);

export default memo(TypeSelect);
