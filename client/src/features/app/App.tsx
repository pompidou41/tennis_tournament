import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import RegistrationPage from '../auth/RegPage';
import AuthorizationPage from '../auth/AuthPage';
import MainPage from '../mainPage/mainPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="auth/signin" element={<RegistrationPage/>} />
        <Route path="auth/login" element={<AuthorizationPage />} />
      </Routes>
    </div>
  );
}

export default App;
