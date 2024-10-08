import {
  NextArrow,
  PrevArrow,
} from "../components/BannerCarousel/bannerCarousel.styles";
import {
  NextArrowMovies,
  PrevArrowMovies,
} from "../components/MoviesCarousel/moviesCarousel.styles";

export const settingsBanner = {
  centerMode: true,
  infinite: true,
  centerPadding: "0",
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  dots: true,
  variableWidth: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "20px",
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0",
      },
    },
  ],
};

export const settingsMovies = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  variableWidth: true,
  nextArrow: <NextArrowMovies weight="fill" color="#43494b" />,
  prevArrow: <PrevArrowMovies weight="fill" color="#43494b" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: "20px",
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0",
      },
    },
  ],
};
