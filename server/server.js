require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

const PORT = process.env.PORT || 5001;

// API routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/applications', require('./routes/applications'));

// Serve client build in production (if you build client to ../client/dist)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html')));
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
