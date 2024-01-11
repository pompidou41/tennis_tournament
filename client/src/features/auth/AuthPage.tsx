import React, { useState } from 'react';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { data } = await axios.post('/api/auth/login', {
      email,
      password,
    });
    if (data.message === 'success') {
      dispatch({ type: 'auth/registration', payload: data.userInDb });
      navigate('/');
    }
  };

  return (
    <div className='registration-form'>
      <form onSubmit={onHandleSubmit}>
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
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
