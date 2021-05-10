import React from "react";
import styled from "styled-components";

import onClose from "./closePage";

const BoxActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  padding: 1rem 3rem;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

const renderButtons = () => {
  if (window.location.pathname === "/new") {
    return (
      <>
        <Button
          type="button"
          color="#000"
          background="transparent"
          onClick={onClose}
        >
          BACK
        </Button>
        <Button type="submit" color="#fff" background="#0085FF" hover="#006DD1">
          ADD
        </Button>
      </>
    );
  } else if (window.location.pathname.startsWith("/edit/")) {
    return (
      <>
        <Button color="#626463" background="transparent">
          BACK
        </Button>
        <Button color="#fff" background="#13CB5D" hover="#00BF4D">
          Edit
        </Button>
      </>
    );
  }
};

const renderAction = () => {
  return <BoxActions>{renderButtons()}</BoxActions>;
};

export default renderAction;
