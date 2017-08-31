var join = require('path').join
// express inits app to be a function
// handler that you can supply to
// an http server
var express = require('express')
var app = express()
var http = require('http').Server(app)
var client = require('socket.io')(http)

// serve static assets
app.use(express.static('public'))
app.use(express.static('node_modules'))

// define homepage route
app.get('/', function (req, res) {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

// listen to socket
client.on('connection', function (socket) {
  console.log('a user connected')
  // socket.on('disconnect', () => {
  //   console.log('user disconnected')
  // })
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
  })
})

// make http listen on port 3000
http.listen(3000, function () {
  console.log('listening on *:3000')
})
