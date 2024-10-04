import { Container, Logo, NavBar, NavButton } from "./header.styles";
import { FaPlay, FaSearch, FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <Container>
      <Logo src="logo-url-aqui" alt="Logo" />
      <NavBar>
        <NavButton>
          <FaPlay /> Play
        </NavButton>
        <NavButton>
          <FaSearch /> Search
        </NavButton>
        <NavButton>
          <FaUser /> User
        </NavButton>
      </NavBar>
    </Container>
  );
};
