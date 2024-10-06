export interface IMovie {
  id: string;
  primaryImage: {
    url: string;
  };
}

export interface IMovies {
  results: IMovie[];
}
