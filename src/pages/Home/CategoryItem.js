import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { getItemsOnCategory } from "../../actions";
import Icon from "../../components/Icon";

const Category = styled.div`
  min-width: 8rem;
  min-height: 11rem;
  background-color: ${(props) => props.theme.colors.white};
  margin-right: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;

  ${(props) =>
    props.active
      ? css`
          background-color: ${(props) => props.theme.colors.yellow};
          div {
            border: none;
          }
          h4 {
            color: #000;
          }
        `
      : ""}
`;

const IconContainer = styled.div`
  width: 6.5rem;
  height: 6rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.1);
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${(props) => props.theme.colors.greyDark};
  }
`;

const CategoryName = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.greyDark};
`;

const CategoryItem = (props) => {
  const onCatClick = () => {
    props.getItemsOnCategory(props.name);
  };
  return (
    <Category active={props.data.type === props.name} onClick={onCatClick}>
      <IconContainer>
        <svg>
          <Icon icon={props.icon} />
        </svg>
      </IconContainer>
      <CategoryName>{props.name}</CategoryName>
    </Category>
  );
};

const mapStateToProps = (state) => {
  return { data: state.data };
};
export default connect(mapStateToProps, { getItemsOnCategory })(CategoryItem);
