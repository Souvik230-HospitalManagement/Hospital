import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [specialty, setSpecialty] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [experience, setExperience] = useState(''); // Added experience state
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password, role, specialty, qualifications, experience });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="doctor">Doctor</option>
          {/* <option value="admin">Admin</option> */}
        </select>
        {role === 'doctor' && (
          <>
            <input
              type="text"
              value={specialty}
              onChange={e => setSpecialty(e.target.value)}
              placeholder="Specialty"
              required
            />
            <input
              type="text"
              value={qualifications}
              onChange={e => setQualifications(e.target.value)}
              placeholder="Qualifications"
              required
            />
            <input
              type="text"
              value={experience}
              onChange={e => setExperience(e.target.value)}
              placeholder="Experience"
              required
            />
          </>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
