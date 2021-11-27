import React, { Component } from 'react'

class TextArea extends Component {
  render() {

    const {value, handleChange} = this.props

    return (
      <label>
        Write something nice:
        <textarea type='text' value={value} onChange={handleChange} name='write' />
        <span>{value.length > 50 ? alert('texto giga biga') : ''}</span>
      </label>
    )
  }
}

export default TextArea;