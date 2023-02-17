import './../App.css';
import { React } from 'react';
import { Todo } from './Todo';

export const TodoList = ({ todos, onItemChecked }) => {
  return (
    <div className="list">
      {(todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              onChecked={() => onItemChecked(index)}
            />
          );
        })) || <div className="empty">Do not create any todo today :-\</div>}
    </div>
  );
};
