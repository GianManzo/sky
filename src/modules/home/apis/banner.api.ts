import axios from "axios";
import { IMovies } from "../interfaces/home.interfaces";

const moviesAPI = "https://moviesdatabase.p.rapidapi.com/titles";
const moviesKEY = "233b08a10fmsh2e906a02f4e697ap1421ddjsna170d3598214";
const moviesHost = "moviesdatabase.p.rapidapi.com";

interface IParams {
  perPage: string;
  page: string;
  list: string;
}

export const getMovieBannerAPI = ({
  perPage,
  page,
  list,
}: IParams): Promise<IMovies> => {
  return axios.get(moviesAPI, {
    params: { limit: perPage, list, page },
    headers: {
      "x-rapidapi-key": moviesKEY,
      "x-rapidapi-host": moviesHost,
    },
  });
};
