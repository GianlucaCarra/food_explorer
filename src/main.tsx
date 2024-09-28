import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/global";
import theme from "./style/theme";
import { AuthProvider } from "./hooks/auth";

import Routes from "./routes";
import { OrderProvider } from "./hooks/OrderContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <OrderProvider>
          <Routes />
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)