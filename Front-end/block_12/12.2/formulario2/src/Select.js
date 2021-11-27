import React, { Component } from 'react'

class Select extends Component {

  render() {

    const {value, handleChange} = this.props 

    return (
      <label>
        Frutas:
        <select  name='frutas' value={value} onChange={handleChange}>
          <option value='laranja'>Laranja</option>
          <option value='manga'>Manga</option>
          <option value='melancia'>Melancia</option>
          <span>{value === 'manga' ? alert(`${value} é a melhor fruta`) : ''}</span>
        </select>
      </label>
    )
  }
}

export default Select;
