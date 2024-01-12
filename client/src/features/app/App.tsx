import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import Navbar from '../navbar/Navbar';
import TournamentsList from '../tournaments/TournamentsList';
import RegistrationPage from '../auth/RegPage';
import AuthorizationPage from '../auth/AuthPage';
import { User } from '../auth/reducer/type';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadTournaments = async (): Promise<void> => {
    const res = await axios.get('/api/tournaments');
    dispatch({ type: 'load/tournaments', payload: res.data.tournaments });
  };
  const user = useSelector((store: RootState) => store.auth.user);

  const checkUser = async (): Promise<void> => {
    const { data } = await axios.get('api/auth/check');
    dispatch({ type: 'auth/userCheck', payload: data.user });
  };

  useEffect(() => {
    checkUser();
    loadTournaments();
  }, []);

  console.log(user, 'YYYYYYYYYYYYYYY');

  return (
    <div className="App">
      {user ? <p>{user.name}</p> : <>yezy</>}
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<TournamentsList />} />
          <Route path="auth/signin" element={<RegistrationPage />} />
          <Route path="auth/login" element={<AuthorizationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
