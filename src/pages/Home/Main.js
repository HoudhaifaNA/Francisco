import React from "react";
import styled from "styled-components";

import Title from "../../components/Title";
import SearchBar from "./SearhBar";
import Categories from "./Categories";

const Wrapper = styled.main`
  width: 62vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.greyBackground};
  padding: 2rem;
`;

const PageHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = () => {
  return (
    <Wrapper>
      <PageHeader>
        <Title>Menu</Title>
        <SearchBar />
      </PageHeader>
      <Categories />
    </Wrapper>
  );
};

export default Main;
