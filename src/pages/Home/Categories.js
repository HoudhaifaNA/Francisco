import React from "react";
import styled from "styled-components";

import CategoryItem from "./CategoryItem";

const CategoryList = styled.div`
  height: 15rem;
  min-width: 100%;
  margin: 4rem 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const Categories = () => {
  return (
    <CategoryList>
      <CategoryItem icon="list" name="Tout" />
      <CategoryItem icon="pizza" name="Pizza" />
    </CategoryList>
  );
};

export default Categories;
