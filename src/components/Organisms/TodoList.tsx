import React from 'react';
import { useTodoSelector } from '../../modules/taskModule';

const TodoList: React.FC = () => {
  const state = useTodoSelector();

  return (
    <ul>
      {state.tasks.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

export default TodoList;
