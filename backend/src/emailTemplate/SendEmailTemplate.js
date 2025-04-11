exports.SendInvoice = ({
  title = 'Invoice from Custflow',
  clientName = '',
  time = new Date(),
  jsondata,
}) => {
  return `
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; border: 1px solid #e0e0e0;">
    
    <!-- Header with logo -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://res.cloudinary.com/dlcb33pfi/image/upload/v1744293605/logo-text_2_cxpj6r.png" alt="Custflow Logo" style="height: 80px; margin-bottom: 10px;" />
      <h2 style="margin: 0; color: #2a2a2a;">${title}</h2>
    </div>

    <!-- Banner Image -->
    <div style="text-align: center;">
      <img src="https://res.cloudinary.com/dlcb33pfi/image/upload/v1744304586/Pastel_Rainbow_Modern_January_Monthly_Email_Header_nmboxb.png" alt="Invoice Banner" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin: 10px 0;" />
    </div>

    <!-- Greeting and Message -->
    <p style="font-size: 16px; margin-top: 20px;">Hi <strong>${clientName}</strong>,</p>
    <p style="font-size: 15px; line-height: 1.6;">
      Thank you for choosing <strong>CustFlow</strong>. We’ve attached your invoice to this email for your records.
    </p>
    <p style="font-size: 15px; line-height: 1.6;">
      If you have any questions, feel free to reach out to us. We appreciate your business!
    </p>

    <!-- Company Details -->
    <div style="margin-top: 30px; font-size: 14px;">
      <p style="margin-bottom: 4px;"><strong>Company:</strong> CustFlow</p>
      <p style="margin-bottom: 4px;"><strong>Email:</strong> support@custflow.com</p>
      <p style="margin-bottom: 4px;"><strong>Phone:</strong> +123-456-7890</p>
      <p style="margin-bottom: 0;"><strong>Website:</strong> <a href="https://custflow.vercel.app" style="color: #007bff;">custflow.vercel.app</a></p>
    </div>

    <!-- Footer -->
    <div style="margin-top: 40px; text-align: center; font-size: 13px; color: #888;">
      <p>This is an automated email — please do not reply directly.</p>
      <p>&copy; ${new Date().getFullYear()} CustFlow. All rights reserved.</p>
    </div>
  </div>
    `;
};

exports.SendQuote = ({
  title = 'Quote from Custflow',
  clientName = '',
  time = new Date(),
  jsondata,
}) => {
  return `
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; border: 1px solid #e0e0e0;">
    
      <!-- Header with logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://res.cloudinary.com/dlcb33pfi/image/upload/v1744293605/logo-text_2_cxpj6r.png" alt="Custflow Logo" style="height: 80px; margin-bottom: 10px;" />
        <h2 style="margin: 0; color: #2a2a2a;">${title}</h2>
      </div>

      <!-- Banner Image -->
      <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dlcb33pfi/image/upload/v1744304586/Pastel_Rainbow_Modern_January_Monthly_Email_Header_nmboxb.png" alt="Invoice Banner" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin: 10px 0;" />
      </div>

      <!-- Greeting and Message -->
      <p style="font-size: 16px; margin-top: 20px;">Hi <strong>${clientName}</strong>,</p>
      <p style="font-size: 15px; line-height: 1.6;">
        Thank you for choosing <strong>CustFlow</strong>. We’ve attached your quotation to this email for your records.
      </p>
      <p style="font-size: 15px; line-height: 1.6;">
        If you have any questions, feel free to reach out to us. We appreciate your business!
      </p>

      <!-- Company Details -->
      <div style="margin-top: 50px; font-size: 14px;">
        <p style="margin-bottom: 2px;"><strong>Company:</strong> CustFlow</p>
        <p style="margin-bottom: 2px;"><strong>Email:</strong> support@custflow.com</p>
        <p style="margin-bottom: 2px;"><strong>Phone:</strong> +123-456-7890</p>
        <p style="margin-bottom: 0;"><strong>Website:</strong> <a href="https://custflow.vercel.app" style="color: #007bff;">custflow.vercel.app</a></p>
      </div>

      <!-- Footer -->
      <div style="margin-top: 40px; text-align: center; font-size: 13px; color: #888;">
        <p>This is an automated email — please do not reply directly.</p>
        <p>&copy; ${new Date().getFullYear()} CustFlow. All rights reserved.</p>
      </div>
    </div>
    `;
};

exports.SendOffer = ({ title = 'Offer from Custflow', name = '', time = new Date() }) => {
  return `
    <div>

        <head data-id="__react-email-head">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>${title}</title>
        </head>
        <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Your offer - Custflow<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
        </div>

        <body data-id="__react-email-body">
            <h2 data-id="react-email-heading">${title}</h2>
            <hr data-id="react-email-hr" style="width:100%;border:none;border-top:1px solid #eaeaea" />
            <p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0">Hello ${name},</p>
            <p data-id="react-email-text" style="font-size:14px;line-height:24px;margin:16px 0">Here&#x27;s the offer you requested at ${time}</p>
        </body>
    </div>
    `;
};

exports.SendPaymentReceipt = ({
  title = 'Payment Receipt from Custflow',
  clientName = '',
  time = new Date(),
  jsondata
}) => {
  return `
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; border: 1px solid #e0e0e0;">

      <!-- Header with logo -->
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://res.cloudinary.com/dlcb33pfi/image/upload/v1744293605/logo-text_2_cxpj6r.png" alt="Custflow Logo" style="height: 80px; margin-bottom: 10px;" />
        <h2 style="margin: 0; color: #2a2a2a;">${title}</h2>
      </div>

      <!-- Banner Image -->
      <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dlcb33pfi/image/upload/v1744304586/Pastel_Rainbow_Modern_January_Monthly_Email_Header_nmboxb.png" alt="Payment Success Banner" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin: 10px 0;" />
      </div>

      <!-- Greeting and Message -->
      <p style="font-size: 16px; margin-top: 20px;">Hi <strong>${clientName}</strong>,</p>
      <p style="font-size: 15px; line-height: 1.6;">
        We’re happy to inform you that your payment has been successfully processed. Thank you for your trust in <strong>CustFlow</strong>.
      </p>
      <p style="font-size: 15px; line-height: 1.6;">
        Your transaction receipt has been attached to this email for your records. If you have any questions, our support team is here to help.
      </p>

      <!-- Company Details -->
      <div style="margin-top: 50px; font-size: 14px;">
        <p style="margin-bottom: 2px;"><strong>Company:</strong> CustFlow</p>
        <p style="margin-bottom: 2px;"><strong>Email:</strong> support@custflow.com</p>
        <p style="margin-bottom: 2px;"><strong>Phone:</strong> +123-456-7890</p>
        <p style="margin-bottom: 0;"><strong>Website:</strong> <a href="https://custflow.vercel.app" style="color: #007bff;">custflow.vercel.app</a></p>
      </div>

      <!-- Footer -->
      <div style="margin-top: 40px; text-align: center; font-size: 13px; color: #888;">
        <p>This is an automated email — please do not reply directly.</p>
        <p>&copy; ${new Date().getFullYear()} CustFlow. All rights reserved.</p>
      </div>
  </div>
  `;
};
