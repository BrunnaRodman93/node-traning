const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'brunnawolf13@gmail.com',
        pass: 'crucio1313',
    }
  });

  const mailOptions = {
    from: 'brunnawolf13@gmail.com',
    to: 'oliveira.qodeless@outlook.com',
    subject: 'E-mail enviado usando Node!',
    html: '<p>Olá, Ubuntu!</p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
 