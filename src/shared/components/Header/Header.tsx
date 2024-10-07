import { Container, Logo, NavBar, NavButton } from "./header.styles";
import { FaPlay, FaSearch, FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <Container>
      <Logo
        src="https://cdn.zeplin.io/5e29b6105e839f971f3f90bf/assets/0B2C9B05-3CBD-4CEE-B563-BF5E49B5BEFC.svg"
        alt="Logo"
      />
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
