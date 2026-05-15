const express = require('express');
const { saveApplication } = require('../lib/forms');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await saveApplication(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message || 'server error' });
  }
});

module.exports = router;
