const fs = require('fs');
const path = require('path');
const axios = require('axios');
const nodemailer = require('nodemailer');
const { SendPaymentReceipt } = require('@/emailTemplate/SendEmailTemplate');

const mail = async (req, res) => {
  const { jsondata } = req?.body;
  const { client } = jsondata;


  const fileUrl = `${process.env.PUBLIC_SERVER_FILE}/download/payment/payment-${jsondata?._id}.pdf`;
  const fileName = `payment-${jsondata?._id}.pdf`;
  const filePath = path.join(__dirname, fileName);

  try {
    const response = await axios.get(fileUrl, { responseType: 'stream' });

    // Save file locally
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const htmlContent = SendPaymentReceipt({
      title: 'Your Payment receipt from Custflow',
      clientName: client?.name,
      time: new Date().toLocaleString(),
      jsondata,
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: client?.email,
      subject: 'Payment Successful 🎉',
      html: htmlContent,
      attachments: [
        {
          filename: fileName,
          path: filePath,
        },
      ],
    };

    transporter.sendMail(mailOptions, (err, info) => {
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting temp file:', unlinkErr);
      });

      if (err) {
        console.error('Email sending error:', err);
        return res.status(500).json({
          success: false,
          message: 'Failed to send email',
        });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({
          success: true,
          result: null,
          message: 'Email sent successfully',
        });
      }
    });

  } catch (error) {
    console.error('Error handling attachment:', error);
    return res.status(500).json({
      success: false,
      message: 'Error while downloading or sending attachment',
    });
  }
};

module.exports = mail;
