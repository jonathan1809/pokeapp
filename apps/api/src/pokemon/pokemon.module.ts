import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { CommonModule } from 'src/common/common.module';
import { PokemonRepository } from './repository/pokemon.repository';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService, PokemonRepository],
  imports: [ConfigModule, CommonModule],
  exports: [],
})
export class PokemonModule {}
