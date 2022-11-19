import { getPokemon } from '../generics/get-pokemon';


getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(err => console.error(err))
    .finally(() => console.log('end get poke'))