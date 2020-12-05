export interface CarteleraResponse {
  dates: Dates;
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export interface Dates {
  minimum: Date;
  maximum: Date;
}

export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  popularity: number;
  original_language: OriginalLanguage;
  original_title: string;
  poster_path: string;
  overview: string;
  video: boolean;
  vote_average: number;
  title: string;
  vote_count: number;
  release_date: Date;
}

export enum OriginalLanguage {
  En = 'en',
  Fr = 'fr',
  Ja = 'ja',
  Ko = 'ko',
}
