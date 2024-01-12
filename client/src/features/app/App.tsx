import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
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

  // const loadTour = async (): Promise<void> => {
  //   const res = await axios.get(`/api/${t_id}/tour`);
  //   dispatch({});
  // };

  useEffect(() => {
    loadTournaments();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TournamentsList />} />
        <Route path="/tournaments/:gameId/tour" element={<TournamentPage />} />
        <Route path="/auth/signin" element={<RegistrationPage />} />
        <Route path="/auth/login" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
