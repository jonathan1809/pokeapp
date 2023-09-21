import { useEffect, useState } from "react";
import PokemonDetails from "../features/PokemonDetails/PokemonDetails";
import PrimaryLayout from "../layouts/PrimaryLayout";
import pokemonRepository from "../repositories/pokemon.repository";
import { Pokemon } from "../interfaces/pokemon.interface";
import { useParams } from "react-router-dom";
import { defaultPokemon } from "../features/Shared/objects/defaultPokemon";

const PokemonDetailsView = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>(defaultPokemon);

  useEffect(() => {
    const fetchPokemonList = async () => {
      if (name) {
        const data = await pokemonRepository.getPokemonDetails(name);
        setPokemon(data);
      }
    };

    fetchPokemonList();
  }, [name]);

  return (
    <PrimaryLayout>
      <PokemonDetails pokemon={pokemon} />
    </PrimaryLayout>
  );
};

export default PokemonDetailsView;
