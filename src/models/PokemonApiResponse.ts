interface type {
   name : string;
}

interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: type[];
}