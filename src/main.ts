import { buscarPokemon } from "./services/PokeAPI";
import { CatalogoPokemon } from "./models/CatalogoPokemon";

async function main() {
  const catalogo = new CatalogoPokemon();
  
  catalogo.listar();

  const pikachu = await buscarPokemon("pikachu");
  if (pikachu){
    // console.log(pikachu);
    catalogo.adicionar(pikachu);
  }

  catalogo.listar();

  const charmander = await buscarPokemon("charmander");
  if (charmander){
    catalogo.adicionar(charmander);
  }


  const pikachuDuplicado = await buscarPokemon("pikachu");

  if (pikachuDuplicado !== null) {
    catalogo.adicionar(pikachuDuplicado);
  }

  const inexistente  = await buscarPokemon("pokemon-inexistente");
  if (inexistente){
    // console.log(inexistente);
    catalogo.adicionar(inexistente);
  }
  catalogo.listar();
}

main();