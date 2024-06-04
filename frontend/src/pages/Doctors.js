import React, { useState, useEffect } from 'react';
import './Doctors.css'; // Import CSS for styling

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctors.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch doctors data');
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data.doctors)) {
          throw new Error('Data received is not an array');
        }
        setDoctors(data.doctors);
      })
      .catch(error => console.error('Error fetching doctor data:', error));
  }, []);

  return (
    <div className="doctors-container">
      <h1>Our Doctors</h1>
      <div className="doctors-grid">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h2>{doctor.name}</h2>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
