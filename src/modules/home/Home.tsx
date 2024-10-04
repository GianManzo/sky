import { CardMovie } from "../../shared/components";
import { Banner, MovieCard, MoviesSection } from "./home.styles";

export const Home = () => {
  return (
    <div>
      <Banner>
        <img src="banner-url-aqui" alt="Banner principal" />
      </Banner>

      <MoviesSection>
        <h2>Os mais vistos</h2>
        <div className="movies-grid">
          {["url1", "url2", "url3"].map((movie, index) => (
            <CardMovie key={index} />
          ))}
        </div>
      </MoviesSection>
    </div>
  );
};
