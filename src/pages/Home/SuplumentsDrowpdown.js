import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { toggleDropdown } from "../../actions";
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
  animation: ${dropdownAnimation} 0.2s ease-in-out forwards;
`;

const DropdownItem = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  s {
    background-color: red;
  }
`;

// JSX

const SuplumentsDrowpdown = (props) => {
  const onDropdownToggle = () => {
    props.dropdown === "close"
      ? props.toggleDropdown("open")
      : props.toggleDropdown("close");
  };

  const renderSuplumentsItems = () => {
    return (
      <DropdownItem
        onClick={(e) => e.target.classList.toggle("suplumentActive")}
      >
        <span>Cheddar</span> <span>150.00DA</span>
      </DropdownItem>
    );
  };

  const renderDropdown = () => {
    if (props.dropdown === "open") {
      return (
        <DropdownList state={props.dropdown}>
          {renderSuplumentsItems()}
        </DropdownList>
      );
    }
  };

  return (
    <Wrapper>
      <DropdownHeader onClick={onDropdownToggle}>
        Supluments
        <svg>
          <Icon icon="dropdown" />
        </svg>
      </DropdownHeader>
      {renderDropdown()}
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return { dropdown: state.dropdown };
};
export default connect(mapStateToProps, { toggleDropdown })(
  SuplumentsDrowpdown
);
