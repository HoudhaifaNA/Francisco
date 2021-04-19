import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import styled from "styled-components";

import History from "./History";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

const Wrapper = styled.nav`
  display: flex;
`;

const App = () => {
  return (
    <Wrapper>
      <Router history={History}>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
