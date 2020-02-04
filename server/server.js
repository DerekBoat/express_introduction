const express = require('express'); //setting up express
const bodyParser = require('body-parser'); //setting up body parser

const app = express();
const port = 5000;

app.use(express.static('server/public')); //use is to call express, the next is express calling our static files. 
app.use(bodyParser.urlencoded({extended: true})); //how to call bodyparser
//body parser will result in an empty object when it is an error or bug

let quotes = [
    { quote: "I said that", who: "Casie"},
    { quote: "woof woof", who: "corey"},
    { quote: "you miss 100% of shots you don't take", who: "Michael Scott"}
];
console.log("this is quotes", quotes);

//getting a route
app.get('/quotes', function(req, res){
    console.log('we are in the get request');
 res.send(quotes);//great way to test a get, shows up in website localhost:port number
});//function needs a request and a response req and res




app.listen(port, () =>{console.log('listening on port: ', port); //usually goes to the bottom
// use control c to kill the server
});//=> is an annonymous unnamed function that only runs once 