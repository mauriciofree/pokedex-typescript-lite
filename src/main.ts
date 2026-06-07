import { buscarPokemon } from "./services/PokeAPI";

async function main() {
  const pokemon = await buscarPokemon("pikachu");
  if (pokemon){
    console.log(pokemon);
  }
  const inexistente  = await buscarPokemon("pokemon-inexistente");
  if (inexistente){
    console.log(inexistente);
  }
}

main();