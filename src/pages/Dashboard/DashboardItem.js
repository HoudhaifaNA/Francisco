import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled, { css, keyframes } from "styled-components";

import { selectOrdertoDelete } from "../../actions";

const showPage = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1;   visibility: visible;}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
`;
const Item = styled.div`
  width: 89%;
  display: flex;
  padding: 2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    & + div {
      animation: ${showPage} 0.2s ease-in forwards;
    }
  }

  ${(props) =>
    props.selected !== -1
      ? css`
          background-color: ${(props) => props.theme.colors.purple};
          border: 0.1rem solid ${(props) => props.theme.colors.purple};
          color: #fff;
        `
      : ""}
`;
const ItemNumber = styled.div`
  width: 9rem;
  height: 8rem;
  background-color: ${(props) => props.theme.colors.purple};
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  transition: all 0.1s ease;

  ${(props) =>
    props.selected !== -1
      ? css`
          background-color: #fff;
          color: ${(props) => props.theme.colors.purple};
        `
      : ""}
`;

const OrderList = styled.div`
  width: 100%;
`;

const OrderItem = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderItemText = styled.h3`
  text-transform: capitalize;
  &:nth-child(1) {
    width: 10rem;
  }
  &:nth-child(2) {
    margin-right: auto;
    width: 35rem;
  }
`;

const ItemMore = styled.div`
  width: 10%;
  height: 7rem;
  margin-left: 1rem;
  background-color: #000;
  display: flex;
  opacity: 0;
  visibility: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemMoreText = styled.h5`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;

const DashboardItem = ({ order, selected, selectOrdertoDelete }) => {
  const items = _.values(order.items);
  const handleClick = () => {
    selectOrdertoDelete(order.id);
  };
  const renderItems = () => {
    return items.map((it) => {
      return (
        <OrderItem key={it.id}>
          <OrderItemText>
            {it.quantity}-{it.size}
          </OrderItemText>
          <OrderItemText>{it.name}</OrderItemText>
          <OrderItemText>{it.price}.00DA</OrderItemText>
        </OrderItem>
      );
    });
  };
  return (
    <Wrapper>
      <Item selected={selected.indexOf(order.id)} onClick={handleClick}>
        <ItemNumber selected={selected.indexOf(order.id)}>
          {order.number}
        </ItemNumber>
        <OrderList>{renderItems()}</OrderList>
      </Item>
      <ItemMore>
        <ItemMoreText>{order.total}.00DA</ItemMoreText>
        <ItemMoreText>{order.time}</ItemMoreText>
        <ItemMoreText>Younes</ItemMoreText>
      </ItemMore>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { selected: state.dashboard.selected };
};

export default connect(mapStateToProps, { selectOrdertoDelete })(DashboardItem);
