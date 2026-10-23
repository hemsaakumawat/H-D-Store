const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Form ka data read karne ke liye
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve public assets from the same root URLs used by Vercel.
const projectRoot = path.join(__dirname, '..');
app.use(express.static(__dirname));
app.use(express.static(projectRoot));

// 1. Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(projectRoot, 'index.html'));
});

app.get('/shop', (req, res) => {
    res.sendFile(path.join(projectRoot, 'shop.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(projectRoot, 'about.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(projectRoot, 'gallery.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(projectRoot, 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(projectRoot, 'contact.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(projectRoot, 'privacy.html'));
});

app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(projectRoot, 'privacy.html'));
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
