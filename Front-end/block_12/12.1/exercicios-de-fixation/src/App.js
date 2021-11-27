import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
  }

  handleClick() {
   
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1
    }), () => {
      console.log(this.changeColor(this.state.numeroDeClicks))
    }
    )
    
  }

  changeColor (num) {
    return num % 2 === 0 ? 'green' : 'purple'
  }

  render() {
    console.log(this)
    return (
        <button 
        onClick={this.handleClick}
        style={{backgroundColor: this.changeColor(this.state.numeroDeClicks)}}
        >{this.state.numeroDeClicks} </button> 
    )
  }
}

export default App;
