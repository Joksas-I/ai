const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/about.html'))
})
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/gallery.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/contact.html'))
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})
