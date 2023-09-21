import { styled } from "styled-components";
import Card from "./components/Card";
import { useState, useEffect, useCallback } from "react";
import { Pokemon } from "../../interfaces/pokemon.interface";
import PokemonSelected from "./components/PokemonSelected";
import { defaultPokemon } from "../Shared/objects/defaultPokemon";

export type PokemonListProps = {
  pokemons: Pokemon[];
  favoritePokemons: string[];
  getPokemonByName: (name: string) => Pokemon | undefined;
  updateFavoritePokemons: (favoritePokemons: string[]) => Promise<void>;
};
const initialPokemonId = 0;
const PokemonGrid = ({
  pokemons,
  favoritePokemons,
  getPokemonByName,
  updateFavoritePokemons,
}: PokemonListProps) => {
  const [pokemon, setPokmeon] = useState<Pokemon | undefined>(defaultPokemon);
  const [name, setName] = useState("");

  const findPokemonByName = useCallback(
    (name: string) => {
      return getPokemonByName(name);
    },
    [getPokemonByName]
  );

  const updateFavorites = (isFavoriteAdded: boolean, pokemonName: string) => {
    let updatedFavorites = [];
    if (isFavoriteAdded) {
      updatedFavorites = [...favoritePokemons, pokemonName];
    } else {
      updatedFavorites = favoritePokemons.filter(
        (name) => name !== pokemonName
      );
    }
    updateFavoritePokemons(updatedFavorites);
  };

  const handleChangeName = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  const handleOnClickButton = () => {
    setPokmeon(findPokemonByName(name) ?? undefined);
  };

  const handleClickCard = useCallback(
    (name: string) => {
      setPokmeon(findPokemonByName(name) ?? defaultPokemon);
    },
    [findPokemonByName]
  );

  useEffect(() => {
    setPokmeon(pokemons[initialPokemonId]);
  }, [pokemons]);

  return (
    <>
      <$SearchContainer>
        <$SearchInput
          type="text"
          name="search"
          id="search"
          value={name}
          onChange={handleChangeName}
        />
        <$SearchButton onClick={handleOnClickButton}>Search</$SearchButton>
      </$SearchContainer>

      <$Container>
        <$PokemonGrid>
          {pokemons.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                onClick={handleClickCard}
                isFavorite={favoritePokemons.includes(pokemon.name)}
                onUpdateFavorites={updateFavorites}
              />
            );
          })}
        </$PokemonGrid>
        <PokemonSelected pokemon={pokemon} />
      </$Container>
    </>
  );
};

const $Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 80vh; /* Set the maximum height to the full viewport height */
`;

const $SearchContainer = styled.div``;

const $SearchInput = styled.input``;

const $SearchButton = styled.button``;

const $PokemonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1920px;
  overflow: auto;
`;

export default PokemonGrid;
