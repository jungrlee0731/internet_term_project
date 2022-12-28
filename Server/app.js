const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const flights = require('./routes/api/flights');
const app = express();
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Server'));
app.use('/api/flights', flights);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
