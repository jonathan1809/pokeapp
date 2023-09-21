import { Injectable } from '@nestjs/common';
import { PokemonRepository } from './repository/pokemon.repository';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  findAll() {
    return this.pokemonRepository.getAllPokemon();
  }

  findPokemonByName(name: string) {
    return this.pokemonRepository.getPokemonByName(name);
  }
}
