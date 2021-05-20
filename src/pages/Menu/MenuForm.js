import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { createItem, editItem, showError } from "../../actions";
import FormGroup from "../../components/FormGroup";
import renderButtons from "./Buttons";
import menuValidator from "../../validators/menuValidator";

const Form = styled.form`
  width: 100%;
  height: 45rem;
  padding: 2rem;
`;
const handleSubmit = (e, props) => {
  const { type, postItem, editItem, items, categories } = props.menu;
  e.preventDefault();
  const res = menuValidator(type, postItem, editItem, items, categories);

  if (window.location.pathname.startsWith("/edit/")) {
    if (res === "success") {
      props.editItem(props.id);
    } else {
      props.showError(res);
      window.setTimeout(() => {
        props.showError(null);
      }, 2000);
    }
  } else {
    if (res === "success") {
      props.createItem();
    } else {
      props.showError(res);
      window.setTimeout(() => {
        props.showError(null);
      }, 1000);
    }
  }
};

const RenderForm = (props) => {
  if (props.menu.type === "Categories") {
    return (
      <Form onSubmit={(e) => handleSubmit(e, props)}>
        <FormGroup label="name" type="text" id={props.id} />
        {renderButtons()}
      </Form>
    );
  } else if (props.menu.type === "Articles") {
    return (
      <Form onSubmit={(e) => handleSubmit(e, props)}>
        <FormGroup label="name" type="text" id={props.id} />
        <FormGroup label="Category" type="text" id={props.id} />
        <FormGroup label="Price L" type="number" id={props.id} />
        <FormGroup label="Price XL" type="number" id={props.id} />
        <FormGroup label="Price XXL" type="number" id={props.id} />
        {renderButtons()}
      </Form>
    );
  } else if (props.menu.type === "Supplements") {
    return (
      <Form onSubmit={(e) => handleSubmit(e, props)}>
        <FormGroup label="name" type="text" id={props.id} />
        <FormGroup label="Category" type="text" id={props.id} />
        <FormGroup label="Price L" type="number" id={props.id} />
        <FormGroup label="Price XL" type="number" id={props.id} />
        <FormGroup label="Price XXL" type="number" id={props.id} />
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
export default connect(mapStateToProps, { createItem, editItem, showError })(
  MenuForm
);
