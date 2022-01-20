import type { AppProps } from "next/app";
import { theme } from "../theme";
import React from "react";
import GlobalStyles from "../theme/GlobalStyles";
import NormalizeCSS from "../theme/NormalizeCSS";
import { UstyledProvider } from "@syfxlin/ustyled";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UstyledProvider theme={theme}>
      <NormalizeCSS />
      <GlobalStyles />
      <Component {...pageProps} />
    </UstyledProvider>
  );
};

export default App;
