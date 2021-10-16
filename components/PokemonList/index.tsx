import React, { useEffect, useState } from "react";
import GetPokemon from "services/getPokemon";
import GetPokemonInfo from "services/getPokemonInfo";
import { PokemonObject, PokemonResponse } from "services/getPokemon.d";
import s from "../../styles/PokemonList.module.scss";
import { PokemonInfoObject } from "services/getPokemonInfo.d";
import pokemon_icon from "../../assets/images/pokemon_icon.svg";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState<PokemonResponse>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoObject[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getPokemon = async () => {
    const data = await GetPokemon();
    setPokemonData(data);
    console.log(pokemonData);
    getPokemonInfo(data.results);
  };

  const getPokemonInfo = async (data: PokemonObject[]) => {
    let infos = await Promise.all(data.map(async (pokemon) => await GetPokemonInfo(pokemon.url)));

    setPokemonInfo(infos);
    console.log("info", infos);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className={s.List_container}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {pokemonInfo?.map((pokemon) => (
            <div className={s.List_card} key={pokemon.id}>
              <img alt={`${pokemon.name} ilustration`} src={pokemon.sprites?.front_default} />
              <h3>{pokemon.name}</h3>
              <h4>{pokemon.id}</h4>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PokemonList;
