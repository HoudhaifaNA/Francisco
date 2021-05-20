import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { setEditItem, selectToDelete } from "../../actions";
import Icon from "../../components/Icon";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  height: 5rem;
  display: flex;
  font-weight: ${(props) =>
    props.header ? "700 !important" : "600 !important"};
  border-bottom: ${(props) => (props.header ? ".1rem solid #b9b9b9" : "none")};
`;

const ItemSelector = styled.div`
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 0.1rem solid #b9b9b9;
`;

const ItemSelectorSvg = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: none;
  border: 0.1rem inset ${(props) => props.theme.colors.greyDark};
  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          width: 2.3rem;
          height: 2.3rem;
          fill: #2b92e4;
          border: none;
        `
      : ""}
`;

const ItemField = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0 1rem;
`;

const EditLink = styled.span`
  a {
    font-weight: 700;
    color: #3861fb;
    text-decoration: none;
    text-transform: capitalize;
  }
`;

const ItemTable = (props) => {
  const onEditClick = () => {
    props.setEditItem(props.id);
  };
  const selectToDelete = () => {
    if (props.header) props.selectToDelete("all");
    if (!props.header) props.selectToDelete(props.id);
  };

  const renderActionsSide = () => {
    if (props.header) {
      return <ItemField width="15%">{props.fields[5]}</ItemField>;
    } else {
      return (
        <ItemField width="15%">
          <EditLink onClick={onEditClick}>
            <Link to={`edit/${props.id}`}>Edit</Link>
          </EditLink>
        </ItemField>
      );
    }
  };
  return (
    <Wrapper header={props.header}>
      <ItemSelector>
        <ItemSelectorSvg
          onClick={selectToDelete}
          selected={props.selected.indexOf(props.id) !== -1}
        >
          <Icon icon="checkbox" />
        </ItemSelectorSvg>
      </ItemSelector>
      <ItemField width="25%">{props.fields[0]}</ItemField>
      <ItemField width="16%">{props.fields[1]}</ItemField>
      <ItemField width="15%">{props.fields[2]}</ItemField>
      <ItemField width="15%">{props.fields[3]}</ItemField>
      <ItemField width="15%">{props.fields[4]}</ItemField>
      {renderActionsSide()}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.menu.selected,
  };
};

export default connect(mapStateToProps, { setEditItem, selectToDelete })(
  ItemTable
);
