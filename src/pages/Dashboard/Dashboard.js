import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { getAllOrders } from "../../actions";
import Main from "./Main";
import Chart from "./Chart";

const showPage = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`;

const Wrapper = styled.div`
  width: 86vw;
  display: flex;
  animation: ${showPage} 0.2s ease-in forwards;
`;

const Dashboard = (props) => {
  useEffect(() => {
    props.getAllOrders();
  });
  return (
    <Wrapper>
      <Main />
      <Chart />
    </Wrapper>
  );
};

export default connect(null, { getAllOrders })(Dashboard);
