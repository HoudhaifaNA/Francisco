import React from "react";
import styled, { keyframes } from "styled-components";

import Title from "../../components/Title";
import SearchBar from "./SearhBar";
import Categories from "./Categories";
import OrderController from "./OrderController";
import Items from "./Items";

const showPage = keyframes`
 0% { opacity: 0; }

 100% {  opacity: 1; }
`;

const Wrapper = styled.main`
  width: 64vw;
  height: 100vh;
  min-height: 100vh;
  opacity: 0;
  background-color: ${(props) => props.theme.colors.greyBackground};
  padding: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;
  animation: ${showPage} 0.2s ease-in forwards;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PageHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
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
      <OrderController />
      <Items />
    </Wrapper>
  );
};

export default Main;
