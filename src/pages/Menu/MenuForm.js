import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { createItem } from "../../actions";
import FormGroup from "../../components/FormGroup";
import renderButtons from "./Buttons";

const Form = styled.form`
  width: 100%;
  height: 45rem;
  padding: 2rem;
`;
const handleSubmit = (e, props) => {
  e.preventDefault();
  props.createItem();
};

const RenderForm = (props) => {
  if (props.menu.type === "Categories" && window.location.pathname === "/new") {
    return (
      <Form onSubmit={(e) => handleSubmit(e, props)}>
        <FormGroup label="Name" type="text" />
        {renderButtons()}
      </Form>
    );
  } else if (props.menu.type === "Articles") {
    return (
      <Form onSubmit={(e) => handleSubmit(e, props)}>
        <FormGroup label="Name" type="text" />
        <FormGroup label="Category" type="text" />
        <FormGroup label="Price L" type="number" />
        <FormGroup label="Price XL" type="number" />
        <FormGroup label="Price XXL" type="number" />
        {renderButtons()}
      </Form>
    );
  } else if (props.menu.type === "Supplements") {
    return (
      <Form onSubmit={(e) => handleSubmit(e, props)}>
        <FormGroup label="Name" type="text" />
        <FormGroup label="Category" type="text" />
        <FormGroup label="Price L" type="number" />
        <FormGroup label="Price XL" type="number" />
        <FormGroup label="Price XXL" type="number" />
        {renderButtons()}
      </Form>
    );
  }
};

const MenuForm = (props) => {
  return <>{RenderForm(props)}</>;
};

const mapStateToProps = (state) => {
  return { menu: state.menu };
};
export default connect(mapStateToProps, { createItem })(MenuForm);
