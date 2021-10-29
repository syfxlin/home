import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import {
  ColorSchemeConsumer,
  ColorSchemeProvider,
} from "../theme/ColorSchemeProvider";
import React from "react";
import GlobalStyles from "../theme/GlobalStyles";
import NormalizeCSS from "../theme/NormalizeCSS";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ColorSchemeProvider>
      <ColorSchemeConsumer>
        {({ colorScheme }) => (
          <ThemeProvider
            theme={{
              ...theme,
              colorScheme,
            }}
          >
            <NormalizeCSS />
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </ColorSchemeConsumer>
    </ColorSchemeProvider>
  );
};

export default App;
