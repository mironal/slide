var request = require('request');

var url = 'http://ha.logginging.org/hotentrys';

request(url, function(error, response, body){
  if(error) return console.log(error);
  console.log(body);
});
