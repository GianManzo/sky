import "./App.css";
import styled from "styled-components";
import { Home } from "./modules/home";
import { Header } from "./shared/components";

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
