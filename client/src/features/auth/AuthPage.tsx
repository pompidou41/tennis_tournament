import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

function AuthorizationPage(): JSX.Element {
  // const[err,setErr]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const { data } = await axios.post('/api/auth/login', {
      email,
      password,
    });
    
   
    if (data.message === 'success') {
      dispatch({ type: 'auth/login', payload: data.userDb });
      navigate('/');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="registration-form">
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
        <br />
        {/* { err &&
          <p style={{color:'red'}}>{err}</p>} */}
      </form>
    </div>
  );
}

export default AuthorizationPage;
