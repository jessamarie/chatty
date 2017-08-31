var join = require('path').join
// express inits app to be a function
// handler that you can supply to
// an http server
var express = require('express')
var app = express()
var http = require('http').Server(app)

// serve static assets
app.use(express.static('public'))

// define homepage route
app.get('/', function (req, res) {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

// make http listen on port 3000
http.listen(3000, function () {
  console.log('listening on *:3000')
})
