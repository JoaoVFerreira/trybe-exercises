// API do POKEMON -> https://pokeapi.co/
// Lista dos Pokemons -> https://www.pokemon.com/br/pokedex/

const appendPokemon = (pokemon, urlImagem) => {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  const divNome = document.createElement("div");
  const divImagem = document.createElement("div");
  const img = document.createElement("img");

  divNome.innerHTML = pokemon;
  img.src = urlImagem;
  divImagem.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImagem);

  ul.appendChild(li);

}

const getPokemon = (pokemon, callback) => {
  fetch('`https://pokeapi.co/api/v2/pokemon/${pokemon}`')
    .then((response) => {
      response.json().then((dados) => {
        appendPokemon(dados.name, dados.sprites.front_default);

        callback ? callback() : undefined;
      });
    });
};

const erro = (msg) => msg;


const getPokemonPromise = (pokemon) => {
  return new Promise((resolve, reject) => {
    if (pokemon === undefined) {
      reject('Voce precisa definir um pokemon para continuar!')
    } else if (pokemon !== 'atanes') {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
        if (response.ok) {
          response.json().then((dadosPokemon) => {
            appendPokemon(
              dadosPokemon.nome,
              dadosPokemon.sprites.front_default
            );
            resolve()
          });
        } else {
          reject('Atanes não é pokemon');
        }
      });
    } else {
      reject('Atanes não é pokemon')
    }
  });
};


const fetchPokemon = async () => {
  try {
    await getPokemonPromise("ditto");
    await getPokemonPromise("rattata");
    await getPokemonPromise("pikachu");
    await getPokemonPromise("zubat");
    await getPokemonPromise("atanes");
  } catch (error) {
    console.log(error);
  }
}


window.onload = fetchPokemon();