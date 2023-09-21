import { ConfigModule } from '@nestjs/config';
import { PokemonRepository } from './pokemon.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { CommonModule } from '../../common/common.module';
import { Pokemon } from '../../../dist/pokemon/entities/pokemon.entity';

describe('PokemonRepository', () => {
  let repository: PokemonRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, CommonModule],
      providers: [PokemonRepository],
    }).compile();

    repository = module.get<PokemonRepository>(PokemonRepository);
  });

  describe('getAllPokemon', () => {
    it('should return an array of Pokemon objects when the repository is not empty', () => {
      // Arrange
      const pokemon1 = {} as Pokemon;
      const pokemon2 = {} as Pokemon;
      repository['pokemonRepository'].set('pokemon1', pokemon1);
      repository['pokemonRepository'].set('pokemon2', pokemon2);

      // Act
      const result = repository.getAllPokemon();

      // Assert
      expect(result).toEqual([pokemon1, pokemon2]);
    });

    it('should return an empty array when the repository is empty', () => {
      // Act
      const result = repository.getAllPokemon();

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('getPokemonByName', () => {
    // Returns a Pokemon object with correct name when getPokemonByName is called with a valid name
    it('should return a Pokemon object with correct name when getPokemonByName is called with a valid name', () => {
      // Arrange
      const pokemon = {} as Pokemon;
      pokemon.name = 'Pikachu';
      repository['pokemonRepository'].set('Pikachu', pokemon);

      // Act
      const result = repository.getPokemonByName('Pikachu');

      // Assert
      expect(result).toEqual(pokemon);
    });

    test('should return undefined when pokemon with the specified name does not exist', () => {
      // Act
      const result = repository.getPokemonByName('Missingno');

      // Assert
      expect(result).toBeUndefined();
    });
  });
});
