import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        appointmentDate: '',
        doctorSpecialty: ''
    });

    const { name, email, appointmentDate, doctorSpecialty } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/appointments/book-appointment', formData);
            alert(res.data.message);
        } catch (err) {
            console.error(err.response.data);
            alert('Error booking appointment');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={onSubmit} style={styles.form}>
                <h2 style={styles.header}>Book an Appointment</h2>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} required style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Appointment Date</label>
                    <input type="date" name="appointmentDate" value={appointmentDate} onChange={onChange} required style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Doctor Specialty</label>
                    <input type="text" name="doctorSpecialty" value={doctorSpecialty} onChange={onChange} required style={styles.input} />
                </div>
                <button type="submit" style={styles.button}>Book Appointment</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '20px',
        color: '#333',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        marginTop: '10px',
    }
};

export default AppointmentForm;











// import React, { useState } from 'react';
// import axios from 'axios';

// const AppointmentForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         appointmentDate: '',
//         doctorSpecialty: ''
//     });

//     const { name, email, appointmentDate, doctorSpecialty } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:5000/api/appointments/book-appointment', formData);
//             alert(res.data.message);
//         } catch (err) {
//             console.error(err.response.data);
//             alert('Error booking appointment');
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <form onSubmit={onSubmit} style={styles.form}>
//                 <h2 style={styles.header}>Book an Appointment</h2>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label}>Name</label>
//                     <input type="text" name="name" value={name} onChange={onChange} required style={styles.input} />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label}>Email</label>
//                     <input type="email" name="email" value={email} onChange={onChange} required style={styles.input} />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label}>Appointment Date</label>
//                     <input type="date" name="appointmentDate" value={appointmentDate} onChange={onChange} required style={styles.input} />
//                 </div>
//                 <div style={styles.formGroup}>
//                     <label style={styles.label}>Doctor Specialty</label>
//                     <input type="text" name="doctorSpecialty" value={doctorSpecialty} onChange={onChange} required style={styles.input} />
//                 </div>
//                 <button type="submit" style={styles.button}>Book Appointment</button>
//             </form>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundColor: '#f0f2f5',
//     },
//     form: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         width: '300px',
//         textAlign: 'center',
//     },
//     header: {
//         marginBottom: '20px',
//         color: '#333',
//     },
//     formGroup: {
//         marginBottom: '15px',
//     },
//     label: {
//         display: 'block',
//         marginBottom: '5px',
//         color: '#333',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '5px',
//         border: '1px solid #ddd',
//         boxSizing: 'border-box',
//     },
//     button: {
//         padding: '10px 20px',
//         borderRadius: '5px',
//         border: 'none',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         cursor: 'pointer',
//         marginTop: '10px',
//     }
// };

// export default AppointmentForm;
