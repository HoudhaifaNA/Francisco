import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { loginInputChange, login, showError } from "../../actions";

import PrimaryButton from "../../components/PrimaryButton.style";

const Form = styled.form`
  width: 35vw;
  padding: 5rem 2rem;
  background-color: #fff;
`;

const FormHeader = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 4rem;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #efefef;
  margin-bottom: 2rem;
  outline: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.4rem;

  &::placeholder {
    font-weight: 500;
  }
`;

const LoginForm = (props) => {
  const onInputChange = (field, value) => {
    props.loginInputChange(field, value);
  };
  const values = [
    props.security.loginForm.name.toLowerCase(),
    props.security.loginForm.password,
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values[0].length > 0 && values[1].length > 0) {
      const res = await props.login(values[0], values[1]);
      if (res[0] !== "success") {
        props.showError(res[1]);
        window.setTimeout(() => {
          props.showError(null);
        }, 2000);
      }
    } else {
      props.showError("Remplissez les champs");
      window.setTimeout(() => {
        props.showError(null);
      }, 2000);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>Login</FormHeader>
      <FormInput
        type="text"
        placeholder="Name"
        onChange={(e) => onInputChange("name", e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        onChange={(e) => onInputChange("password", e.target.value)}
      />
      <PrimaryButton type="submit" width="100%" height="5rem" marginLeft="0">
        Submit
      </PrimaryButton>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return { security: state.security };
};

export default connect(mapStateToProps, { loginInputChange, login, showError })(
  LoginForm
);
