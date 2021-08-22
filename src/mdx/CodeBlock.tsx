import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";
import { chakra } from "@chakra-ui/react";

type Props = {
  className: string;
};

const CodeBlock: React.FC<Props> = ({ children, className }) => {
  const language = (className || "language-markup").replace("language-", "");
  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language as Language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <chakra.pre py={2} px={3} className={className} style={style}>
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
        </chakra.pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
