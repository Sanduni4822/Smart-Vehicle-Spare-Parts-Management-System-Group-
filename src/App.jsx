import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigationbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ResetPasswordPage from './pages/login/ResetPasswordPage';
import SignUpPage from './pages/Signup/SignupPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation */}
        <NavBar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/resetp" element={<ResetPasswordPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>

        {/* Footer Sticks to Bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
