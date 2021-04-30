import React, { useState } from "react";
import { connect } from "react-redux";

import { updateSize, updateCurrentItem } from "../../actions";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 3.5rem;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 2rem;
  cursor: pointer;
`;
const SizeChecker = styled.div`
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : "transparent"};
  margin-right: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SizeForm = (props) => {
  const [selection, selectSize] = useState([false, false, false]);
  const sizeClicked = (selection, size) => {
    selectSize(selection);
    props.updateSize(size);
    props.updateCurrentItem();
  };

  return (
    <Wrapper>
      <SizeContainer>
        <SizeChecker
          selected={selection[0]}
          onClick={() => sizeClicked([true, false, false], "L")}
        />
        L {props.currentItem.prices[0]} DA
      </SizeContainer>
      <SizeContainer>
        <SizeChecker
          selected={selection[1]}
          onClick={() => sizeClicked([false, true, false], "XL")}
        />
        XL {props.currentItem.prices[1]} DA
      </SizeContainer>
      <SizeContainer>
        <SizeChecker
          selected={selection[2]}
          onClick={() => sizeClicked([false, false, true], "XXL")}
        />
        XXL {props.currentItem.prices[2]} DA
      </SizeContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { currentItem: state.currentItem };
};

export default connect(mapStateToProps, { updateSize, updateCurrentItem })(
  SizeForm
);
