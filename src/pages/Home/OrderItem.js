import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { deleteOrderItem } from "../../actions";
import Icon from "../../components/Icon";
import EditItemQuantity from "./EditItemQuantity";

const Item = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid grey;

  height: ${(props) => (props.edit ? "20vh" : "10vh")};

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

const OrderItem = (props) => {
  const [editState, setEdit] = useState(false);
  const onEditClick = () => {
    editState ? setEdit(false) : setEdit(true);
  };
  const supluments = props.supluments.map((sup) => sup.name);

  return (
    <>
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
            <ActionIcon
              hoverColor="#FF1F1F"
              onClick={() => props.deleteOrderItem(props.id)}
            >
              <Icon icon="delete" />
            </ActionIcon>
          </ItemACtions>
        </ItemController>
      </Item>
    </>
  );
};

export default connect(null, { deleteOrderItem })(OrderItem);
