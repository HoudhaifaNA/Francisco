import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Loader from "../../components/Loader";
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

const Items = (props) => {
  const render = () => {
    if (props.items.length > 0) {
      return props.items.map((it) => {
        return (
          <FoodItem
            key={it.id}
            image={it.Category}
            name={it.name}
            prices={[
              it["Price L"] * 1,
              it["Price XL"] * 1,
              it["Price XXL"] * 1,
            ]}
            id={it.id}
          />
        );
      });
    } else {
      return <Loader />;
    }
  };
  return <Wrapper>{render()}</Wrapper>;
};
const mapStateToProps = (state) => {
  return { items: state.data.items };
};
export default connect(mapStateToProps)(Items);
