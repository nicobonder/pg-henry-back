const express = require('express');
const mailer = require('../../mailer')
const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { emailTo, subject, body } = req.body;
  
  try {
    await mailer(emailTo, subject, body);
    
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
