import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useEffect, useState } from "react";

import { getMovieBanner } from "../../apis/banner.api";
import { IMovie } from "../../interfaces/home.interfaces";

export const BannerCarousel = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovies = useCallback(async () => {
    try {
      const response = await getMovieBanner();
      setMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
    variableWidth: true,
  };

  return (
    <Slider {...settings} style={{ marginTop: "100px" }}>
      {movies.map((movie) => (
        <img
          src={movie.primaryImage?.url}
          alt="Movie"
          style={{
            background: "black",
            objectFit: "fill",
            width: "400px",
          }}
        />
      ))}
    </Slider>
  );
};
