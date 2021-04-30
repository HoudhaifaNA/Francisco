import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// import Icon from "../../components/Icon";
import OrderItem from "./OrderItem";

const List = styled.div`
  position: relative;
  z-index: 150;
  width: 100%;
  height: 40vh;
  margin-top: 5rem;
`;

const OrderList = (props) => {
  const renderItems = props.order.map((item) => {
    return (
      <OrderItem
        name={item.name}
        supluments={_.values(item.supluments)}
        quantity={item.quantity}
        price={item.price}
        id={item.id}
        key={item.id}
      />
    );
  });
  return <List>{renderItems}</List>;
};

const mapStateToProps = (state) => {
  return { order: _.values(state.order.items) };
};
export default connect(mapStateToProps)(OrderList);
