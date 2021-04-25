import React, { useState } from "react";
import { connect } from "react-redux";
import styled, { css, keyframes } from "styled-components";

import {
  toggleDropdown,
  selectSuplument,
  unSelectSuplument,
} from "../../actions";
import Icon from "../../components/Icon";

const dropdownAnimation = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`;

const Wrapper = styled.div`
  width: 32rem;
  height: 3.5rem;
`;

const DropdownHeader = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const DropdownList = styled.ul`
  width: 100%;
  background-color: #fff;
  list-style: none;
  border-top: 0.1rem solid grey;
  opacity: 0;
  animation: ${(props) =>
    props.state === "open"
      ? css`
          ${dropdownAnimation} 0.2s ease-in-out forwards
        `
      : ""};
`;

const DropdownItem = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? css`
          ${props.theme.colors.purple}
        `
      : "#fff"};
  ${(props) =>
    props.selected
      ? css`
          background-color: ${props.theme.colors.purple};
          color: #fff;
        `
      : ""}
`;

const supluments = [
  { name: "Cheddar", price: [50, 100, 150] },
  { name: "Boise", price: [150, 300, 400] },
];

// JSX

const SuplumentsDrowpdown = (props) => {
  const onDropdownToggle = () => {
    props.dropdown === "close"
      ? props.toggleDropdown("open")
      : props.toggleDropdown("close");
  };

  const Item = (sup) => {
    const [isSelected, selectItem] = useState(false);
    const onItemClick = () => {
      isSelected === false ? selectItem(true) : selectItem(false);
      if (isSelected === false) props.selectSuplument(sup);
      if (isSelected === true) props.unSelectSuplument(sup);
    };

    return (
      <DropdownItem key={sup.name} onClick={onItemClick} selected={isSelected}>
        <span>{sup.name}</span> <span>{sup.price[0]}.00DA</span>
      </DropdownItem>
    );
  };

  const RenderSuplumentsItems = () => {
    return supluments.map((sup) => Item(sup));
  };

  const RenderDropdown = () => {
    return (
      <DropdownList state={props.dropdown}>
        {RenderSuplumentsItems()}
      </DropdownList>
    );
  };

  return (
    <Wrapper>
      <DropdownHeader onClick={onDropdownToggle}>
        Supluments
        <svg>
          <Icon icon="dropdown" />
        </svg>
      </DropdownHeader>
      {RenderDropdown()}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { dropdown: state.dropdown };
};
export default connect(mapStateToProps, {
  toggleDropdown,
  selectSuplument,
  unSelectSuplument,
})(SuplumentsDrowpdown);
