/* global Vue io */
var socket = io()

var vm = new Vue({
  el: '#app',
  data: {
    messages: [],
    message: '',
    name: '',
    hasName: false
  },
  mounted: function () {
    var self = this
    socket.on('chat message', function (msg) {
      self.messages.push(msg)
    })
  },
  methods: {
    sendMessage: function () {
      if (this.message) {
        socket.emit('chat message', `${this.name}: ${this.message}`)
        this.message = ''
      }
    },
    saveName: function () {
      if (this.name) {
        this.hasName = true
      }
    }
  }
})
