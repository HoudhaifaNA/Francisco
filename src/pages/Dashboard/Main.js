import React from "react";
import styled from "styled-components";

import PageHeader from "./PageHeader";
import DashboardList from "./DashboardList";

const Wrapper = styled.main`
  width: 64vw;
  height: 100vh;
  min-height: 100vh;
  padding: 2rem;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Main = () => {
  return (
    <Wrapper>
      <PageHeader />
      <DashboardList />
    </Wrapper>
  );
};

export default Main;
