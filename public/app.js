/* global angular io */
var socket = io()

var vm = new Vue({
  el: '#app',
  data: {
    messages: [],
    message: ''
  },
  mounted: function () {
    var self = this
    console.log(self)
    socket.on('chat message', function (msg) {
      self.messages.push(msg)
      // $scope.$apply()
    })
  },
  methods: {
    sendMessage: function () {
      socket.emit('chat message', this.message)
      this.message = ''
    }
  }
})
