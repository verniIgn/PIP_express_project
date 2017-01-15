var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

// parses application/x-www-form-urlencoded
//Returns middleware that only parses urlencoded bodies. This parser 
//accepts only UTF-8 encoding of the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var swords = require('./routes/swords')

app.use('/api/swords', swords);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');