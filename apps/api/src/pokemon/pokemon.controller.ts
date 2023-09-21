import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    const pokemon = await this.pokemonService.findPokemonByName(name);
    if (!pokemon) {
      return new NotFoundException('Pokemon not found');
    }
    return pokemon;
  }
}
