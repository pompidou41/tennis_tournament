import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import Navbar from '../navbar/Navbar';
import TournamentsList from '../tournaments/TournamentsList';
import RegistrationPage from '../auth/RegPage';
import AuthorizationPage from '../auth/AuthPage';
import TournamentPage from '../tournaments/TournamentPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadTournaments = async (): Promise<void> => {
    const res = await axios.get('/api/tournaments');
    dispatch({ type: 'load/tournaments', payload: res.data.tournaments });
  };
  // const user = useSelector((store: RootState) => store.auth.user);

  // const checkUser = async (): Promise<void> => {
  //   const { data } = await axios.get('/api/auth/check');
  //   dispatch({ type: 'auth/userCheck', payload: data.user });
  // };

  // const loadTour = async (): Promise<void> => {
  //   const res = await axios.get(`/api/${t_id}/tour`);
  //   dispatch({});
  // };

  useEffect(() => {
    axios
      .get('/api/auth/check')
      .then(({ data }) => dispatch({ type: 'auth/userCheck', payload: data.user }))
      .catch(console.log);
    loadTournaments();
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<TournamentsList />} />
          <Route path="/tournaments/:gameId/tour" element={<TournamentPage />} />
          <Route path="auth/signin" element={<RegistrationPage />} />
          <Route path="auth/login" element={<AuthorizationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
