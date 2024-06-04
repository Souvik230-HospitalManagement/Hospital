import React from 'react';
import './About.css';

// Import images
import abcHospitalImage from './images/abc_hospital.jpg';
import missionImage from './images/mission.jpg';
import visionImage from './images/vision.jpg';
import valuesImage from './images/values.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About Us</h1>
        <section>
          <img src={abcHospitalImage} alt="ABC Hospital" className="about-image" />
          <div>
            <h2>Our Story</h2>
            <p>ABC Hospital has a rich legacy of providing quality healthcare services since its inception in 1994. Over the years, we have grown to become one of the leading healthcare institutions in the region, renowned for our commitment to patient care, innovation, and excellence.</p>
            <p>Our journey began with a vision to redefine healthcare delivery by integrating cutting-edge technology with compassionate care. Today, we continue to uphold this vision, striving to make a meaningful difference in the lives of our patients and their families.</p>
          </div>
        </section>
        <section>
          <img src={missionImage} alt="Mission" className="about-image" />
          <div>
            <h2>Mission</h2>
            <p>Our mission is to provide exceptional healthcare services that meet the highest standards of quality, safety, and patient satisfaction. We are committed to delivering personalized care with compassion, integrity, and professionalism.</p>
          </div>
        </section>
        <section>
          <img src={visionImage} alt="Vision" className="about-image" />
          <div>
            <h2>Vision</h2>
            <p>Our vision is to be the preferred healthcare destination, recognized for our clinical excellence, innovative practices, and commitment to community health. We aim to continuously evolve and adapt to meet the evolving needs of our patients and society.</p>
          </div>
        </section>
        <section>
          <img src={valuesImage} alt="Values" className="about-image" />
          <div>
            <h2>Values</h2>
            <ul>
              <li><strong>Compassion:</strong> We treat every individual with empathy, kindness, and understanding.</li>
              <li><strong>Excellence:</strong> We strive for excellence in everything we do, continuously improving our services and practices.</li>
              <li><strong>Integrity:</strong> We uphold the highest ethical standards, fostering trust and transparency in all our interactions.</li>
              <li><strong>Collaboration:</strong> We work together as a team, leveraging our collective expertise to achieve the best outcomes for our patients.</li>
              <li><strong>Innovation:</strong> We embrace innovation and creativity, seeking new ways to enhance patient care and advance medical knowledge.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
