import { existsSync, writeFile } from 'fs';
import { join } from 'path';
import { readFile } from 'fs/promises';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pokemon } from '../entities/pokemon.entity';
import { AxiosAdapter } from '../../common/adapters/axios.adapter';
import { createPokemon } from '../utility/create';
import { SearchPokemonApiV2 } from '../dto/response.dto';
import { jsonToUrlParams } from '../../common/utils/url';
@Injectable()
export class PokemonRepository implements OnApplicationBootstrap {
  private pokemonRepository: Map<string, Pokemon> = new Map();
  private pokemonUrl: string;
  constructor(
    private readonly http: AxiosAdapter,
    private readonly configService: ConfigService,
  ) {
    this.pokemonUrl = this.configService.get('pokeApiUrl');
  }

  async onApplicationBootstrap() {
    if (
      !existsSync(join(process.cwd(), 'src', 'common', 'files', 'pokemon.json'))
    ) {
      const pokemons = await this.getPokemonDataFromApi();
      this.savePokemonDataAsJsonFile(pokemons);
      this.savePokemonsInRepository(pokemons);
    } else {
      const pokemons = await this.getPokemonDataFromJson();
      this.savePokemonsInRepository(pokemons);
    }
    console.log('Existing pokemon: ', this.pokemonRepository.size);
  }

  getAllPokemon(): Pokemon[] {
    return Array.from(this.pokemonRepository.values());
  }

  getPokemonByName(name: string): Pokemon | undefined {
    return this.pokemonRepository.get(name);
  }

  private savePokemonsInRepository(pokemons: Pokemon[]) {
    for (const pokemon of pokemons) {
      this.pokemonRepository.set(pokemon.name, pokemon);
    }
  }
  private async savePokemonDataAsJsonFile(pokemon: Pokemon[]) {
    const json = JSON.stringify(pokemon);
    writeFile(
      join(process.cwd(), 'src', 'common', 'files', 'pokemon.json'),
      json,
      'utf8',
      () => {},
    );
  }

  private async getPokemonDataFromJson() {
    try {
      const jsonData = await readFile(
        join(process.cwd(), 'src', 'common', 'files', 'pokemon.json'),
        'utf8',
      );
      const pokemon = JSON.parse(jsonData) as Pokemon[];
      if (pokemon.length === 0) {
        this.getPokemonDataFromApi();
        return;
      }
      return pokemon;
    } catch (error) {
      console.log('Error reading json file');
      console.error(error);
      return [];
    }
  }

  private async getPokemonDataFromApi() {
    const urls = await this.getPokemonUrlsFromApi();
    const promises = [];
    const pokemon: Pokemon[] = [];
    for (const url of urls) {
      promises.push(this.http.get<Pokemon>(`${url}`));
    }
    try {
      if (this.pokemonRepository.size === 0) {
        const pokemonsApiFormat = await Promise.all(promises);
        const pokemonCamelCase = pokemonsApiFormat.map((pokemon) =>
          createPokemon(pokemon),
        );
        pokemon.push(...pokemonCamelCase);
      }
      return pokemon;
    } catch (error) {
      console.error('Error getting pokemon data');
      console.log(error);
    }
  }

  private async getPokemonUrlsFromApi() {
    console.log('Get urls from poke api');
    const limit = await this.getPokemonCountFromApi();
    const urlParams = jsonToUrlParams({ limit: String(limit) });
    console.log(`Get ${this.pokemonUrl}/${urlParams}`);
    const response = await this.http.get<SearchPokemonApiV2>(
      `${this.pokemonUrl}/${urlParams}`,
    );

    if (!response.results) {
      console.error('Pokemon not founded');
      return;
    }
    console.log(`Total of result ${response.results.length}`);
    return response.results.map((result) => {
      return result.url;
    });
  }

  private async getPokemonCountFromApi() {
    const response = await this.http.get<SearchPokemonApiV2>(this.pokemonUrl);
    return response.count;
  }
}
