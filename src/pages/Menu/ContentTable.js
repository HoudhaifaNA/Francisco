import React from "react";
import styled from "styled-components";

import Item from "./ItemTable";

const Wrapper = styled.div`
  width: 100%;
  border: 0.1rem solid #b9b9b9;
`;

const ContentTable = (props) => {
  return (
    <Wrapper>
      <Item
        header={true}
        fields={[
          "Name",
          "Articles",
          "Price (L)",
          "Price (XL)",
          "Price (XXL)",
          "Actions",
        ]}
      />
      <Item fields={["Pizza ", "250", "--", "--", "--", "Actions"]} />
      <Item fields={["Pizza ", "250", "--", "--", "--", "Actions"]} />
      <Item fields={["Pizza ", "250", "--", "--", "--", "Actions"]} />
    </Wrapper>
  );
};

export default ContentTable;
