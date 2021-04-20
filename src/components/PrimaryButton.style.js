import styled from "styled-components";

const PrimaryButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-left: ${(props) => props.marginLeft};
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.1s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export default PrimaryButton;
