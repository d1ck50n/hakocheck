var pingService = function() {

    const https = require('https');
    const emailService = require('./email.js');
    const mail = new emailService();
    const self = this;

    self.currentPrice = 0;
    self.litmitPrice = 0;
    self.pingPrice = function(price) {
        console.log("set alert for price RM " + price);
        self.litmitPrice = price;
        mail.isEmailSent = false;

        var requestLoop = setInterval(function() {
            self.litmitPrice = price;
            if (self.currentPrice <= self.litmitPrice && mail.isEmailSent == false) {
                console.log("Prices is now lower than " + price);
                mail.sendEmail(self.currentPrice)
                mail.isEmailSent = true;

            } else {
                console.log("Price is still higher...");
            }

        }, 10000);
    }


    self.pingCoinhako = function() {
        var requestLoop = setInterval(function() {
            https.get('https://www.coinhako.com/api/v1/price/currency/ETHMYR', (resp) => {
                resp.setEncoding("utf8");
                let responseData = '';

                resp.on('data', (chunk) => {
                    responseData += chunk;
                });

                resp.on('end', () => {
                    responseData = JSON.parse(responseData);
                    self.currentPrice = responseData.data.buy_price;
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
            });
        }, 5000);
    }
}
module.exports = pingService;