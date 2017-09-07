import React, { Component } from 'react'

class Name extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleNameSubmit}>
          <input placeholder='Enter your name'
            onChange={this.props.handleNameInput}
            value={this.props.name}
            autoComplete='off' />
          <button type='submit'>Set Name</button>
        </form>
      </div>
    )
  }
}

export default Name
