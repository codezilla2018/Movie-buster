
var exec = require("child_process").exec;
var express=require('express');
var app =express();
app.get('/', function(req, res){exec("php suscribe.php", function (error, stdout, stderr) {res.send(stdout);});});


console.log('the bot is starting');

var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var config = require('./config');
// console.log(config);
var T = new Twit(config);

var tweet={

    status : '#codezilla kosoohkk moblle'

}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if(err){
        console.log("somthing went wrong");
    }else{
        console.log("It works");
    }
    
  }