import React from "react";
import { connect } from "react-redux";

import QuantityController from "../../components/QuantityController";
const CurrentItemQuantity = (props) => {
  const increment = () => props.increment();
  const decrement = () => (props.quantity !== 1 ? props.decrement() : 1);
  return (
    <QuantityController
      marginLeft="0"
      quantity={props.quantity}
      increment={increment}
      decrement={decrement}
    />
  );
};
const mapStateToProps = (state) => {
  return { quantity: state.currentItem.quantity };
};

export default connect(mapStateToProps, {})(CurrentItemQuantity);
