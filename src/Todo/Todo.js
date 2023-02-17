import './../App.css';
import { React } from 'react';

export const Todo = ({ todo, onChecked }) => {
  return (
    <div className="todo">
      <div onClick={onChecked}>{todo}</div>
    </div>
  );
};
