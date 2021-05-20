import React from "react";

import { protectedRoutes } from "../../validators/securityValidaror";
import Main from "./Main";
import Checkout from "./Checkout";

const Home = () => {
  protectedRoutes();
  return (
    <React.Fragment>
      <Main />
      <Checkout />
    </React.Fragment>
  );
};

export default Home;
