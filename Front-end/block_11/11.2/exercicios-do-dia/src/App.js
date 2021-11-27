import './App.css';
import React, { Component } from 'react';
import Pokemon from './component/Pokemon';
import pokemon from './data';


class Pokedex extends Component {
  render() {
    return (
      <section>
        <div className="pokemon-logo">
        <img src="https://uploads.spiritfanfiction.com/fanfics/historias/201210/pokemon-ridiculous-431762,281020121134.jpg" alt="pokemon-logo"/>
        </div>
        <div className="pokedex">
        {pokemon.map((listp) => <Pokemon key={listp.id} poks={listp}/>)}
        </div>
      </section>
    )
  } 
}

export default Pokedex;
