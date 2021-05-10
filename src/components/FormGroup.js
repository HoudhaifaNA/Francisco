import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { inputChange } from "../actions";

const Wrapper = styled.div`
  width: 100%;
  height: 7rem;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
`;

const FormInput = styled.input`
  padding: 0 1rem;
  width: 100%;
  height: 4.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border: none;
  outline: 0.2rem solid rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: 0.2rem solid #006dd1;
  }
`;

const FormGroup = (props) => {
  const onInputChange = (field, e) => {
    props.inputChange(field, e.target.value);
  };
  let value;
  window.location.pathname.startsWith("/edit/")
    ? (value = props.menu.editItem[props.label])
    : (value = props.menu.postItem[props.label]);
  return (
    <Wrapper>
      <FormLabel htmlFor={props.label}>{props.label}</FormLabel>
      <FormInput
        type={props.type}
        id={props.label}
        placeholder={props.label}
        value={value}
        required
        onChange={(e) => onInputChange(props.label, e)}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { menu: state.menu };
};
export default connect(mapStateToProps, { inputChange })(FormGroup);
