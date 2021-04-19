import React from "react";
import styled from "styled-components";

import Title from "../../components/Title";

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

const SearchContainer = styled.div`
  width: 45rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.2rem;
`;

const SearchSvg = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
`;

const Main = () => {
  return (
    <Wrapper>
      <PageHeader>
        <Title>Menu</Title>
        <SearchContainer>
          <SearchSvg></SearchSvg>
        </SearchContainer>
      </PageHeader>
    </Wrapper>
  );
};

export default Main;
