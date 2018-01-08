var emailService = function() {

    const sgMail = require('@sendgrid/mail');
    const self = this;

    self.isEmailSent = false;

    self.sendEmail = function sendEmail(price) {
        console.log("sending email for price... " + price);
        // disable email send in certain interval if it hit the same condition, else it bload the mailbox
        setInterval(function() {
            self.isEmailSent = false;
        }, 60 * 60 * 1000);

        sgMail.setApiKey("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");
        const msg = {
            to: '9w2sky@protonmail.com',
            from: 'pricealert@dicksonkho.com',
            subject: 'My Coinhako Price Alert',
            text: 'Price is now RM' + price,
            // html: 'Price is now RM' + price.
        };
        sgMail.send(msg);
    }
}

module.exports = emailService;