import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import TournamentsList from '../tournaments/TournamentsList';
import { useAppDispatch } from '../../redux/store';

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
      <TournamentsList />
    </div>
  );
}

export default App;
