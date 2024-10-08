import Slider, { Settings } from "react-slick";
import {
  Icon,
  IconContainer,
  MovieCard,
  MoviesSection,
} from "./moviesCarousel.styles";
import { IMovie } from "../../interfaces/home.interfaces";

interface MoviesCarousel {
  settings: Settings;
  data: IMovie[];
  genre: string;
}

export const MoviesCarousel = ({ settings, data, genre }: MoviesCarousel) => {
  return (
    <MoviesSection>
      <h2>{genre}</h2>
      <Slider {...settings} className="movies-container">
        {data.map((movie, index) => (
          <MovieCard>
            <IconContainer>
              <Icon size={22} fill="#fff" />
            </IconContainer>
            {/* images outside the api standard */}
            <img
              src={movie?.primaryImage?.url}
              alt="Movie"
              key={index}
              style={{ width: "200px", height: "300px" }}
            />
          </MovieCard>
        ))}
      </Slider>
    </MoviesSection>
  );
};
