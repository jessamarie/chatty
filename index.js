// express inits app to be a function
// handler that you can supply to
// an http server
var app = require('express')()
var http = require('http').Server(app)

// define homepage route
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

// make http listen on port 3000
http.listen(3000, function () {
  console.log('listening on *:3000')
})
