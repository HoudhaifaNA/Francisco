import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { onSearch } from "../../actions";

import Icon from "../../components/Icon";

const SearchContainer = styled.div`
  width: 45rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  font-weight: 600;
  outline: none;
  border: 0.2rem solid transparent;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  &:focus {
    border-bottom: 0.2rem solid #000;
    & + svg {
      fill: #000;
    }
  }
`;

const SearchSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
  fill: rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease;
`;

const SearchBar = (props) => {
  const onSearch = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" onChange={onSearch} />
      <SearchSvg>
        <Icon icon="search" />
      </SearchSvg>
    </SearchContainer>
  );
};

export default connect(null, { onSearch })(SearchBar);
