import styled, { keyframes } from "styled-components";

const loaderAnimate = keyframes`
    0%{}
    100%{transform: rotate(360deg)}
`;

const Loader = styled.div`
  grid-column: span 4;
  width: 5rem;
  height: 5rem;
  background: none;
  border: 0.5rem solid #d6d6d6;
  border-top-color: ${(props) => props.theme.colors.primary};
  margin: 2rem auto;
  border-radius: 50%;
  animation: ${loaderAnimate} 0.7s linear infinite;
`;

export default Loader;
