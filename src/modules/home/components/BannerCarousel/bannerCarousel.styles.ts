import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import styled from "styled-components";

export const NextArrow = styled(ArrowCircleRight)`
  right: 17px;
  z-index: 1;
  color: rgba(255, 255, 255, 0.5);
  width: 46px;
  height: 46px;
`;

export const PrevArrow = styled(ArrowCircleLeft)`
  width: 46px;
  height: 46px;
  left: 17px;
  z-index: 1;
  color: rgba(255, 255, 255, 0.5);
`;
