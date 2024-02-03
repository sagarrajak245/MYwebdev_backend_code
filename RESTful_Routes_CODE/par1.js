const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Process the form data (e.g., save to database, send email, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    // Redirect the user to a thank-you page
    res.redirect('/thank-you');
});

// Route to thank the user after form submission
app.get('/thank-you', (req, res) => {
    res.send('Thank you for submitting the form!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
