// src/types/index.ts
export interface TVShow {
  id: number;
  name: string;
  image: {
    original: string;
  };
  summary: string;
}



export interface TVShowDetails {
  id: number;
  name: string;
  image: {
    original: string;
  };
  summary: string;
  _embedded?: {
    episodes: Episode[];
  };
}

export interface Episode {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  summary: string;
}

export interface EpisodeDetails {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  summary: string;
}
