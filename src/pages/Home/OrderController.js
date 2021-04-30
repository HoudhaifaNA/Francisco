import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import {
  moveItem,
  clearCurrentItem,
  unSelectItem,
  toggleDropdown,
} from "../../actions";
import SizeForm from "./SizeForm";
import SuplumentsDrowpdown from "./SuplumentsDrowpdown";
import CurrentItemQuantity from "./CurrentItemQuantity";
import MoveItemButton from "../../components/PrimaryButton.style";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OrderController = (props) => {
  const onMoveItemClick = () => {
    if (props.currentItem.name.length > 0) {
      props.moveItem({ ...props.currentItem, id: uniqid() });
      props.clearCurrentItem();
      props.toggleDropdown("close");
    }
  };
  return (
    <Wrapper>
      <SizeForm />
      <SuplumentsDrowpdown />
      <CurrentItemQuantity />
      <MoveItemButton
        width="10rem"
        height="3.5rem"
        marginLeft="1rem"
        onClick={onMoveItemClick}
      >
        Valide
      </MoveItemButton>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { currentItem: state.currentItem };
};

export default connect(mapStateToProps, {
  moveItem,
  clearCurrentItem,
  unSelectItem,
  toggleDropdown,
})(OrderController);
