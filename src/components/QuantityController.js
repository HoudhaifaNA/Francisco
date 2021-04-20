import styled from "styled-components";

const Wrapper = styled.div`
  width: 13rem;
  height: 3.5rem;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  width: 4rem;
  height: 3.5rem;
  outline: none;
  cursor: pointer;
`;

const DecrementButton = styled(Button)`
  background-color: #fff;
  color: ${(props) => props.theme.colors.black};
  border: 0.2rem solid ${(props) => props.theme.colors.primary};
`;

const Quantity = styled.h2``;

const IncrementButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: 0.2rem solid ${(props) => props.theme.colors.primary};
`;

const QuantityController = () => {
  return (
    <Wrapper>
      <DecrementButton>-</DecrementButton>
      <Quantity>1</Quantity>
      <IncrementButton>+</IncrementButton>
    </Wrapper>
  );
};

export default QuantityController;
