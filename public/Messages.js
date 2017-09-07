import React, { Component } from 'react'

class Messages extends Component {

  render () {
    var op = this.props.messages.map((message, index) => {
      return (
        <li key={index}>{message}</li>
      )
    })

    return (
      <ul className='messages'>
        {op}
      </ul>
    )
  }
}

export default Messages
