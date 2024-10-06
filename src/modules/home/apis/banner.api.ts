import axios from "axios";
import { IMovies } from "../interfaces/home.interfaces";

export const getMovieBanner = async (): Promise<IMovies> => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: { limit: "5", list: "top_rated_series_250", page: "3" },
    headers: {
      "x-rapidapi-key": "233b08a10fmsh2e906a02f4e697ap1421ddjsna170d3598214",
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  return response.data;
};
