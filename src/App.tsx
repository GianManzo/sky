import "./index.css";
import styled from "styled-components";
import { Home } from "./modules/home";
import { Header } from "./shared/components";
import { Footer } from "./shared/components/Footer/Footer";

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
      <Footer />
    </Container>
  );
}

export default App;
