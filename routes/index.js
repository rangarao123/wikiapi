var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
//var app = connect('api.openweathermap.org/data/2.5/weather?q=London');
//var url=require('url');
//url.connect(' api.openweathermap.org/data/2.5/weather?q=London');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wikipedia' });
});
router.post('/wikipedia',function(req,res){



  var apiKey = '1a3e119332415d4efcd36b8bacc8a159';
  var name=req.body.name;

var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+name+"&limit=1&format=json";
  request(url, function (err, response, body) {
    if(err){
     console.log('error:', error);
   } else {
     var wikiname = JSON.parse(body);


console.log(wikiname);
      //let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      res.render('sucess',{wikiname});

    }
  });





//  cityname:req.body.cityname;


});
module.exports = router;
