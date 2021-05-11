import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { css, keyframes } from "styled-components";

import {
  toggleDropdown,
  selectSuplument,
  unSelectSuplument,
  updateCurrentItem,
} from "../../actions";
import Icon from "../../components/Icon";

const dropdownAnimation = keyframes`
 0% { opacity: 0; visibility: hidden; }
 100% {  opacity: 1; visibility: visible; }
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
  visibility: hidden;
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

// JSX

const SuplumentsDrowpdown = (props) => {
  const onDropdownToggle = () => {
    props.dropdown === "close"
      ? props.toggleDropdown("open")
      : props.toggleDropdown("close");
  };

  const Item = (sup) => {
    const [isSelected, selectItem] = useState(false);
    useEffect(() => {
      if (props.currentItem.supluments[sup.name] !== undefined) {
        selectItem(true);
      } else {
        selectItem(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentItem.supluments]);
    const onItemClick = () => {
      props.currentItem.supluments[sup.name] === undefined
        ? selectItem(true)
        : selectItem(false);
      if (isSelected === false) props.selectSuplument(sup);
      if (isSelected === true) props.unSelectSuplument(sup);
      props.updateCurrentItem();
    };
    let priceOnSize = 0;
    if (props.currentItem.size === "L") priceOnSize = 0;
    if (props.currentItem.size === "XL") priceOnSize = 1;
    if (props.currentItem.size === "XXL") priceOnSize = 2;
    return (
      <DropdownItem key={sup.name} onClick={onItemClick} selected={isSelected}>
        <span>{sup.name}</span> <span>{sup.prices[priceOnSize]}.00DA</span>
      </DropdownItem>
    );
  };

  const RenderSuplumentsItems = () => {
    if (props.suppluments.length > 0) {
      return props.suppluments.map((sup) => Item(sup));
    }
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
  return {
    dropdown: state.dropdown,
    currentItem: state.currentItem,
    suppluments: state.data.suppluments,
  };
};
export default connect(mapStateToProps, {
  toggleDropdown,
  selectSuplument,
  unSelectSuplument,
  updateCurrentItem,
})(SuplumentsDrowpdown);
