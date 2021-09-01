import React, { Component } from 'react';



class Pokemon extends Component {
  render() {
    const { poks } = this.props
    console.log(poks.name)
    return (
        <span>{poks.name}</span>
    )
  }
}

export default Pokemon