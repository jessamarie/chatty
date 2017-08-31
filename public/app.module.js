(function () {
  angular.module('chattyApp', ['ui.router'])
  .controller('ChattyController', [ChattyController])

  function ChattyController () {
    // contains all incoming messages
    this.messages = []
  }
})
