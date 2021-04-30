import React from "react";
import styled from "styled-components";

import Icon from "../../components/Icon";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CheckoutBlankIcon = styled.svg`
  width: 100%;
  height: 40%;
  fill: ${(props) => props.theme.colors.greyDark};
`;

const CheckoutBlankText = styled.h2`
  margin-top: 4rem;
  color: ${(props) => props.theme.colors.greyDark};
`;

const CheckoutBlank = () => {
  return (
    <Wrapper>
      <CheckoutBlankIcon>
        <Icon icon="plate" />
      </CheckoutBlankIcon>
      <CheckoutBlankText>Vous n'avez aucun plat à préparer</CheckoutBlankText>
    </Wrapper>
  );
};

export default CheckoutBlank;
