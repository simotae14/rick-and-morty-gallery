export declare interface CharacterSmall {
  id: string;
  /**
   * Is this the name of the Character
   */
  name: string;
  /**
   * Is this the image of the Character
   */
  image: string;
  /**
   * Is this the status of the Character (Dead, Alive)
   */
  status: string;
  /**
   * Is this the specie of the Character
   */
  species: string;
}

export declare interface CharacterFull extends CharacterSmall {
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  episode: Episode[];
}

interface Location {
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
}

interface Resident {
  name: string;
}

interface Episode {
  name: string;
  air_date: string;
  episode: string;
}
