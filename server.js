// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/submitForm', (req, res) => {
  const formData = req.body;

  // Basic server-side validation
  if (!formData.fullName || !formData.dateOfBirth || !formData.email || !formData.phoneNumber || !formData.selectedBatch) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Perform other server-side validations as needed

  // Save the data to a database or perform other actions
  // For simplicity, I'll just log the data
  console.log('Form data submitted:', formData);

  return res.json({ success: true, message: 'Form submitted successfully.' });
});
const port = 4000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
