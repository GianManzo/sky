import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";

export const NextArrowMovies = styled(ArrowCircleRight)`
  right: 80px;
  z-index: 1;
  width: 46px;
  height: 46px;
  opacity: ${(props) => props.currentSlide === props.slideCount - 5 && 0.1};
`;

export const PrevArrowMovies = styled(ArrowCircleLeft)`
  width: 46px;
  height: 46px;
  left: 0px;
  z-index: 1;
  opacity: ${(props) => props.currentSlide === 0 && 0.1};
`;

export const MoviesSection = styled.section`
  width: 100%;
  padding-left: 80px;
`;

export const MovieCard = styled.section`
  position: relative;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  border: 4px solid #fff;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 6px;
  top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Icon = styled(FaShoppingCart)``;
