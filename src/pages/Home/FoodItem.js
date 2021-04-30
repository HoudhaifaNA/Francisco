import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectItem, unSelectItem, updateCurrentItem } from "../../actions";

const Item = styled.div`
  grid-column: span 1;
  height: 22rem;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : "#fff"};
  color: ${(props) => (props.selected ? "#fff " : "#000")};
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

const FoodItem = (props) => {
  const [isSelected, selectItem] = useState(false);
  useEffect(() => {
    if (props.selectedItems[props.id] !== undefined) {
      selectItem(true);
    } else {
      selectItem(false);
    }
  }, [props.selectedItems, props.id]);
  const onItemClick = () => {
    props.selectedItems[props.id] === undefined
      ? selectItem(true)
      : selectItem(false);
    const { name, prices, id } = props;
    if (isSelected === false) props.selectItem({ name, prices, id });
    if (isSelected === true) props.unSelectItem(props.id);
    props.updateCurrentItem(props.selectedItems);
  };

  return (
    <Item selected={isSelected} onClick={onItemClick}>
      <ImageContainer>
        <img src={`/assets/${props.image}.png`} alt="food" />
      </ImageContainer>
      <ItemName>{props.name}</ItemName>
      <ItemPrice>{props.prices[0]}.00 DA</ItemPrice>
    </Item>
  );
};

const mapStateToProps = (state) => {
  return { selectedItems: state.selectedItems, currentItem: state.currentItem };
};

export default connect(mapStateToProps, {
  selectItem,
  unSelectItem,
  updateCurrentItem,
})(FoodItem);
