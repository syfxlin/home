import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";
import { css } from "@emotion/react";
import { useTh } from "../theme/hooks/use-th";

type Props = {
  className: string;
};

const CodeBlock: React.FC<Props> = ({ children, className }) => {
  const th = useTh();
  const language = (className || "language-markup").replace("language-", "");
  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language as Language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          css={css`
            padding: ${th.spacing(["minor", 4])};
            overflow-x: auto;
            font-size: ${th.fontSize("sm")};
          `}
        >
          {tokens.map(
            (line, i) =>
              i < tokens.length - 1 && (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/jsx-key
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
          )}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
