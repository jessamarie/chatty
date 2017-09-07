import React, { Component } from 'react'

class Chat extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleMessageSend}>
          <input placeholder='Enter a message'
            onChange={this.props.handleMessageInput}
            value={this.props.message}
            autoComplete='off' />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

export default Chat
