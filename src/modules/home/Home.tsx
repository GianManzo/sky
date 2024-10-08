import { useEffect, useState } from "react";

import { BannerCarousel } from "./components/BannerCarousel/BannerCarousel";

import { IMovie } from "./interfaces/home.interfaces";
import { settingsMovies } from "./utils/settingsCarrousel";
import { getMoviesAPI } from "./apis/movies.api";
import { MoviesCarousel } from "./components/MoviesCarousel/MoviesCarousel";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesDrama, setMoviesDrama] = useState<IMovie[]>([]);
  const [moviesAction, setMoviesAction] = useState<IMovie[]>([]);
  const [moviesComedy, setMoviesComedy] = useState<IMovie[]>([]);
  const [moviesHorror, setMoviesHorror] = useState<IMovie[]>([]);

  // statistical pages due to API inconsistency
  useEffect(() => {
    getMoviesAPI({
      genre: "Drama",
      perPage: "15",
      page: "7",
      filter: "top_rated_series_250",
    }).then((response) => {
      setMoviesDrama(response.data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesAPI({
      genre: "Action",
      perPage: "15",
      page: "2",
      filter: "top_rated_series_250",
    }).then((response) => {
      setMoviesAction(response.data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesAPI({
      genre: "Comedy",
      perPage: "15",
      page: "3",
      filter: "top_rated_series_250",
    }).then((response) => {
      setMoviesComedy(response.data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesAPI({
      genre: "Horror",
      perPage: "15",
      page: "13",
    }).then((response) => {
      setMoviesHorror(response.data.results);
    });
  }, []);

  return (
    <div>
      <BannerCarousel setIsLoading={setIsLoading} />

      {!isLoading && (
        <>
          <MoviesCarousel
            settings={settingsMovies}
            data={moviesComedy}
            genre="Comédia"
          />

          <MoviesCarousel
            settings={settingsMovies}
            data={moviesHorror}
            genre="Os mais temidos"
          />

          <MoviesCarousel
            settings={settingsMovies}
            data={moviesAction}
            genre="Ação"
          />

          <MoviesCarousel
            settings={settingsMovies}
            data={moviesDrama}
            genre="Drama"
          />
        </>
      )}
    </div>
  );
};
