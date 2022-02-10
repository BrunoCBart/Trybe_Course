import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../pokemons'
export default class PokemonList extends React.Component {

  render() {
    return (
      <div className={'pokemons-container'}>
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} pkm={pokemon}/>
        ))}
      </div>
    )
  }
}
