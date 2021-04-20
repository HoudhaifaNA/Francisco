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
  width: 35rem;
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
  height: 15rem;
  background-color: #fff;
  list-style: none;
  padding: 1rem 0;
  border-top: 0.1rem solid grey;
  opacity: 0;
  animation: ${dropdownAnimation} 0.2s ease-in-out forwards;
`;

const DropdownItem = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem;
`;

// JSX

const SuplumentsDrowpdown = (props) => {
  const onDropdownToggle = () => {
    console.log(props.dropdown);
    props.dropdown === "close"
      ? props.toggleDropdown("open")
      : props.toggleDropdown("close");
  };

  const renderDropdown = () => {
    if (props.dropdown === "close") {
      return <div></div>;
    } else {
      return (
        <DropdownList state={props.dropdown}>
          <DropdownItem>Cheddar -150.00DA- </DropdownItem>
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
