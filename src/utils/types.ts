export type Location = {
  id?: number;
  name: string;
  type?: string;
  dimension?: string;
  residents: Character[];
  created?: string;
}

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location
  location: Location | null
  image: string;
  episode: Episode[];
  created: string;
}

export type ResponseInfo = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

export type CharacterQueryResponse = {
  characters: {
    info: ResponseInfo;
    results: Character[]
  }
}

export type LocationQueryResponse = {
  locations: {
    info: ResponseInfo;
    results: Location[];
  }
}

export type CharacterVariables = {
  page: number | string;
}

export type LocationVariables = {
  name: string;
}

export type CharacterErrorResponse = {
  errors: Array<CharacterError>;
  data: Character[];
}

export type CharacterError = {
  message: string;
  locations: [
    {
      line: number;
      column: number;
    }
  ];
  path: string[];
  extensions: {
    code: string;
  }
}