export type SearchPokemonApiV2 = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResults[];
};

export type PokemonResults = {
  name: string;
  url: string;
};
