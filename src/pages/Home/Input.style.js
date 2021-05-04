import styled from "styled-components";

export default styled.input`
  padding: 1rem;
  width: ${(props) => props.width};
  text-align: center;
  border: 0.2rem solid ${(props) => props.theme.colors.primary};
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.marginBottom};
  outline: none;
`;
