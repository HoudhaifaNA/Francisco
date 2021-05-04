import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  toggleRetard,
  insertRetardTime,
  selectOrderType,
  selectTypeInfo,
} from "../../actions";
import Input from "./Input.style";
import PrimaryButton from "../../components/PrimaryButton.style";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 1rem;
`;

const RetardConfig = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const ToggleBtn = styled.div`
  position: relative;
  width: 5rem;
  height: 2.5rem;
  background-color: ${(props) => (props.retard ? "#FFC8D3" : "#9F9F9F")};
  border-radius: 10rem;
  transition: all 0.1s ease;
`;
const ToggleChanger = styled.div`
  position: absolute;
  left: ${(props) => (props.retard ? "60%" : "0")};
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => (props.retard ? "#FF2351" : "#fff")};
  box-shadow: ${(props) => (props.retard ? "" : "0 0.1rem 1rem #9f9f9f")};
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.1s ease;
`;

const OrderTypes = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid #ff2351;

  box-shadow: 0 0 0 0.1rem #ff2351 inset;
`;

const Type = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => (props.type ? "#fff" : "#000")};
  background-color: ${(props) => (props.type ? "#ff2351" : "#fff")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.type ? "#ff2351" : `#F4F4F4`)};
  }
`;

const TypeInputContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const TotalContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid #9f9f9f;
  margin-bottom: 3rem;
`;

const TotalStatment = styled.h3`
  font-size: 1.6rem;
`;

const TotalPrice = styled.h3`
  font-weight: 500;
  font-size: 1.6rem;
`;

const FinalConfig = (props) => {
  const { retard } = props.order;

  const toggleRetard = () => {
    if (retard) {
      props.toggleRetard(false);
      props.insertRetardTime("");
    } else {
      props.toggleRetard(true);
    }
  };

  const selectOrderType = (type) => {
    props.selectOrderType(type);
  };
  const onTimeChange = (e) => {
    props.insertRetardTime(e.target.value);
  };
  const insertTypeInfo = (field, value) => {
    props.selectTypeInfo(field, value);
  };

  const renderRetardInput = () => {
    if (retard) {
      return (
        <React.Fragment>
          <Input
            width="10rem"
            placeholder="12:30"
            retard={retard}
            onChange={onTimeChange}
          />
        </React.Fragment>
      );
    }
  };

  const renderTypeInput = () => {
    if (props.order.type === "A Table") {
      return (
        <Input
          width="100%"
          marginBottom="1rem"
          placeholder="Numero de table"
          onChange={(e) => insertTypeInfo("tableNumber", e.target.value * 1)}
        />
      );
    } else if (props.order.type === "Livraison") {
      return (
        <>
          <Input
            width="100%"
            marginBottom="0"
            placeholder="Numero de telephone"
            onChange={(e) => insertTypeInfo("phoneNumber", e.target.value)}
          />
          ;
          <Input
            width="100%"
            marginBottom="1rem"
            placeholder="Address"
            onChange={(e) => insertTypeInfo("address", e.target.value)}
          />
          ;
        </>
      );
    }
  };

  const renderConfig = () => {
    if (_.values(props.order.items).length > 0) {
      return (
        <React.Fragment>
          <RetardConfig>
            <ToggleBtn retard={retard} onClick={toggleRetard}>
              <ToggleChanger retard={retard} />
            </ToggleBtn>
            {renderRetardInput()}
          </RetardConfig>
          <OrderTypes>
            <Type
              type={props.order.type === "A Table"}
              onClick={() => selectOrderType("A Table")}
            >
              A Table
            </Type>
            <Type
              type={props.order.type === "Emporter"}
              onClick={() => selectOrderType("Emporter")}
            >
              Emporter
            </Type>
            <Type
              type={props.order.type === "Livraison"}
              onClick={() => selectOrderType("Livraison")}
            >
              Livraison
            </Type>
          </OrderTypes>
          <TypeInputContainer>{renderTypeInput()}</TypeInputContainer>
          <TotalContainer>
            <TotalStatment>Total</TotalStatment>
            <TotalPrice>{props.order.total}.00 DA</TotalPrice>
          </TotalContainer>
        </React.Fragment>
      );
    }
  };

  return (
    <Wrapper>
      {renderConfig()}
      <PrimaryButton width="100%" height="5rem">
        Order
      </PrimaryButton>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { order: state.order };
};

export default connect(mapStateToProps, {
  toggleRetard,
  insertRetardTime,
  selectOrderType,
  selectTypeInfo,
})(FinalConfig);
