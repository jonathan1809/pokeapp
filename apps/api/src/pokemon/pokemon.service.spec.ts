import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CommonModule } from './../common/common.module';
import { PokemonService } from './pokemon.service';
import { PokemonRepository } from './repository/pokemon.repository';

const pokemonRepositoryMock = {
  getAllPokemon: jest
    .fn()
    .mockReturnValue(['Pikachu', 'Charizard', 'Bulbasaur']),
  getPokemonByName: jest
    .fn()
    .mockReturnValue({ name: 'Pikachu', type: 'Electric' }),
};

describe('PokemonService', () => {
  let pokemonService: PokemonService;
  let pokemonRepository: PokemonRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, CommonModule],
      providers: [PokemonRepository, PokemonService],
    })
      .overrideProvider(PokemonRepository)
      .useValue(pokemonRepositoryMock)
      .compile();
    pokemonRepository = module.get<PokemonRepository>(PokemonRepository);
    pokemonService = module.get<PokemonService>(PokemonService);
  });

  describe('findAll', () => {
    it('should return all pokemons when calling findAll method', () => {
      const result = pokemonService.findAll();
      expect(result).toEqual(['Pikachu', 'Charizard', 'Bulbasaur']);
      expect(pokemonRepositoryMock.getAllPokemon).toHaveBeenCalled();
    });

    it('should return an empty array when calling findAll method and there are no pokemons in the repository', () => {
      jest
        .spyOn(pokemonRepository, 'getAllPokemon')
        .mockImplementation(jest.fn().mockReturnValue([]));
      const result = pokemonService.findAll();
      expect(result).toEqual([]);
      expect(pokemonRepositoryMock.getAllPokemon).toHaveBeenCalled();
    });
  });

  describe('findPokemonByName', () => {
    it('should return a pokemon by name when calling findPokemonByName method with a valid name', () => {
      const result = pokemonService.findPokemonByName('Pikachu');
      expect(result).toEqual({ name: 'Pikachu', type: 'Electric' });
      expect(pokemonRepositoryMock.getPokemonByName).toHaveBeenCalledWith(
        'Pikachu',
      );
    });

    it('should return null when calling findPokemonByName method with an invalid name', () => {
      jest
        .spyOn(pokemonRepository, 'getPokemonByName')
        .mockImplementation(jest.fn().mockReturnValue(undefined));
      const result = pokemonService.findPokemonByName('InvalidName');
      expect(result).toBeUndefined();
      expect(pokemonRepositoryMock.getPokemonByName).toHaveBeenCalledWith(
        'InvalidName',
      );
    });
  });
});
