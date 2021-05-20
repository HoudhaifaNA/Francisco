import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ErrorBar from "../../components/ErrorBar";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8500;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.greyHover};
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Logo = styled.div`
  width: 30rem;
  margin-bottom: 3rem;

  img {
    width: 100%;
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <ErrorBar />
      <Logo>
        <img src="./assets/logo.png" alt="francisco" />
      </Logo>
      <LoginForm />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { section: state.menu.type };
};

export default connect(mapStateToProps)(Login);
