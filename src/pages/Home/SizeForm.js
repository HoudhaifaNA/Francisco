import React, { useState } from "react";
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

const SizeForm = () => {
  const [selection, selectSize] = useState([true, false, false]);
  const sizeClicked = (selection) => {
    selectSize(selection);
  };

  return (
    <Wrapper>
      <SizeContainer>
        <SizeChecker
          selected={selection[0]}
          onClick={() => sizeClicked([true, false, false])}
        />
        L 400 DA
      </SizeContainer>
      <SizeContainer>
        <SizeChecker
          selected={selection[1]}
          onClick={() => sizeClicked([false, true, false])}
        />
        XL 800 DA
      </SizeContainer>
      <SizeContainer>
        <SizeChecker
          selected={selection[2]}
          onClick={() => sizeClicked([false, false, true])}
        />
        XXL 1200 DA
      </SizeContainer>
    </Wrapper>
  );
};

export default SizeForm;
