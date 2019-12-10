import React, { memo, useState, useEffect } from 'react';
import produce from 'immer';
import TaskContext from './context';
import Task from '../Task';
import TypeSelect from '../../TypeSelect';

import './styles.css';

const TaskList = ({ selectedTaskType }) => {
  const [input, setInput] = useState('');
  const taskStatus = [
    { name: 'All', value: -1 },
    { name: 'Open', value: false },
    { name: 'Closed', value: true }
  ];

  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem('pomodoro-react-tasks')) || []
  );
  const [selectedStatus, setSelectedStatus] = useState(taskStatus[0]);

  useEffect(() => {
    window.localStorage.setItem('pomodoro-react-tasks', JSON.stringify(tasks));
  }, [tasks]);

  function move(from, to) {
    setTasks(
      produce(tasks, draft => {
        const taskMoved = draft[from];
        draft.splice(from, 1);
        draft.splice(to, 0, taskMoved);
      })
    );
  }

  function handleStatus(task) {
    console.log('task:', task);
    setTasks(
      produce(tasks, draft => {
        const foundIndex = draft.findIndex(item => item.id === task.id);
        draft[foundIndex].closed = !draft[foundIndex].closed;
      })
    );
  }

  function addTask() {
    setTasks(
      produce(tasks, draft => {
        draft.push({ id: draft.length + 1, title: input, closed: false });
      })
    );
    setInput('');
  }

  return (
    <TaskContext.Provider value={{ tasks, move, handleStatus }}>
      <TypeSelect
        types={taskStatus}
        selected={selectedStatus}
        changeType={setSelectedStatus}
      />
      <div className="Tasks">
        <div className="Tasks-box">
          {tasks.length > 0 ? (
            tasks
              .filter(
                task =>
                  task.closed === selectedStatus.value ||
                  selectedStatus.value === -1
              )
              .map((task, index) => (
                <Task key={task.id} index={index} task={task} />
              ))
          ) : (
            <div className="Task">No Tasks</div>
          )}
        </div>
      </div>
      <div className="Task">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="New Task"
        />
        <span onClick={addTask}>{'Add'}</span>
      </div>
    </TaskContext.Provider>
  );
};

export default memo(TaskList);
