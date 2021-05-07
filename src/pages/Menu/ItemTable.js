import React from "react";
import styled from "styled-components";

import Icon from "../../components/Icon";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  height: 5rem;
  display: flex;
  font-weight: ${(props) =>
    props.header ? "700 !important" : "600 !important"};
  border-bottom: ${(props) => (props.header ? ".1rem solid #b9b9b9" : "none")};
`;

const ItemSelector = styled.div`
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 0.1rem solid #b9b9b9;
`;

const ItemSelectorSvg = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: none;
  border: 0.1rem inset ${(props) => props.theme.colors.greyDark};
  cursor: pointer;

  &:hover {
    width: 2.3rem;
    height: 2.3rem;
    fill: #2b92e4;
    border: none;
  }
`;

const ItemField = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0 1rem;
`;

const ContentTable = (props) => {
  return (
    <Wrapper header={props.header}>
      <ItemSelector>
        <ItemSelectorSvg>
          <Icon icon="checkbox" />
        </ItemSelectorSvg>
      </ItemSelector>
      <ItemField width="25%">{props.fields[0]}</ItemField>
      <ItemField width="16%">{props.fields[1]}</ItemField>
      <ItemField width="15%">{props.fields[2]}</ItemField>
      <ItemField width="15%">{props.fields[3]}</ItemField>
      <ItemField width="15%">{props.fields[4]}</ItemField>
      <ItemField width="10%">{props.fields[5]}</ItemField>
    </Wrapper>
  );
};

export default ContentTable;
