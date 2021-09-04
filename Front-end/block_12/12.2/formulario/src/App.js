import React from 'react';
import './App.css';



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    const { value , name } = event.target
    this.setState ({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(`Obrigado pelas informações enviadas ${this.state.name}`)
  }

  render() {
    const { name, email, password } = this.state
    return (
      <form>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            E-mail:
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
        </div>
        <button type="submit" onClick={this.handleSubmit} >ENVIAR</button>
      </form>
    );
  }

}

export default App;
