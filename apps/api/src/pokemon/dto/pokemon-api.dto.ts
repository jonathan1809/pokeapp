export interface PokemonResponseApiV2 {
  abilities: AbilityApiV2[];
  base_experience: number;
  forms: SpeciesApiV2[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: SpeciesApiV2;
  sprites: SpritesApiV2;
  stats: StatApiV2[];
  types: Type[];
  weight: number;
}

export interface AbilityApiV2 {
  ability: SpeciesApiV2;
  is_hidden: boolean;
  slot: number;
}

export interface SpeciesApiV2 {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: SpeciesApiV2;
}

export interface Move {
  move: SpeciesApiV2;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: SpeciesApiV2;
  version_group: SpeciesApiV2;
}

export interface GenerationV {
  'black-white': SpritesApiV2;
}

export interface GenerationIv {
  'diamond-pearl': SpritesApiV2;
  'heartgold-soulsilver': SpritesApiV2;
  platinum: SpritesApiV2;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface SpritesApiV2 {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: SpritesApiV2;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: null;
  back_gray: null;
  back_transparent: null;
  front_default: null;
  front_gray: null;
  front_transparent: null;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: null | string;
  back_shiny: null | string;
  front_default: null | string;
  front_shiny: null | string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  'firered-leafgreen': Gold;
  'ruby-sapphire': Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  'ultra-sun-ultra-moon': Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface StatApiV2 {
  base_stat: number;
  effort: number;
  stat: SpeciesApiV2;
}

export interface Type {
  slot: number;
  type: SpeciesApiV2;
}
