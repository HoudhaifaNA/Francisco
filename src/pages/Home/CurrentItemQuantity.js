import React from "react";
import { connect } from "react-redux";

import { increment, decrement, updateCurrentItem } from "../../actions";

import QuantityController from "../../components/QuantityController";
const CurrentItemQuantity = (props) => {
  const increment = () => {
    props.increment();
    props.updateCurrentItem();
  };
  const decrement = () => {
    if (props.quantity !== 1) props.decrement();
    props.updateCurrentItem();
  };
  return (
    <QuantityController
      marginLeft="3rem"
      quantity={props.quantity}
      increment={increment}
      decrement={decrement}
    />
  );
};

const mapStateToProps = (state) => {
  return { quantity: state.currentItem.quantity };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  updateCurrentItem,
})(CurrentItemQuantity);
