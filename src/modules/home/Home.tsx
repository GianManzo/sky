import { CardMovie } from "../../shared/components";
import { BannerCarousel } from "../../shared/components/BannerCarousel/BannerCarousel";
import { Banner, MovieCard, MoviesSection } from "./home.styles";

export const Home = () => {
  return (
    <div>
      <BannerCarousel />

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
