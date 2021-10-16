import axios from "axios";
import { PokemonInfoObject } from "./getPokemonInfo.d";

const GetPokemonInfo = (url: string) => {
  return new Promise<PokemonInfoObject>(async (resolve) => {
    try {
      const { data } = await axios.get<PokemonInfoObject>(url);
      resolve(data);
    } catch (error) {
      console.log(error);
    }
  });
};

export default GetPokemonInfo;
