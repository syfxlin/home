import React, { ComponentType, forwardRef, ReactNode } from "react";
import {
  Alert,
  Box,
  chakra,
  Code,
  Kbd,
  Link,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { MDXProviderComponents } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";

const components: MDXProviderComponents & {
  [tag: string]: ReactNode | ComponentType<any>;
} = {
  wrapper: (props) => <chakra.div {...props} apply="mdx.wrapper" />,
  h1: (props) => <chakra.h1 {...props} apply="mdx.h1" />,
  h2: (props) => <chakra.h2 {...props} apply="mdx.h2" />,
  h3: (props) => <chakra.h3 {...props} apply="mdx.h3" />,
  h4: (props) => <chakra.h4 {...props} apply="mdx.h4" />,
  h5: (props) => <chakra.h5 {...props} apply="mdx.h5" />,
  h6: (props) => <chakra.h6 {...props} apply="mdx.h6" />,
  p: (props) => <chakra.p {...props} apply="mdx.p" />,
  inlineCode: (props) => <Code {...props} apply="mdx.code" />,
  hr: (props) => <chakra.hr {...props} apply="mdx.hr" />,
  strong: (props) => <chakra.strong {...props} apply="mdx.strong" />,
  pre: (props) => <chakra.div {...props} apply="mdx.pre" />,
  kbd: (props) => <Kbd {...props} apply="mdx.kbd" />,
  br: (props) => <Box as="br" {...props} apply="mdx.br" />,
  code: CodeBlock,
  table: (props) => <Table {...props} apply="mdx.table" />,
  th: (props) => <Th {...props} apply="mdx.th" />,
  tr: (props) => <Tr {...props} apply="mdx.tr" />,
  td: (props) => <Td {...props} apply="mdx.td" />,
  a: forwardRef(({ children, href }: any, ref: any) => {
    const innerLink = href.startsWith("/");
    const Root = innerLink ? Link : React.Fragment;
    return (
      // @ts-ignore
      <Root {...(innerLink ? { href } : {})}>
        <chakra.a href={href} ref={ref} apply="mdx.a">
          {children}
        </chakra.a>
      </Root>
    );
  }),
  ul: (props) => <chakra.ul {...props} apply="mdx.ul" />,
  ol: (props) => <chakra.ol {...props} apply="mdx.ol" />,
  li: (props) => <chakra.li {...props} apply="mdx.li" />,
  img: (props) => <chakra.img {...props} apply="mdx.img" />,
  blockquote: (props) => (
    <Alert
      as="blockquote"
      variant="left-accent"
      {...props}
      apply="mdx.blockquote"
    />
  ),
};

export default components;
