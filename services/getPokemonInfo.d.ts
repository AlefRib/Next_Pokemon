export interface PokemonInfoObject {
  name: string;
  order: number;
  id: number;
  species: { name: string; url: string };
  sprites: { front_default: string; others: { dream_world: { front_default: string } } };
  types: string[];
  weight: number;
  height: number;
}
