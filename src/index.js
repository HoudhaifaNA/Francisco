import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "./themes/Theme";
import GlobalStyle from "./themes/GlobalStyle";
import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
