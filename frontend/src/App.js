import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import DoctorSearch from './components/DoctorSearch';
import AppointmentForm from './components/AppointmentForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<DoctorSearch />} />
      <Route path="/book-appointment" element={<AppointmentForm />} />
    </Routes>
  );
};

export default App;
