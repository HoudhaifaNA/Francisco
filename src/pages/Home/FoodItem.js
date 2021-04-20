import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.div`
  grid-column: span 1;
  height: 22rem;
  background-color: ${(props) =>
    props.selected === "true" ? props.theme.colors.primary : "#fff"};
  color: ${(props) => (props.selected === "true" ? "#fff " : "#000")};
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.1s ease;
`;

const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #c1d0f9;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60%;
  }
`;

const ItemName = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 2.5rem;
  text-align: center;
`;
const ItemPrice = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: capitalize;
`;

const FoodItem = ({ image, name, price }) => {
  const [isSelected, selectItem] = useState("no");
  const onItemClick = () => {
    isSelected === "no" ? selectItem("true") : selectItem("no");
  };
  return (
    <Item selected={isSelected} onClick={onItemClick}>
      <ImageContainer>
        <img src={`/assets/${image}.png`} alt="food" />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price}.00 DA</ItemPrice>
    </Item>
  );
};

export default FoodItem;
