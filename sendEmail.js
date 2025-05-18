import nodemailer from "nodemailer";

// Setup Nodemailer with Gmail or any other email service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // your email address
    pass: process.env.EMAIL_PASS,  // your app password
  },
});

// Send email function
const sendEmail = (to, subject, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: message,
  };

  return transporter.sendMail(mailOptions);
};

export default sendEmail;
