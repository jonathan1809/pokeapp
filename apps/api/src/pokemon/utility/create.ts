import { snakeToCamelCase } from '../../common/utils/string';
import {
  AbilityApiV2,
  PokemonResponseApiV2,
  StatApiV2,
} from '../dto/pokemon-api.dto';
import { Ability, Pokemon, Stat } from '../entities/pokemon.entity';

export const createPokemon = (pokemonApi: PokemonResponseApiV2): Pokemon => {
  const {
    id,
    abilities,
    base_experience,
    forms,
    height,
    is_default,
    name,
    order,
    species,
    stats,
    types,
    weight,
    sprites,
  } = pokemonApi;

  return {
    abilities: abilities.map((ability: AbilityApiV2) =>
      snakeToCamelCase<AbilityApiV2, Ability>(ability),
    ),
    id: id,
    baseExperience: base_experience,
    forms: forms,
    height: height,
    isDefault: is_default,
    name: name,
    order: order,
    species: species,
    sprite: sprites.other.home.front_default ?? sprites.front_default,
    stats: stats.map((stat) => snakeToCamelCase<StatApiV2, Stat>(stat)),
    types: types,
    weight: weight,
  };
};
