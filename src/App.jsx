import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigationbar/NavBar';

import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ResetPasswordPage from './pages/login/ResetPasswordPage';
import SignUpPage from './pages/Signup/SignupPage';
import EmergencyAssistance from './pages/emergency/EmergencyAssistance';
import PastReportsPage from './pages/emergency/PastReportsPage';
import ReportIncidentPage from './pages/emergency/ReportIncidentPage';
import AboutUs from './pages/aboutus/AboutUs';
import Footer from './components/footer/Footer';


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
            <Route path="/emer" element={<EmergencyAssistance/>} />
            <Route path="/add_report" element={<ReportIncidentPage/>} />
            <Route path="/past_reports" element={<PastReportsPage/>} />
            <Route path="/aboutus" element={<AboutUs/>}/>
          </Routes>
        </main>

        {/* Footer Sticks to Bottom */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
