import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import TournamentsList from '../tournaments/TournamentsList';
import RegistrationPage from '../auth/RegPage';
import AuthorizationPage from '../auth/AuthPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadTournaments = async (): Promise<void> => {
    const res = await axios.get('/api/tournaments');
    dispatch({ type: 'load/tournaments', payload: res.data.tournaments });
  };

  useEffect(() => {
    loadTournaments();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TournamentsList />} />
        <Route path="auth/signin" element={<RegistrationPage/>} />
        <Route path="auth/login" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
