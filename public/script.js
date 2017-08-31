/* global $ io */

$(function () {
  // load the socket.io-client
  var socket = io()
  $('form').submit(function () {
    socket.emit('chat message', $('#m').val())
    $('#m'.val(''))
    return false
  })
})
