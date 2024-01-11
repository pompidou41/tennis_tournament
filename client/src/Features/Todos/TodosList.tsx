/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import { AppContext } from '../../context';

function TodosList(): JSX.Element {
  const { state, dispatch } = useContext(AppContext);

  const loadTodos = async (): Promise<void> => {
    const res = await fetch('api/todos');
    const data = await res.json();
    dispatch({ type: 'load/todos', payload: data });
  };

  useEffect(() => {
    loadTodos().catch((err) => console.error(err));
  }, []);

  return (
    <ul className="list-group">
      {state.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodosList;
