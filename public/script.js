/* global $ io */

$(function () {
  // load the socket.io-client
  var socket = io()
  $('form').submit(function () {
    socket.emit('chat message', $('#m').val())
    $('#m').val('')
    return false
  })
  // append to page
  socket.on('chat message', function (msg) {
    $('#messages').append($('<li>').text(msg))
  })
})
