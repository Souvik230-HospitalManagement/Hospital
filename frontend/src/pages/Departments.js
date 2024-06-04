import React, { useState, useEffect } from 'react';
import './Departments.css'; // Import CSS for styling

const Departments = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    fetchDoctorsData();
  }, []);

  const fetchDoctorsData = async () => {
    try {
      const response = await fetch('/doctors.json');
      if (!response.ok) {
        throw new Error('Failed to fetch doctors data');
      }
      const data = await response.json();
      setDoctors(data.doctors);
    } catch (error) {
      console.error('Error fetching doctor data:', error);
    }
  };

  // Filter doctors based on selected specialty
  const filteredDoctors = selectedSpecialty ? doctors.filter(doctor => doctor.specialty === selectedSpecialty) : [];

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
    // Clear doctor details when a new specialty is selected
    setDoctorDetails(null);
  };

  const handleDoctorDetails = (doctor) => {
    setDoctorDetails(doctor);
  };

  return (
    <div className="departments-container">
      <h1>Departments</h1>
      <div className="departments-list">
        {/* Display departments list */}
      </div>
      <h2>Doctors with specialty:</h2>
      <select value={selectedSpecialty} onChange={handleSpecialtyChange}>
  <option value="">Select Specialty</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="Oncology">Oncology</option>
  <option value="ENT (Ear, Nose, Throat)">ENT (Ear, Nose, Throat)</option>
  <option value="Gynecology">Gynecology</option>
  <option value="Urology">Urology</option>
  <option value="Psychiatry">Psychiatry</option>
  <option value="Endocrinology">Endocrinology</option>
  <option value="Pulmonology">Pulmonology</option>
  <option value="Rheumatology">Rheumatology</option>
  <option value="Ophthalmology">Ophthalmology</option>
  <option value="Gastroenterology">Gastroenterology</option>
  <option value="Hematology">Hematology</option>
  <option value="Nephrology">Nephrology</option>
  <option value="Allergy and Immunology">Allergy and Immunology</option>
  <option value="Geriatrics">Geriatrics</option>
  <option value="Neurosurgery">Neurosurgery</option>
  <option value="Dentistry">Dentistry</option>
  <option value="Podiatry">Podiatry</option>
  <option value="Radiology">Radiology</option>
  <option value="Plastic Surgery">Plastic Surgery</option>
  <option value="Sports Medicine">Sports Medicine</option>
  <option value="Cardiothoracic Surgery">Cardiothoracic Surgery</option>
  <option value="Oncosurgery">Oncosurgery</option>
  <option value="Trauma Surgery">Trauma Surgery</option>
  <option value="Emergency Medicine">Emergency Medicine</option>
  <option value="Gerontology">Gerontology</option>
</select>

      {filteredDoctors.length > 0 && (
        <div className="doctors-list">
          <h2>Doctors List</h2>
          <ul>
            {filteredDoctors.map(doctor => (
              <li key={doctor.id} onClick={() => handleDoctorDetails(doctor)}>
                {doctor.name} - {doctor.specialty}
              </li>
            ))}
          </ul>
        </div>
      )}
      {doctorDetails && (
        <div className="doctor-details">
          <h2>Doctor Details</h2>
          <h3>{doctorDetails.name}</h3>
          <p><strong>Specialty:</strong> {doctorDetails.specialty}</p>
          <p><strong>Qualifications:</strong> {doctorDetails.qualifications}</p>
          <p><strong>Experience:</strong> {doctorDetails.experience}</p>
        </div>
      )}
    </div>
  );
};

export default Departments;
