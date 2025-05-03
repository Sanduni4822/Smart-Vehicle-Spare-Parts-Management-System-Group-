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
import FindGaragesPage from './pages/Garage/FindGaragesPage';
import BrakersViewDetailsPage from './pages/spareparts/BrakersViewDetailsPage';
import AddToCartPage from './pages/spareparts/AddToCartPage';
import SparePartsPage from './pages/spareparts/SparePartsPage';
import BumperGrillsViewDetailsPage from './pages/spareparts/BumperGrillsViewDetailsPage';
import CarDoorsViewDetailsPage from './pages/spareparts/CarDoorsViewDetailsPage';
import CarSensorViewDetailsPage from './pages/spareparts/CarSensorViewDetailsPage';
import CoolingSystemViewDetailsPage from './pages/spareparts/CoolingSystemViewDetailsPage';
import DrivetrainViewDetailsPage from './pages/spareparts/DrivetrainViewDetailsPage';
import FenderViewDetailsPage from './pages/spareparts/FendersViewDetailsPage';
import FoglightViewDetailsPage from './pages/spareparts/FoglightViewDetailsPage';
import FrontBumpersViewDetailsPage from './pages/spareparts/FrontBumpersViewDetailsPage';
import FuelAirViewDetailsPage from './pages/spareparts/FuelAirViewDetailsPage';
import HeadlightViewDetailsPage from './pages/spareparts/HeadlightsViewDetailsPage';
import ViewCartPage from './pages/spareparts/ViewCartPage';
import CheckoutPage from './pages/spareparts/CheckoutPage';

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
            <Route path="/garage" element={<FindGaragesPage/>}/>
            <Route path="/spareparts" element={<SparePartsPage />} />
            <Route path="/braker" element={<BrakersViewDetailsPage/>} />
            <Route path="/add-to-cart" element={<AddToCartPage />} />
            <Route path="/bumper" element={<BumperGrillsViewDetailsPage />} />
            <Route path="/cardoor" element={<CarDoorsViewDetailsPage/>} />
            <Route path="/carsensor" element={<CarSensorViewDetailsPage/>} />
            <Route path="/coolingsystem" element={<CoolingSystemViewDetailsPage/>} />
            <Route path="/drivetrain" element={<DrivetrainViewDetailsPage/>} />
            <Route path="/fender" element={<FenderViewDetailsPage/>} />
            <Route path="/foglight" element={<FoglightViewDetailsPage/>} />
            <Route path="/frontbumpers" element={<FrontBumpersViewDetailsPage/>} />
            <Route path="/fuelair" element={<FuelAirViewDetailsPage/>} />
            <Route path="/headlight" element={<HeadlightViewDetailsPage/>} />
            <Route path="/view-cart" element={<ViewCartPage/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
          </Routes>
        </main>

        {/* Footer Sticks to Bottom */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
