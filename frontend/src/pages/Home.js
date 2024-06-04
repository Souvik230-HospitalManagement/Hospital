

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="logo">Hospital Logo</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            {/* <li><Link to="/patient-info">Patient Info</Link></li> */}
            <li><Link to="/contact">Contact Us</Link></li>
            
          </ul>
        </nav>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div> */}
        <div className="emergency-contact">Emergency: 700-180-7064
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        </div>
      </header>
      <main>
        <section className="main-banner">
          {/* <img src="hospital-banner.jpg" alt="Hospital" /> */}
          <img src="/hospital-banner.jpg" alt="Hospital Banner" className="home-banner" />
          <div className="welcome-message">
            <h1>Welcome to Our Hospital</h1>
            <p>Our mission is to provide the best healthcare services.</p>
            <div className="cta-buttons">
              <Link to="/book-appointment" className="cta">Book Appointment</Link>
              <Link to="/search" className="cta">Find a Doctor</Link>
            </div>
          </div>
        </section>
        <section className="featured-sections">
          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/book-appointment">Book Appointment</Link></li>
              <li><Link to="/emergency-services">Emergency Services</Link></li>
              <li><Link to="/search">Find a Doctor</Link></li>
            </ul>
          </div>
          <div className="announcements">
            <h2>Announcements</h2>
            <p>Stay updated with our latest news and events.</p>
          </div>
          <div className="events">
            <h2>Upcoming Events</h2>
            <p>Join our health camps and community events.</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-info">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Phone: 700-180-7064</p>
            <p>Email: souviksaha6954@gmail.com</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
        <li><a href="https://www.facebook.com/PeerlessHospital" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com/PeerlessHospital" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.instagram.com/PeerlessHospital" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
          </div>
          
        </div>
        {/* <Link to="/login">Login</Link> */}
      </footer>
    </div>
  );
};

export default Home;
