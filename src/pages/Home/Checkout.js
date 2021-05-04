import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Title from "../../components/Title";
import CheckoutBlank from "./CheckoutBlank";
import OrderList from "./OrderList";
import FinalConfig from "./FinalConfig";

const Wrapper = styled.aside`
  position: relative;
  width: 22vw;
  padding: 2rem 1rem;
`;

const Checkout = (props) => {
  const renderOrderList = () => {
    if (props.items.length > 0) {
      return <OrderList />;
    } else {
      return <CheckoutBlank />;
    }
  };
  return (
    <Wrapper>
      <Title>Order</Title>
      {renderOrderList()}
      <FinalConfig />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { items: _.values(state.order.items) };
};

export default connect(mapStateToProps)(Checkout);
