var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 8000));

var pingService = require('./ping.js');
var ping = new pingService();

app.get('/', function(request, response) {
    ping.pingCoinhako();
    response.render('pages/main');
});

app.get('/price', function(request, response) {
    response.send({ "eth": ping.currentPrice, "myLimit": ping.litmitPrice });
});

app.post('/', function(request, response) {
    var price = request.body.price;
    var password = request.body.password;
    if (password != "secret") {
        console.log("password not match");
        response.send({ message: 'Invalid Password' });

    } else {
        ping.pingPrice(price);
        response.render('pages/main');
    }
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});