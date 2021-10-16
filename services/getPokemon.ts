import axios from "axios";
import { PokemonResponse } from "./getPokemon.d";

const GetPokemon = () => {
  return new Promise<PokemonResponse>(async (resolve) => {
    try {
      const { data } = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/");
      resolve(data);
    } catch (error) {
      console.log(error);
    }
  });
};

export default GetPokemon;
