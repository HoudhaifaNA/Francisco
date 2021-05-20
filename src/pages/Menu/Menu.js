import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { protectedRoutes } from "../../validators/securityValidaror";
import Navigation from "./Navigation";
import CategoriesPage from "./CategoriesPage";
import ArticlesPage from "./ArticlesPage";
import SuplumentsPage from "./SuplumentsPage";

const showPage = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`;

const Wrapper = styled.div`
  width: 86vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  animation: ${showPage} 0.2s ease-in forwards;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Menu = (props) => {
  protectedRoutes();
  const renderPage = () => {
    if (props.section === "Categories") return <CategoriesPage />;
    if (props.section === "Articles") return <ArticlesPage />;
    if (props.section === "Supplements") return <SuplumentsPage />;
  };
  return (
    <Wrapper>
      <Navigation />
      {renderPage()}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { section: state.menu.type };
};

export default connect(mapStateToProps)(Menu);
