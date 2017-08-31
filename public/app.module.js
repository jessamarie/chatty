/* global angular $ io */

(function () {
  var socket = io()

  angular.module('chattyApp', [])
  .controller('ChattyController', ['$scope', ChattyController])

  function ChattyController ($scope) {
    // contains all incoming messages
    let self = this
    this.messages = []

    // append to page
    socket.on('chat message', function (msg) {
      self.messages.push(msg)
      console.log(msg)
      // Socket events will not trigger a state change in Angular.
      // so we need to force a state change
      $scope.$apply()
    })

    $(function () {
      // load the socket.io-client
      $('form').submit(function (e) {
        socket.emit('chat message', $('#m').val())
        $('#m').val('')
        return false
      })
    })
  }
})()
