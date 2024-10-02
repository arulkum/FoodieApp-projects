import React, { useState } from 'react';
import Footer from './footer';
const ComplaintForm = () => {
  const [complaint, setComplaint] = useState({
    name: '',
    email: '',
    issue: '',
    description: ''
  });
  
  const [complaintsList, setComplaintsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({ ...complaint, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplaintsList([...complaintsList, complaint]);
    setComplaint({ name: '', email: '', issue: '', description: '' });
  };

  return (
    <div>
    <div style={styles.container}>
      <h2 style={styles.heading}>Complaint Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={complaint.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={complaint.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Issue:</label>
          <input
            type="text"
            name="issue"
            value={complaint.issue}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Description:</label>
          <textarea
            name="description"
            value={complaint.description}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Submit Complaint</button>
      </form>
      
      </div>
      <h3 style={styles.subheading}>Submitted Complaints</h3>
      {/* <ul>
        {complaintsList.map((comp, index) => (
          <li key={index} style={styles.complaintItem}>
            <strong>{comp.name}</strong> ({comp.email}) - <em>{comp.issue}</em>
            <p>{comp.description}</p>
          </li>
        ))}
      </ul> */}
  
    <Footer/>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  subheading: {
    textAlign: 'center',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
    height: '100px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  complaintItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
  }
};

export default ComplaintForm;
