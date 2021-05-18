import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import PrimaryButton from "../../components/PrimaryButton.style";

import { selectOrdertoDelete, deleteOrder } from "../../actions";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 1.8rem;
  margin-right: auto;
`;

const SelectAll = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;

  cursor: pointer;
`;

const PageHeader = (props) => {
  const onAllDeleteClick = () => {
    props.selectOrdertoDelete("all");
  };
  const handleDelete = () => {
    if (props.selected.length > 0) {
      props.selected.forEach((id) =>
        setTimeout(() => {
          props.deleteOrder(id);
        }, 1000)
      );
    }
  };
  return (
    <Wrapper>
      <HeaderTitle>Dashboard</HeaderTitle>
      <SelectAll onClick={onAllDeleteClick}>Tout Sélectionner</SelectAll>
      <PrimaryButton
        marginLeft="3rem"
        width="11rem"
        height="80%"
        onClick={handleDelete}
      >
        Delete
      </PrimaryButton>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { selected: state.dashboard.selected };
};

export default connect(mapStateToProps, { selectOrdertoDelete, deleteOrder })(
  PageHeader
);
