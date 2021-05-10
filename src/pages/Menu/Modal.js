import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import onClose from "./closePage";
import ErrorBar from "../../components/ErrorBar";
import Icon from "../../components/Icon";
import MenuFrom from "./MenuForm";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DialogBox = styled.div`
  position: relative;
  width: 75rem;
  height: 60rem;
  background-color: #fff;
`;

const BoxHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.15);
`;

const BoxTitle = styled.h1`
  font-size: 1.5rem;
`;

const BoxClose = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const Modal = (props) => {
  const Render = () => {
    return (
      <Wrapper onClick={onClose}>
        <ErrorBar />
        <DialogBox onClick={(e) => e.stopPropagation()}>
          <BoxHeader>
            <BoxTitle>New Item</BoxTitle>
            <BoxClose onClick={onClose}>
              <Icon icon="close" />
            </BoxClose>
          </BoxHeader>
          <MenuFrom id={props.match.params.id}></MenuFrom>
        </DialogBox>
      </Wrapper>
    );
  };
  return ReactDOM.createPortal(<Render />, document.getElementById("modal"));
};

export default Modal;
