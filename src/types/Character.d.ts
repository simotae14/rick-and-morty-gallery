export declare interface CharacterSmall {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
}

export declare interface CharacterFull extends CharacterSmall {
  type: string;
  gender: string;
  origin: {
    name: string;
    dimension: string;
    residents: Resident[];
  };
  location: {
    name: string;
    type: string;
  };
  episode: Episode[];
}

interface Resident {
  name: string;
}

interface Episode {
  name: string;
  air_date: string;
  episode: string;
}
