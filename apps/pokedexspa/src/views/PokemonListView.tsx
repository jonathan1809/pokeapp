import { useEffect, useState } from "react";
import PokemonList from "../features/PokemonList/PokemonGrid";
import PrimaryLayout from "../layouts/PrimaryLayout";
import pokemonRepository from "../repositories/pokemon.repository";
import { Pokemon } from "../interfaces/pokemon.interface";
import userRepository from "../repositories/user.repository";
import localStorage from "../services/local-storage";
import { User } from "../interfaces/user.interface";

const PokemonListContainer = () => {
  const [pokemons, setPokemons] = useState<Map<string, Pokemon>>(new Map());
  const [favoritePokemons, setFavoritePokemon] = useState<string[]>([]);
  const userId = localStorage.get<string>("user");
  const getPokemonByName = (name: string) => {
    return pokemons.get(name);
  };

  const savePokemonArrayAsMap = (pokemons: Pokemon[]) => {
    const pokemonMap = new Map();
    for (const pokemon of pokemons) {
      // Replace `pokemonArray` with your array of Pokemon data
      pokemonMap.set(pokemon.name, pokemon);
    }
    return pokemonMap;
  };

  const updateFavoritePokemons = async (favoritePokemons: string[]) => {
    if (userId) {
      const user: User = {
        id: userId,
        favoritePokemons: favoritePokemons,
      };
      void userRepository.updateUser(userId, user);
      setFavoritePokemon(favoritePokemons);
    }
  };

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await pokemonRepository.getPokemonList();
      setPokemons(savePokemonArrayAsMap(data));
    };
    const fetchUserFavoritePokemons = async () => {
      if (userId) {
        const user = await userRepository.getUserById(userId);
        setFavoritePokemon(user.favoritePokemons);
      }
    };
    fetchPokemonList();
    fetchUserFavoritePokemons();
  }, [userId]);

  return (
    <PrimaryLayout title="Pokedex">
      <PokemonList
        favoritePokemons={favoritePokemons}
        pokemons={Array.from(pokemons.values())}
        getPokemonByName={getPokemonByName}
        updateFavoritePokemons={updateFavoritePokemons}
      />
    </PrimaryLayout>
  );
};

export default PokemonListContainer;
