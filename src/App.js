// App.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Import the placeholder image
import backgroundImage from './image.jpeg'; // Update the path accordingly

const Body = styled.body`
  margin: 0;
  padding: 0;
  height: 100vh; /* Full height of the viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  width: 100%; /* Full width of the viewport */
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
`;

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    selectedBatch: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.fullName || !formData.dateOfBirth || !formData.email || !formData.phoneNumber || !formData.selectedBatch) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Call the backend API to handle data
      const response = await axios.post('http://localhost:4000/api/submitForm', formData);
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error.message);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <Body>
      <Container>
        <h1>Yoga Class Admission Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Batch Selection:
            <select name="selectedBatch" value={formData.selectedBatch} onChange={handleInputChange}>
              <option value="">Select Batch</option>
              <option value="6-7AM">6-7AM</option>
              <option value="7-8AM">7-8AM</option>
              <option value="8-9AM">8-9AM</option>
              <option value="5-6PM">5-6PM</option>
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Container>
    </Body>
  );
};

export default App;
