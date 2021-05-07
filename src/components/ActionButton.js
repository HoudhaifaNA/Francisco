import styled from "styled-components";

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  color: #fff;
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

export default ActionButton;
