// Implement - sendMail functionality

const fs = require('fs');
const mongoose = require('mongoose');

const mail = async (req, res) => {
  return res.status(200).json({
    success: true,
    result: null,
    message: 'Please Upgrade to Premium  Version to have full features',
  });
};

module.exports = mail;
