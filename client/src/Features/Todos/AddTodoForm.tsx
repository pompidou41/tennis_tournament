/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import type { Todo } from './typeTodo';

type Data = {
  success: boolean;
  message: string;
  todo: Todo;
};

function AddTodoForm(): JSX.Element {
  const { dispatch } = useContext(AppContext);
  const [text, setText] = useState('');

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/todos/add', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data: Data = await res.json();
    if (data.success) {
      dispatch({ type: 'add/todos', payload: data.todo });
      setText('');
    }
  };

  return (
    <form className="row" onSubmit={onHandleSubmit}>
      <div className="col-auto" style={{ width: '600px' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Напиши здесь свою задачу"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Добавить
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
