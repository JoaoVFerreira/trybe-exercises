import './App.css';
import React, { Component } from 'react';
import Pokemon from './component/Pokemon';
import pokemon from './data';


class Pokedex extends Component {
  render() {
    return (
      <section>
        <h1>PoKeDeX</h1>
        <Pokemon poks={pokemon[1]}/>
      </section>
    )
  } 
}

export default Pokedex;
