import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
    }
  }

  async fetchCharacters () {
    const fetchUrl = await fetch('https://rickandmortyapi.com/api/character')
    const responseJson = await fetchUrl.json()
    this.setState({
      characters: responseJson.results
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state
    return(
      <div className='App'>
        <h1>
          Rick and Morty Characters:
        </h1>
        <div className='body'>
          {characters.map(({ name, image }) => {
            return(
              <div className='container' key={ name }>
                <h3>{name}</h3>
                <img src={ image } alt={ name } />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
