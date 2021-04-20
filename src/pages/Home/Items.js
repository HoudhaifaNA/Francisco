import React from "react";
import styled from "styled-components";

// import Loader from "../../components/Loader";
import FoodItem from "./FoodItem";

const Wrapper = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
  padding: 1rem 0;
  overflow: hidden;
`;

const Items = () => {
  return (
    <Wrapper>
      {/* <Loader /> */}
      <FoodItem image="pizza" name="pizza margeritta" price="400" />
      <FoodItem image="burger" name="Burger special" price="350" />
    </Wrapper>
  );
};

export default Items;
