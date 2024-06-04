// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const [responseMessage, setResponseMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const result = await response.json();
//             if (result.success) {
//                 setResponseMessage('Your message has been sent successfully!');
//                 setFormData({ name: '', email: '', message: '' });
//             } else {
//                 setResponseMessage('Failed to send your message. Please try again later.');
//             }
//         } catch (error) {
//             setResponseMessage('An error occurred. Please try again later.');
//         }
//     };

//     return (
//         <div className="contact-container">
//             <h1>Contact Us</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="message">Message:</label>
//                 <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                 ></textarea>

//                 <button type="submit">Send Message</button>
//             </form>
//             {responseMessage && <p>{responseMessage}</p>}
//         </div>
//     );
// };

// export default Contact;



import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <p>If you have any questions, feel free to reach out to us!</p>
            <ul>
              <li><strong>Phone:</strong> 123-456-7890</li>
              <li><strong>Email:</strong> info@hospital.com</li>
              <li><strong>Address:</strong> 123 Medical Street, Health City, State</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
