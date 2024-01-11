/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext } from 'react';
import type { Todo } from './typeTodo';
import { AppContext } from '../../context';

type Data = {
  success: boolean;
};

function TodoItem({ todo }: { todo: Todo }): JSX.Element {
  const { dispatch } = useContext(AppContext);

  const onHandleUpdate = async (id: number): Promise<void> => {
    const res = await fetch(`/api/todos/update/${id}`, {
      method: 'put',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ isDone: !todo.isDone }),
    });

    const data: Data = await res.json();
    if (data.success) {
      dispatch({ type: 'update/todos', payload: todo.id });
    }
  };

  const onHandleDelete = async (id: number): Promise<void> => {
    const res = await fetch(`/api/todos/delete/${id}`, { method: 'delete' });

    const data: Data = await res.json();
    if (data.success) {
      dispatch({ type: 'delete/todos', payload: todo.id });
    }
  };

  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onHandleUpdate(todo.id)}
      />
      {todo.text}
      <button type="button" className="btn btn-primary" onClick={() => onHandleDelete(todo.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
