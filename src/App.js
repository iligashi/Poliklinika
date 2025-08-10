import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DoctorsProvider } from './context/DoctorsContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/AdminDashboard';
import GeneralMedicine from './pages/services/GeneralMedicine';
import Cardiology from './pages/services/Cardiology';
import Pediatrics from './pages/services/Pediatrics';
import Orthopedics from './pages/services/Orthopedics';
import Dermatology from './pages/services/Dermatology';

function App() {
  return (
    <DoctorsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/general" element={<GeneralMedicine />} />
              <Route path="/services/cardiology" element={<Cardiology />} />
              <Route path="/services/pediatrics" element={<Pediatrics />} />
              <Route path="/services/orthopedics" element={<Orthopedics />} />
              <Route path="/services/dermatology" element={<Dermatology />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DoctorsProvider>
  );
}

export default App; 