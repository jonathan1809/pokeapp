import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { HttpException } from '@nestjs/common';

const pokemonServiceMock = {
  findAll: jest.fn().mockReturnValue(['Pikachu', 'Charizard', 'Bulbasaur']),
  findPokemonByName: jest
    .fn()
    .mockReturnValue({ name: 'Pikachu', type: 'Electric' }),
};

describe('PokemonController', () => {
  let pokemonController: PokemonController;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
    })
      .overrideProvider(PokemonService)
      .useValue(pokemonServiceMock)
      .compile();
    pokemonController = module.get<PokemonController>(PokemonController);
    pokemonService = module.get<PokemonService>(PokemonService);
  });

  describe('findAll', () => {
    it('should return all pokemon when calling findAll()', () => {
      const result = pokemonController.findAll();

      expect(result).toEqual(['Pikachu', 'Charizard', 'Bulbasaur']);
      expect(pokemonService.findAll).toHaveBeenCalled();
    });

    it('should return an empty array when calling findAll method and there are no pokemons in the repository', () => {
      jest
        .spyOn(pokemonService, 'findAll')
        .mockImplementation(jest.fn().mockReturnValue([]));
      const result = pokemonService.findAll();
      expect(result).toEqual([]);
      expect(pokemonServiceMock.findAll).toHaveBeenCalled();
    });

    it('should handle errors thrown by the service layer', () => {
      jest.spyOn(pokemonService, 'findAll').mockImplementation(() => {
        throw new Error('Service error');
      });
      expect(() => {
        pokemonController.findAll();
      }).toThrowError('Service error');
      expect(pokemonServiceMock.findAll).toHaveBeenCalled();
    });
  });

  describe('findPokemonByName', () => {
    it('should return a pokemon by name when calling findPokemonByName method with a valid name', () => {
      const result = pokemonService.findPokemonByName('Pikachu');
      expect(result).toEqual({ name: 'Pikachu', type: 'Electric' });
      expect(pokemonServiceMock.findPokemonByName).toHaveBeenCalledWith(
        'Pikachu',
      );
    });

    it('should return an error when the pokemon name is not found', () => {
      jest
        .spyOn(pokemonService, 'findPokemonByName')
        .mockImplementation(jest.fn().mockReturnValue(null));

      const result = pokemonController.findByName('MissingPokemon');
      expect(result).toBeInstanceOf(HttpException);
    });
  });
});
