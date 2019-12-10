import React, { memo } from 'react';
import './styles.css';

const TaskToggle = ({ task, toggleTask }) => (
  <button
    className={`ToggleTask ${task && 'active'}`}
    onClick={toggleTask}
    title={task ? 'Disable Task' : 'Enable Task'}
  >
    <i className={'fa fa-tasks'} />
  </button>
);

export default memo(TaskToggle);
