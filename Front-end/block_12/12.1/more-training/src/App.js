import './App.css';
import React from 'react';

class App extends React.Component {
  constructor () {
    super ()
    this.handleLucão = this.handleLucão.bind(this)
    this.handleJoão = this.handleJoão.bind(this)
    this.handleJorjão = this.handleJorjão.bind(this)

    this.state = {
      lucasClick: 0,
      joãoClick: 42,
      jorgeClick: 60
    }
  }
  handleLucão (){
    this.setState((estadoAnterior, _props) => ({
      lucasClick: estadoAnterior.lucasClick + 4
    }), () => {
      console.log(`LucasButton${this.changeColorIf(this.state.lucasClick)}`)
    })
  }
  handleJoão (){
    this.setState((estadoAnterior, _props) => ({
      joãoClick: estadoAnterior.joãoClick + 3
    }), () => {
      console.log(`JoãoButton${this.changeColorIf(this.state.joãoClick)}`)
    })
  }
  handleJorjão (){
    this.setState((estadoAnterior, _props) => ({
      jorgeClick: estadoAnterior.jorgeClick + 1
    }), () => {console.log(`JorgeButton${this.changeColorIf(this.state.jorgeClick)}`)})
  }

  changeColorIf (num) {
    return num % 2 === 0 ? 'grey' : 'black'
  }


  render() {
    return (
      <div>
        <button 
        style={{backgroundColor:this.changeColorIf(this.state.lucasClick)}}
        onClick={this.handleLucão}
        >{this.state.lucasClick}</button>
        <button 
        style={{backgroundColor:this.changeColorIf(this.state.joãoClick)}}
        onClick={this.handleJoão}>
          {this.state.joãoClick}</button>
        <button 
        style={{backgroundColor:this.changeColorIf(this.state.jorgeClick)}}
        onClick={this.handleJorjão}
        >{this.state.jorgeClick}</button>
      </div>
    )
  }
}

export default App;
