import React from "react";
import styled from "styled-components";

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
  }
`;

const CategoryName = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: capitalize;
`;

const CategoryItem = (props) => {
  return (
    <Category>
      <IconContainer>
        <svg>
          <Icon icon={props.icon} />
        </svg>
      </IconContainer>
      <CategoryName>{props.name}</CategoryName>
    </Category>
  );
};

export default CategoryItem;
