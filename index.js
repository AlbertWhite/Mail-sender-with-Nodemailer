//nodemailer is the packge I am using now
var nodemailer = require('nodemailer');

//smtp config. essential for node, but not for PHP
var smtpConfig = {
//in the office 365 mail settings, the host is smtp.office365.com, but it is not working	
    host: 'outlook-emeawest.office365.com',
    port: 587,
    auth: {
        user: 'albert.yuebai@pilotfish.eu',
        pass: ''//write your password here
    }
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Yuebai" <albert.yuebai@pilotfish.eu>', // sender address
    to: 'albert.yuebai@pilotfish.eu', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});