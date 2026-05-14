const { saveApplication } = require('../lib/forms');

module.exports = async function applicationsHandler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await saveApplication(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message || 'server error' });
  }
};
