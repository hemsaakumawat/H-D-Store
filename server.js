const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Form ka data read karne ke liye
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTML, CSS, Images ko serve karne ke liye
app.use(express.static(path.join(__dirname)));

// 1. Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy.html'));
});

// Favicon icon route
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', 'logo.png'));
});

// 2. Contact Form ka data receive karne ke liye route
app.post('/api/contact', (req, res) => {
    const { name, email, occasion, message } = req.body;
    
    console.log("--- Naya Message Aaya! ---");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Occasion:", occasion);
    console.log("Message:", message);

    // Frontend ko success message bhejna
    res.json({ success: true, message: "Aapka message server par receive ho gaya!" });
});

// Server start karna
app.listen(PORT, () => {
    console.log(`Server chal raha hai: http://localhost:${PORT}`);
});
