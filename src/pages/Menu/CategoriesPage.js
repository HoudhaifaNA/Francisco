import React from "react";
import styled, { keyframes } from "styled-components";

import PageHeader from "./PageHeader";
import DeleteController from "./DeleteController";
import ContentTable from "./ContentTable";

const showPage = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100rem;
  padding: 1rem 3rem;
  animation: ${showPage} 0.2s ease-in forwards;
`;

const CategoriesPage = () => {
  return (
    <Wrapper>
      <PageHeader pageTitle="Categories" actionName="Categorie" />
      <DeleteController />
      <ContentTable />
    </Wrapper>
  );
};

export default CategoriesPage;
