import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  deleteOrderItem,
  editOrderItemPrice,
  calculateTotal,
} from "../../actions";
import Input from "./Input.style";
import Icon from "../../components/Icon";
import EditItemQuantity from "./EditItemQuantity";

const Wrapper = styled.div`
  border-bottom: 0.1rem solid grey;
  margin-bottom: 1rem;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;

  &:hover .actions {
    opacity: 1;
    visibility: visible;
  }
`;

const ItemQuantity = styled.h5`
  font-size: 1.3rem;
  width: 8%;
  font-weight: 500;
`;
const ItemDetails = styled.div`
  width: 67%;
  height: 100%;
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h2`
  margin-bottom: 2rem;
  text-transform: capitalize;
`;
const ItemSupluments = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const ItemController = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const ItemPrice = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ItemACtions = styled.div`
  width: 6rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
`;

const ActionIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  fill: ${(props) => props.theme.colors.greyDark};
  &:hover {
    fill: ${(props) => props.hoverColor};
  }
`;

const EditPanel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const OrderItem = (props) => {
  const [editState, setEdit] = useState(false);
  const supluments = props.supluments.map((sup) => sup.name);

  const handleDeleteItem = () => {
    props.deleteOrderItem(props.id);
    props.calculateTotal();
  };

  const onEditClick = () => {
    editState ? setEdit(false) : setEdit(true);
    props.calculateTotal();
  };

  const onPriceChange = (id, value) => {
    props.editOrderItemPrice(id, value);
    props.calculateTotal();
  };
  const renderEditPanel = () => {
    if (editState) {
      return (
        <EditPanel>
          <EditItemQuantity
            quantity={props.thisItem.quantity}
            id={props.thisItem.id}
          />
          <Input
            type="text"
            value={props.thisItem.basePrice}
            onChange={(e) => onPriceChange(props.thisItem.id, e.target.value)}
            width="10rem"
          />
        </EditPanel>
      );
    }
  };

  return (
    <Wrapper>
      <Item edit={editState} title={props.name}>
        <ItemQuantity>{props.quantity} &times;</ItemQuantity>
        <ItemDetails>
          <ItemName>
            {props.name.length > 18
              ? `${props.name.split("/")[0]}/...`
              : props.name}
          </ItemName>
          <ItemSupluments>{supluments.join("-")}</ItemSupluments>
        </ItemDetails>
        <ItemController>
          <ItemPrice>{props.price}.00 DA</ItemPrice>
          <ItemACtions className="actions">
            <ActionIcon hoverColor="#0CE23B" onClick={onEditClick}>
              <Icon icon="edit" />
            </ActionIcon>
            <ActionIcon hoverColor="#FF1F1F" onClick={handleDeleteItem}>
              <Icon icon="delete" />
            </ActionIcon>
          </ItemACtions>
        </ItemController>
      </Item>
      {renderEditPanel()}
    </Wrapper>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { thisItem: state.order.items[ownProps.id] };
};

export default connect(mapStateToProps, {
  deleteOrderItem,
  editOrderItemPrice,
  calculateTotal,
})(OrderItem);
