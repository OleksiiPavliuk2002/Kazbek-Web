require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/menu',     require('./routes/menu'));
app.use('/api/bookings', require('./routes/bookings'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Kazbek API is running 🌿' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
