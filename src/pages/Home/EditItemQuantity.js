import React from "react";
import { connect } from "react-redux";

import {
  incrementOrderItem,
  decrementOrderItem,
  calculateTotal,
} from "../../actions";

import QuantityController from "../../components/QuantityController";

const EditItemQuantity = (props) => {
  const increment = () => {
    props.incrementOrderItem(props.id);
    props.calculateTotal();
  };
  const decrement = () => {
    if (props.quantity !== 1) props.decrementOrderItem(props.id);
    props.calculateTotal();
  };
  return (
    <QuantityController
      marginLeft="0"
      quantity={props.quantity}
      increment={increment}
      decrement={decrement}
    />
  );
};

export default connect(null, {
  incrementOrderItem,
  decrementOrderItem,
  calculateTotal,
})(EditItemQuantity);
