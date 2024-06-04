import React from 'react';
import './Services.css';

import inpatientImage from './images/inpatient.jpg';
import outpatientImage from './images/outpatient.jpg';
import emergencyImage from './images/emergency.jpg';
import specialtyImage from './images/specialty.jpg';
import diagnosticImage from './images/diagnostic.jpg';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1>Our Services</h1>
        <section>
          <img src={inpatientImage} alt="Inpatient Services" className="service-image" />
          <div className="service-description">
            <h2>Inpatient Services</h2>
            <p>Peerless Hospital offers comprehensive inpatient services to cater to the diverse medical needs of our patients. From routine medical care to complex surgical procedures, our expert team is dedicated to providing high-quality, compassionate care round-the-clock.</p>
          </div>
        </section>
        <section>
          <img src={outpatientImage} alt="Outpatient Services" className="service-image" />
          <div className="service-description">
            <h2>Outpatient Services</h2>
            <p>Our outpatient clinics provide convenient access to specialized medical care without the need for hospitalization. We offer a wide range of outpatient services, including consultations, diagnostic tests, vaccinations, and minor procedures.</p>
          </div>
        </section>
        <section>
          <img src={emergencyImage} alt="Emergency Services" className="service-image" />
          <div className="service-description">
            <h2>Emergency Services</h2>
            <p>Peerless Hospital's emergency department is staffed by highly skilled healthcare professionals who are trained to respond to medical emergencies promptly. We offer 24/7 emergency care for patients requiring urgent medical attention.</p>
          </div>
        </section>
        <section>
          <img src={specialtyImage} alt="Specialty Services" className="service-image" />
          <div className="service-description">
            <h2>Specialty Services</h2>
            <p>Our hospital is equipped with specialized departments that offer advanced medical care in various fields, including cardiology, neurology, orthopedics, oncology, and more. Our multidisciplinary teams work collaboratively to deliver personalized treatment plans tailored to each patient's needs.</p>
          </div>
        </section>
        <section>
          <img src={diagnosticImage} alt="Diagnostic Services" className="service-image" />
          <div className="service-description">
            <h2>Diagnostic Services</h2>
            <p>We provide a comprehensive range of diagnostic services to aid in the accurate diagnosis and treatment of medical conditions. Our state-of-the-art facilities include advanced imaging technologies, laboratory services, and specialized diagnostic tests.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
