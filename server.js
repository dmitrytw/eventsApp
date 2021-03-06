var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// routes-------------------
app.get('*', function(req, res){
	res.sendfile('./public/index.html'); //load the single view file (angular will handle the page changed on the front-end)

});