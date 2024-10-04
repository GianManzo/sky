import "./App.css";

import styled from "styled-components";
import { Home } from "./modules/home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
