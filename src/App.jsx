import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigationbar/NavBar';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
