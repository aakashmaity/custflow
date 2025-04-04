// Implement - sendMail functionality

const fs = require('fs');
const mongoose = require('mongoose');

const { render } = require('@react-email/components');
const nodemailer = require('nodemailer');


const mail = async (req, res) => {
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  res.send("Hello World");

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "aakashmaity52@gmail.com",
    subject: "Sending test mail",
    text: "Holaaaa!!!",
  }

  transporter.sendMail(mailOptions, (err,info) => {
    if(err){
      console.log(err);
    }
    else{
      console.log("Email sent:" ,info.response);
    }
  })
  return res.status(200).json({
    success: true,
    result: 'Done' ,
    message: 'Email sent successfully',
  });
};

module.exports = mail;
