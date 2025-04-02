require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const API_URL = "https://rata.digitraffic.fi/api/v1/train-locations/latest/";

app.use(cors());

app.get('/api/trains', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch train locations' });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/api/trains`));
