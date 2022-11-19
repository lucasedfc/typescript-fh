import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';
charmander.publicApi = 'sarasa';

console.log(charmander);


// charmander.savePokemonToDB(1);
