import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './styles.css';

import TaskContext from '../TaskList/context';

export default function Task({ task, index }) {
  const ref = useRef();
  const { move, handleStatus } = useContext(TaskContext);
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'TASK', id: task.id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'TASK',
    hover(item, monitor) {
      if (item.id === task.id) return;
      const dragged = item;
      const target = task;
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (dragged.order < target.order && draggedTop < targetCenter) return;
      if (dragged.order > target.order && draggedTop > targetCenter) return;

      move(item.index, index);
      item.index = index;
    }
  });

  dragRef(dropRef(ref));

  return (
    <div ref={ref} className={isDragging ? 'Task Dragging' : 'Task'}>
      <div>{task.title}</div>
      <span onClick={() => handleStatus(task)}>
        {task.closed ? 'Open' : 'Close'}
      </span>
    </div>
  );
}
