import React, { memo } from 'react';
import './Shortcuts.css';

const Shortcuts = () => (
  <div className="Shortcuts">
    <i className="far fa-keyboard" />
    <div className="Shortcuts-box">
      <div className="Shortcut">
        <div>Play / Pause / Resume</div>
        <div>
          <kbd>Space</kbd>
        </div>
      </div>
      <div className="Shortcut">
        <div>Reset</div>
        <div>
          <kbd>Esc</kbd>
        </div>
      </div>
      <div className="Shortcut">
        <div>Pomodoro</div>
        <div>
          <kbd>1</kbd>
          <kbd>Num1</kbd>
        </div>
      </div>
      <div className="Shortcut">
        <div>Short Break</div>
        <div>
          <kbd>2</kbd>
          <kbd>Num2</kbd>
        </div>
      </div>
      <div className="Shortcut">
        <div>Long Break</div>
        <div>
          <kbd>3</kbd>
          <kbd>Num3</kbd>
        </div>
      </div>
    </div>
  </div>
);

export default memo(Shortcuts);
