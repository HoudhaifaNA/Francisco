import React from "react";
import styled from "styled-components";

import history from "../../History";
import ActionButton from "../../components/ActionButton";

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1``;

const PageHeader = (props) => {
  return (
    <Wrapper>
      <PageTitle>{props.pageTitle}</PageTitle>
      <div
        to="/new"
        style={{ textDecoration: "none " }}
        onClick={() => {
          history.push("/new", {});
          window.dispatchEvent(new Event("popstate"));
        }}
      >
        <ActionButton
          width="15rem"
          height="4rem"
          background="#FF2351"
          hover="#F50033"
        >
          new {props.actionName}
        </ActionButton>
      </div>
    </Wrapper>
  );
};

export default PageHeader;
