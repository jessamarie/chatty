import React, { Component } from 'react'
import io from 'socket.io-client'
const socket = io()
// import './App.css'

import MessageContainer from './MessageContainer'
import Messages from './Messages'

class App extends Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      text: ''
    }
    this.addMessage = this.addMessage.bind(this)
    this.receiveMessage = this.receiveMessage.bind(this)
  }

  /* Socket specific methods */
  componentDidMount () {
    socket.on('chat message', this.receiveMessage)
  }

  receiveMessage (msg) {
    this.state.messages.push(msg)
  }

  /* Component methods */
  addMessage (name, message) {
    this.setState({ text: `${name}: ${message}`})
    socket.emit('chat message', this.state.text)
  }

  render () {
    console.log(this.state.messages)
    return (
      <div className='App'>
        <header><h1>Chatty</h1></header>
        <main>
          <Messages messages={this.state.messages} />
          <MessageContainer socket={this.state.socket} addMessage={this.addMessage} />
        </main>
        <footer>
          <p>Made with &hearts; by Jessa</p>
          <a href='https://github.com/jessamarie/chatty' target='_blank'>
            <i className='fa fa-2x fa-github' aria-hidden='true' />
          </a>
        </footer>
      </div>
    )
  }
}

export default App
