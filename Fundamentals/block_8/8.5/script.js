const assert = require('assert');
const { cities, states, regions } = require('./data');
/**
 * Dado um arquivo com dados de regiões, estados e cidades, construir uma função (mapCities)
 * que retorna um objeto onde as propriedades são as siglas das regiões. Cada região é um array
 * que possuirá objetos com o nome da cidade e o nome do estado.
 * 
 * Bônus: Se a função receber um objeto com a propriedade includeRegionNames com o valor true,
 * o objeto de cada cidade/estado incluirá também o nome da região onde aquele estado se encontra.
 */

const expectedWithRegions = {
  N: [
    { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
    { city: 'Belém', state: 'Pará', region: 'Norte' },
    { city: 'Porto Nacional', state: 'Tocantins', region: 'Norte' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais', region: 'Sudeste' },
    { city: 'Presidente Prudente', state: 'São Paulo', region: 'Sudeste' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
    { city: 'Touros', state: 'Rio Grande do Norte', region: 'Nordeste' },
    { city: 'Jericoacoara', state: 'Ceará', region: 'Nordeste' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná', region: 'Sul' } ]
};
const expectedWithoutRegions = {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ]
};


const mapCities = (options = false) => {
  return cities.reduce((result, city) => {
    // se o resultado ainda não tiver a região da cidade...
    if (!Object.keys(result).includes(city.region)) {
      result[city.region] = []; // cria a chave da região
    }
    // puxa o nome do estado da cidade pela sigla
    const estadoDaCidade = states.find(state => state.short === city.state);
    // monta o newCity
    const newCity = {
      city: city.name,
      state: estadoDaCidade.name,
    }
    // Verifica se existe a opção includeRegionNames e é true
    if (options.includeRegionNames) {
      // puxa o nome da região
      const regiaoDaCidade = regions.find(region => city.region === region.short);
      // coloca região na newCity
      newCity.region = regiaoDaCidade.name;
    }
    // adiciona o newCity na região
    result[city.region].push(newCity);
    return result;
  }, {});
}
console.log(mapCities({ includeRegionNames: true }))

// AQUI ESTÁ OUTRO JEITO DE RESOLVER O MESMO PROBLEMA

const mapCities = (options = { includeRegionNames: false }) => {
  const { includeRegionNames } = options;
  return regions.reduce((acc, region) => {
    const regionCities = cities.filter(city => city.region === region.short);
    if (regionCities.length !== 0) {
      if (includeRegionNames) {
        acc[region.short] = regionCities.map(city => ({ city: city.name, state: states.find(state => state.short === city.state).name, region: region.name }));
        return acc;
      }
      acc[region.short] = regionCities.map(city => ({ city: city.name, state: states.find(state => state.short === city.state).name }));
      return acc;
    }
    return acc;
  }
  , {});
}


assert.deepStrictEqual(mapCities(), expectedWithoutRegions);
 assert.deepStrictEqual(mapCities({ includeRegionNames: false }), expectedWithoutRegions);
// assert.deepStrictEqual(mapCities({ includeRegionNames: true }), expectedWithRegions);