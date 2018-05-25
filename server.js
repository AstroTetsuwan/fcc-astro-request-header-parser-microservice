// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.



// http://expressjs.com/en/starter/basic-routing.html
app.all("*", function (req, res) {
  let ip = req.headers["x-forwarded-for"].split(",")[0],
      language = req.headers["accept-language"].split(",")[0],
      software = req.headers["user-agent"].split("(")[1].split(")")[0];
  
  res.json({ipaddress: ip, language: language, software: software});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
