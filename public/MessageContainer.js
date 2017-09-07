import React, { Component } from 'react'
import Name from './Name'
import Chat from './Chat'

class MessageContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      hasName: false,
      message: ''
    }

    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleNameSubmit = this.handleNameSubmit.bind(this)
    this.handleMessageInput = this.handleMessageInput.bind(this)
    this.handleMessageSend = this.handleMessageSend.bind(this)
  }

  handleNameInput (e) {
    e.preventDefault()
    this.setState({ name: e.target.value })
  }

  handleNameSubmit (e) {
    e.preventDefault()
    console.log(this.state.name)
    if (this.state.name) {
      this.setState({ hasName: true })
    }
  }

  handleMessageInput (e) {
    e.preventDefault()
    this.setState({ message: e.target.value })
  }

  handleMessageSend (e) {
    e.preventDefault()
    if (this.state.message) {
      this.props.addMessage(this.state.name, this.state.message)
      this.state.message = ''
    }
  }

  render () {
    return (
      <div>
        {this.state.hasName === true ? (
          <div><Chat handleMessageInput={this.handleMessageInput}
            handleMessageSend={this.handleMessageSend}
            message={this.state.message} />
          </div>
        ) : (
          <div><Name handleNameInput={this.handleNameInput}
            handleNameSubmit={this.handleNameSubmit}
            name={this.state.name} />
          </div>
        )}
      </div>
    )
  }
}

export default MessageContainer
