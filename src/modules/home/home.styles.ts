import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const MoviesSection = styled.section`
  padding: 20px;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }
`;

export const MovieCard = styled.div`
  img {
    width: initial;
    height: auto;
    border-radius: 5px;
  }
`;
