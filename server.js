// Require modules
const express = require('express');

// Create the Express app
const app = express();


// Mount routes
app.get('/greeting/:name', function(req, res) {
  	res.send(` ${req.params.name} ! It's so great to see you! `);

});
//Greetings
app.get('/greeting', function(req, res) {
    res.send(`Hello, stranger! `);

});
//Tip Calculator
app.get('/tip/:total', function(req, res) {
    res.send('Total tips are  ' + req.params.total +10 );

});

app.get('/tip/:total/:tipPercentage', function(req, res) {
    let p=parseInt(req.params.tipPercentage);
    let t=parseInt(req.params.total);
    res.send(`${t/100*p}`);

});

//Magic 8 Ball
app.get('/magic/:Will%20I%20Be%20A%20Millionaire', function(req, res) {
    let answer=["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    res.send(`Will I be a Millionaire ?  <h1>${answer[getRandomInt(21)] } </h1>`);
    console.log(answer[getRandomInt(21)])
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
});

app.get('/magic/:question', function(req, res) {
    let answer=["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    res.send(`Will I be a Millionaire ?  <h1>${answer[getRandomInt(21)] } </h1>`);
    console.log(answer[getRandomInt(21)])
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});
