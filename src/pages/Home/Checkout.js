import React from "react";
import styled from "styled-components";

// import PrimaryButton from "../../components/PrimaryButton.style";
// import Icon from "../../components/Icon";
import Title from "../../components/Title";
// import CheckoutBlank from "./CheckoutBlank";
import OrderList from "./OrderList";

const Wrapper = styled.aside`
  width: 22vw;
  height: 100vh;
  padding: 2rem 1rem;
`;

const Checkout = () => {
  return (
    <Wrapper>
      <Title>Order</Title>
      <OrderList />
      {/* <CheckoutBlank /> */}
      {/* <PrimaryButton width="100%" height="5rem">
        Order
      </PrimaryButton> */}
    </Wrapper>
  );
};

export default Checkout;
