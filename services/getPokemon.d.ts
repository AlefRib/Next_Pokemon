export interface PokemonObject {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonObject[];
}
