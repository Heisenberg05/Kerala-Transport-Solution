const express = require('express')
const app = express()

app.use(express.static('public'));
app.set('port',process.env.PORT||5000)

app.set('view engine', 'ejs');
var ejs = require('ejs');

app.get('/home', function (req, res) {
	console.log(__dirname);
	res.render('home');
})

app.get('/result', function (req, res) {
	res.render('result')
})

app.get('/routes', function (req, res) {
	res.render('routes')
})

app.get('/placeSubmit', function(req, res){
	res.render('result');
})


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
});
