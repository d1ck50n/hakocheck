var emailService = function() {

    const nodemailer = require('nodemailer');
    const self = this;

    self.isEmailSent = false;

    self.sendEmail = function sendEmail(price) {
        console.log("sending email for price... " + price);
        // disable email send in certain interval if it hit the same condition, else it bload the mailbox
        setInterval(function() {
            self.isEmailSent = false;
        }, 20000);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cohakoping@gmail.com',
                pass: 'cohakopass'
            }
        });

        var mailOptions = {
            from: 'cohakoping@gmail.com',
            to: '9w2sky@protonmail.com',
            subject: 'C-O-H-A-K-O',
            text: 'Price is now RM' + price
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = emailService;