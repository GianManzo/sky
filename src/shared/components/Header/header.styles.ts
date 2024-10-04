import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #333;
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;
