/* global angular $ io */

(function () {
  angular.module('chattyApp', [])
  .controller('ChattyController', ['$scope', ChattyController])

  function ChattyController ($scope) {
    // contains all incoming messages
    var socket = io()
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

    this.sendMessage = function () {
      socket.emit('chat message', this.message)
    }
  }
})()
