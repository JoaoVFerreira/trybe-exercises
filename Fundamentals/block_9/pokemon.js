// API do POKEMON -> https://pokeapi.co/
// Lista dos Pokemons -> https://www.pokemon.com/br/pokedex/

const appendPokemon = (pokemon, urlImagem) => {
  let ul = document.querySelector("ul");

  let li = document.createElement("li");
  let divName = document.createElement("div");
  let divImagem = document.createElement("div");
  let img = document.createElement("img");

  divName.innerHTML = pokemon;
  img.src = urlImagem;
  divImagem.appendChild(img);

  li.appendChild(divName);
  li.appendChild(divImagem);

  ul.appendChild(li);
};


const fetchPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon/charizard").then((response) => {
    response.json().then((dados) => {
      appendPokemon(dados.name, dados.sprites.front_default);
    });
    fetch("https://pokeapi.co/api/v2/pokemon/arcanine").then((response) => {
      response.json().then((dados) => {
        appendPokemon(dados.name, dados.sprites.front_default);
      });
      fetch("https://pokeapi.co/api/v2/pokemon/articuno").then((response) => {
        response.json().then((dados) => {
          appendPokemon(dados.name, dados.sprites.front_default);
        });
      });
    });
  });
};




window.onload = fetchPokemon();