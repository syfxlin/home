import React from "react";
import { Global } from "@emotion/react";
import { useU } from "@syfxlin/ustyled";

const GlobalStyles: React.FC = () => {
  const { css } = useU();
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html,
        body {
          font-family: sans;
          background-color: white, dark7;
          color: black, dark0;
          line-height: 1.5;
        }
      `}
    />
  );
};

export default GlobalStyles;
