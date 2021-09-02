import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.handleClickL = this.handleClickL.bind(this)
    this.handleClickF = this.handleClickF.bind(this)
    this.handleClickJ = this.handleClickJ.bind(this)
  }

  handleClickL() {
    console.log('SIM')
    console.log(this)
  }

  handleClickJ() {
    console.log('NÃO')
    console.log(this)
  }

  handleClickF() {
    console.log('Jorges, Sandra Marreca, Juca Tigre, Lucão Tetudão')
    console.log(this)
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClickL}>Lucão é Tonhão?</button>
        <button onClick={this.handleClickJ}>João domina kickão?</button>
        <button onClick={this.handleClickF}>Family</button>
      </div>
    )
  }
}

export default App;
