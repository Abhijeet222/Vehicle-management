const express = require('express');
const Email = require('../models/Email');
const authMiddleware = require('../middleware/authMiddleware'); // protect routes

const router = express.Router();

// Add email
router.post('/', authMiddleware, async (req, res) => {
  const { email } = req.body;

  try {
    const newEmail = new Email({
      email,
      addedBy: req.user.id
    });

    await newEmail.save();
    res.status(201).json({ message: 'Email added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all emails
router.get('/', authMiddleware, async (req, res) => {
  try {
    const emails = await Email.find().populate('addedBy', 'username email');
    res.json(emails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
