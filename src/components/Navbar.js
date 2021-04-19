import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "./Icon";

const Wrapper = styled.nav`
  position: relative;
  height: 100vh;
  width: 16vw;
  border-right: 0.1rem solid rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const NavbarList = styled.ul`
  width: 100%;
  height: 40rem;
  list-style: none;
  margin-top: 3rem;
`;

const NavbarItem = styled.li`
  padding: 2rem;
  font-size: 1.6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.greyHover};
  }

  a {
    color: ${(props) => props.theme.colors.greyDark};
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &:nth-child(1) {
    background-color: ${(props) => props.theme.colors.greyHover};
    a {
      color: ${(props) => props.theme.colors.primary};
    }
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;
const NavIcon = styled.svg`
  fill: ${(props) => props.theme.colors.greyDark};
  width: 2rem;
  height: 2rem;
  margin-right: 3rem;
`;

const NavLogout = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <img src="/assets/logo.png" alt="Francisco Logo" />
      </Logo>
      <NavbarList>
        <NavbarItem>
          <Link to="home">
            <NavIcon>
              <Icon icon="home" />
            </NavIcon>
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="dashboard">
            <NavIcon>
              <Icon icon="stats" />
            </NavIcon>
            Recette
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="Menu">
            <NavIcon>
              <Icon icon="hot-food" />
            </NavIcon>
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="accounts">
            <NavIcon>
              <Icon icon="user" />
            </NavIcon>
            Comptes
          </Link>
        </NavbarItem>
      </NavbarList>
      <NavLogout>
        <NavbarItem>
          <NavIcon>
            <Icon icon="logout" />
          </NavIcon>
          Déconnecter
        </NavbarItem>
      </NavLogout>
    </Wrapper>
  );
};

export default Navbar;
