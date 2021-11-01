import type { AppProps } from "next/app";
import { theme } from "../theme";
import React from "react";
import GlobalStyles from "../theme/GlobalStyles";
import NormalizeCSS from "../theme/NormalizeCSS";
import EmotionSystemProvider from "../theme/EmotionSystemProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <EmotionSystemProvider theme={theme}>
      <NormalizeCSS />
      <GlobalStyles />
      <Component {...pageProps} />
    </EmotionSystemProvider>
  );
};

export default App;
