import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Pokemon } from "../interfaces/pokemon.interface";
import { AxiosAdapter } from "../services/axios";

class PokemonRepository {
  private httpRequest: HttpAdapter
  private pokemonPath = 'pokemon'
  constructor() {
    this.httpRequest = new AxiosAdapter()
  }
  async getPokemonList() {
    return await this.httpRequest.get<Pokemon[]>(this.pokemonPath);
  }

  async getPokemonDetails(name: string) {
    return await this.httpRequest.get<Pokemon>(`${this.pokemonPath}/${name}`);
  }
}

export default new PokemonRepository();