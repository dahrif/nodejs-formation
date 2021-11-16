var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nodemailer1@gmail.com',
    pass: 'testnodejs'
  }
});

var mailOptions = {
  from: 'nodemailer1@gmail.com',
  to: 'dahri.fatima.dev@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was hard!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});