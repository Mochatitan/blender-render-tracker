    // server.js (Express.js backend)
    const express = require('express');
    const app = express();
    const port = 3001; // Or any available port

    app.use(express.json()); // To parse JSON request bodies

    app.get('/api/data', (req, res) => {
        const data = { message: 'Hello from Express!' };
        res.json(data); // Send JSON response
    });

    app.post('/api/submit', (req, res) => {
        const receivedData = req.body;
        console.log('Received data:', receivedData);
        res.status(200).json({ message: 'Data received successfully!' });
    });

    app.listen(port, () => {
        console.log(`Express server listening at http://localhost:${port}`);
    });