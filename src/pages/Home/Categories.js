import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CategoryItem from "./CategoryItem";

const CategoryList = styled.div`
  height: 15rem;
  min-width: 100%;
  margin: 3rem 0 1rem 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const Categories = (props) => {
  const render = () => {
    if (props.categories.length > 0) {
      return props.categories.map((cat) => {
        return <CategoryItem icon={cat.name.toLowerCase()} name={cat.name} />;
      });
    }
  };
  return (
    <CategoryList>
      <CategoryItem icon="list" name="Tout" />
      {render()}
    </CategoryList>
  );
};
const mapStateToProps = (state) => {
  return { categories: state.data.categories };
};
export default connect(mapStateToProps)(Categories);
