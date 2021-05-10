import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Error = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 28rem;
  min-height: 6rem;
  padding: 2rem;
  background-color: #ecc8c5;
  color: #b43230;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.15);
  font-weight: 700;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: #b43230;
  }

  h1 {
    font-size: 1.1rem;
    text-transform: uppercase;
    line-height: 1.8;
  }
`;

const ErrorBar = (props) => {
  const renderError = () => {
    if (props.error !== null) {
      return (
        <Error>
          <h1>{props.error}</h1>
        </Error>
      );
    }
  };
  return <>{renderError()}</>;
};

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps)(ErrorBar);
