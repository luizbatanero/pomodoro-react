import React from 'react';
import ReactDOM from 'react-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Pomodoro from './containers/Pomodoro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>Test
    {/* <DndProvider backend={HTML5Backend}>
      <Pomodoro />
    </DndProvider>, */}
  </React.StrictMode>
);
