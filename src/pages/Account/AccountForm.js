import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  getUsers,
  onSecureityInputChange,
  updateUser,
  showError,
} from "../../actions";
import PrimaryButton from "../../components/PrimaryButton.style";

import { updateValidation } from "../../validators/securityValidaror";

const Form = styled.form`
  width: 45%;
  height: 65vh;
  padding: 1rem 0;
`;

const FormHeader = styled.h1`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #efefef;
  margin: 1rem 0;
  outline: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.4rem;

  &::placeholder {
    font-weight: 500;
  }
`;

const AccountForm = (props) => {
  let values = props.security[props.type];

  useEffect(() => {
    props.getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onInputChange = (e, field) => {
    props.onSecureityInputChange(field, e.target.value, props.type);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values["first"].length > 0 && values["second"].length > 0) {
      const validation = updateValidation(
        props.type,
        values["first"],
        values["second"],
        props.security.users
      );

      if (validation[0] === "error") {
        props.showError(validation[1]);
        window.setTimeout(() => {
          props.showError(null);
        }, 2000);
      } else {
        await props.updateUser(props.type, props.security);
        props.getUsers();
      }
    } else {
      props.showError(`Remplissez les champs`);
      window.setTimeout(() => {
        props.showError(null);
      }, 2000);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormHeader>{props.title}</FormHeader>
      <FormInput
        type={props.title === "Change Password" ? "password" : "text"}
        placeholder={props.placeholder[0]}
        value={values["first"]}
        onChange={(e) => onInputChange(e, "first")}
      />
      <FormInput
        type="password"
        placeholder={props.placeholder[1]}
        value={values["second"]}
        onChange={(e) => onInputChange(e, "second")}
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

export default connect(mapStateToProps, {
  onSecureityInputChange,
  updateUser,
  getUsers,
  showError,
})(AccountForm);
