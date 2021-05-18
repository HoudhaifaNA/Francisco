import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Loader from "../../components/Loader";
import DashboardItem from "./DashboardItem";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 4rem;
`;

const DashboardList = (props) => {
  const renderContent = () => {
    if (props.orders.length > 0 && props.orders[0] !== "d") {
      return props.orders.reverse().map((order) => {
        return <DashboardItem key={order.id} order={order} />;
      });
    } else if (props.orders[0] === "d") {
      return <></>;
    } else {
      return <Loader />;
    }
  };
  return <Wrapper>{renderContent()}</Wrapper>;
};

const mapStateToProps = (state) => {
  return { orders: _.values(state.dashboard.orders) };
};

export default connect(mapStateToProps)(DashboardList);
