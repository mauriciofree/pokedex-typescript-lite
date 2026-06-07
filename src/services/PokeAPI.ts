import type { PokemonResumo } from "../models/PokemonResumo";

export async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {
  
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      console.log("[ERRO] Pokémon não encontrado.");
      return null;
    }
    const dados = await resposta.json();
    return {
      id: dados.id,
      nome: dados.name,
      tipos: dados.types.map((item: any) => item.type.name),
      altura: dados.height,
      peso: dados.weight,
    };
  } catch (erro) { 
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}