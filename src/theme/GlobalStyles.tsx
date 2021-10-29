import React from "react";
import { css, Global } from "@emotion/react";
import { useTh } from "./hooks/use-th";

const GlobalStyles: React.FC = () => {
  const th = useTh();
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
          font-family: ${th.font("sans") || "sans-serif"};
          background-color: ${th.color("white", "dark.7")};
          color: ${th.color("black", "dark.0")};
          line-height: ${th.lineHeight("md")};
        }
      `}
    />
  );
};

export default GlobalStyles;
