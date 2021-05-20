import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import styled from "styled-components";

import History from "./History";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./pages/Menu/Menu";
import Account from "./pages/Account/Account";
import Modal from "./pages/Menu/Modal";

const Wrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Wrapper>
      <Router history={History}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/accounts" exact component={Account} />
          <Route path="/new" exact component={Modal} />
          <Route path="/edit/:id" exact component={Modal} />
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;
