import React from "react";
import styled from "styled-components";

import SizeForm from "./SizeForm";
import SuplumentsDrowpdown from "./SuplumentsDrowpdown";
import QuantityController from "../../components/QuantityController";
import MoveItemButton from "../../components/PrimaryButton.style";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OrderController = () => {
  return (
    <Wrapper>
      <SizeForm />
      <SuplumentsDrowpdown />
      <QuantityController />
      <MoveItemButton width="10rem" height="3.5rem" marginLeft="1rem">
        Valide
      </MoveItemButton>
    </Wrapper>
  );
};

export default OrderController;
