export interface Pokemon {
  abilities: Ability[];
  baseExperience: number;
  forms: Species[];
  height: number;
  id: number;
  isDefault: boolean;
  name: string;
  order: number;
  species: Species;
  sprite: string | null;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  isHidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
