import { ImageList, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMovie } from "../CardMovie";

export const BannerCarousel = () => {
  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    dots: true,
  };

  const data = [
    {
      id: 1,
      url: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.webp?w=1600&h=900",
    },
    {
      id: 2,
      url: "https://www.petsupport.com.br/wp-content/uploads/2021/09/necessidades-dos-gatos-1.jpg",
    },
    {
      id: 3,
      url: "https://www.catzone.com.br/wp-content/uploads/2023/12/Como-e-a-visao-de-um-gato-Confira-5-curiosidades-aqui-1200x675-1-1024x576.jpg",
    },
    {
      id: 4,
      url: "https://cdn.motor1.com/images/mgl/lEmjGg/s1/chevrolet-tracker-rs-2024.webp",
    },
    {
      id: 5,
      url: "https://cdn.motor1.com/images/mgl/rK3nPE/s1/mclaren-750s-coupe-front-3-4.webp",
    },
  ];

  return (
    <div className="slider-container" style={{ marginTop: "200px" }}>
      <Slider {...settings}>
        {data.map((movie) => (
          <img
            style={{ objectFit: "fill" }}
            key={movie.id}
            src={movie.url}
            alt="Movie"
          />
        ))}
      </Slider>
    </div>
  );
};
