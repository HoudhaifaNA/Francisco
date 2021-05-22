import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Item from "./ItemTable";

const Wrapper = styled.div`
  width: 100%;
  border: 0.1rem solid #b9b9b9;
`;

const ContentTable = (props) => {
  const renderItems = () => {
    if (props.items.length > 0) {
      return props.items.map((it) => {
        if (props.type === "Categories") {
          return (
            <Item
              key={it.id}
              id={it.id}
              fields={[`${it.name}`, it.printer, "--", "--", "--", "--"]}
            />
          );
        } else {
          return (
            <Item
              key={it.id}
              id={it.id}
              fields={[
                `${it.name}`,
                `${it.Category}`,
                `${it["Price L"]}`,
                `${it["Price XL"]}`,
                `${it["Price XXL"]}`,
                "--",
              ]}
            />
          );
        }
      });
    }
  };

  const renderHeader = () => {
    if (props.type === "Categories") {
      return (
        <Item
          header={true}
          fields={["Name", "Printer", "--", "--", "-", "Actions"]}
        />
      );
    } else {
      return (
        <Item
          header={true}
          fields={[
            "Name",
            "Category",
            "Price (L)",
            "Price (XL)",
            "Price (XXL)",
            "Actions",
          ]}
        />
      );
    }
  };

  return (
    <Wrapper>
      {renderHeader()}
      {renderItems()}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { items: _.values(state.menu.items), type: state.menu.type };
};
export default connect(mapStateToProps)(ContentTable);
