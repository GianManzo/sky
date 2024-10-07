import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useEffect, useState } from "react";

import { getMovieBannerAPI } from "../../apis/banner.api";
import { IMovie } from "../../interfaces/home.interfaces";

import { settingsBanner } from "../../utils/settingsBanner";

export interface IBannerCarouselProps {
  setIsLoading: (isLoading: boolean) => void;
}

export const BannerCarousel = ({ setIsLoading }: IBannerCarouselProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getMovieBannerAPI({
        list: "top_rated_series_250",
        page: "3",
        perPage: "5",
      });

      setMovies(response.data.results);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="slider-container">
      <Slider {...settingsBanner} style={{ marginTop: "100px" }}>
        {movies.map((movie) => (
          <img src={movie.primaryImage?.url} alt="Movie" />
        ))}
      </Slider>
    </div>
  );
};
