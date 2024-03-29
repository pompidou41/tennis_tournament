import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/store';
import type { User } from './reducer/type';

function RegistrationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (password === checkPassword) {
      const { data }: { data: { message: string; userDb: User } } = await axios.post(
        '/api/auth/signin',
        {
          name,
          email,
          password,
        },
      );

      if (data.message === 'success') {
        console.log(data);

        dispatch({ type: 'auth/registration', payload: data.userDb });
        navigate('/');
        setName('');
        setEmail('');
        setPassword('');
        setCheckPassword('');
      }
    }
  };

  return (
    <div className="registration-form">
    <form className="registration-form" onSubmit={onHandleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Check password:
        <input
          type="password"
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <br />
      <div className="button-container">
        <button type="submit">зарегистрироваться</button>
        
      </div>
    </form>
    </div>
  );
}

export default RegistrationPage;
