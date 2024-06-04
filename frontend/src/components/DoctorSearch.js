
import React, { useState, useEffect } from 'react';
import './DoctorSearch.css'; // Import CSS file for styling

const DoctorSearch = () => {
  const [speciality, setSpeciality] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/doctors.json') // Adjust the URL based on where your server is hosting the file
      .then(response => response.json())
      .then(data => setDoctors(data.doctors))
      .catch(error => console.error('Failed to load doctors', error));
  }, []);

  const handleSearch = e => {
    e.preventDefault();

    const filteredDoctors = doctors.filter(doctor =>
      doctor.specialty.toLowerCase().includes(speciality.toLowerCase()) &&
      doctor.qualifications.toLowerCase().includes(qualifications.toLowerCase())
    );

    setDoctors(filteredDoctors);
  };

  return (
    <div className="doctor-search-container">
      <h1>Search Doctors</h1>
      <form onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={speciality}
          onChange={e => setSpeciality(e.target.value)}
          placeholder="Speciality"
        />
        <input
          className="search-input"
          type="text"
          value={qualifications}
          onChange={e => setQualifications(e.target.value)}
          placeholder="Qualifications"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="doctor-list">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;
