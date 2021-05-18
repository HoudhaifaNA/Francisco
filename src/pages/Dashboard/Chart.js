import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Doughnut, defaults } from "react-chartjs-2";

const Wrapper = styled.div`
  width: 22vw;
  height: 100vh;
  padding: 2rem 0;
  border-left: 0.1rem solid rgba(0, 0, 0, 0.15);
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
`;
const TotalText = styled.h1`
  position: absolute;
  left: 50%;
  top: 18rem;
  transform: translate(-50%, -50%);
`;

const Chart = (props) => {
  let total = props.orders.map((or) => or.total);
  total = total.reduce((a, b) => a + b, 0);
  total = !isNaN(total) ? total : "00";
  let items = props.orders.map((or) => or.items);
  let categoriesAndQuantity = [];

  let categories = [];
  let quantities = [];
  items = items.map((it) => {
    return _.values(it).map((x) => {
      categoriesAndQuantity = [
        ...categoriesAndQuantity,
        { name: x.category, value: x.quantity },
      ];
      const res = Array.from(
        categoriesAndQuantity.reduce(
          (m, { name, value }) => m.set(name, (m.get(name) || 0) + value),
          new Map()
        ),
        ([name, value]) => ({ name, value })
      );
      categories = res.map((cat) => cat.name);
      quantities = res.map((cat) => cat.value);
    });
  });

  const state = {
    labels: categories,
    datasets: [
      {
        backgroundColor: [
          "#1abc9c",
          "#ff7979",
          "#30336b",
          "#dff9fb",
          "#6800B4",
          "#2bcbba",
          "#fc5c65",
          "#fed330",
        ],
        hoverBackgroundColor: [
          "#22a6b3",
          "#eb4d4b",
          "#130f40",
          "#c7ecee",
          "#35014F",
          "#0fb9b1",
          "#eb3b5a",
          "#f7b731",
        ],
        data: quantities,
      },
    ],
  };

  const options = {
    cutout: 75,
    animation: {
      duration: 0,
    },
    plugins: {
      title: {
        display: true,
        text: `Revenus d'aujourd'hui`,
        fontSize: 25,
        padding: 20,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontSize: 22,
          textTransform: "Capitalize",
        },
      },
      tooltip: {
        textTransform: "Uppercase",
      },
    },
  };

  return (
    <Wrapper>
      <ChartContainer>
        <TotalText>{total}.00</TotalText>
        <Doughnut data={state} height={100} width={100} options={options} />
      </ChartContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { orders: _.values(state.dashboard.orders) };
};

export default connect(mapStateToProps)(Chart);
