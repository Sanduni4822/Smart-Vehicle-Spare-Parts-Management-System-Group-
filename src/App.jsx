import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigationbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/homepage/HomePage';
// import AboutPage from './pages/AboutPage'; // Example future page

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/*  Top Navigation */}
        <NavBar />

        {/*  Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes like: */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </main>

        {/*  Footer Sticks to Bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
