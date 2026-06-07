import { buscarPokemon } from "./services/PokeAPI";

async function main() {
  const pokemon = await buscarPokemon("pikachu");

  console.log(pokemon);
}

main();