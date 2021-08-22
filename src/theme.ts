import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/styled-system";

const mdx: Record<string, SystemStyleObject> = {
  wrapper: {
    letterSpacing: "wider",
    color: "#71717A",
    fontSize: "lg",
  },
  h1: {
    mt: 4,
    mb: 2,
    fontSize: "2xl",
  },
  h2: {
    mt: 4,
    mb: 2,
    fontSize: "xl",
  },
  h3: {
    mt: 4,
    mb: 2,
    fontSize: "lg",
  },
  h4: {
    mt: 4,
    mb: 2,
    fontSize: "md",
  },
  h5: {
    mt: 4,
    mb: 2,
    fontSize: "sm",
  },
  h6: {
    mt: 4,
    mb: 2,
    fontSize: "xs",
  },
  p: {
    mt: 3,
    "blockquote &": {
      mt: 0,
    },
  },
  code: {
    fontSize: "sm",
    rounded: "md",
    py: "0.15rem",
    paddingInlineStart: "0.4rem",
    paddingInlineEnd: "0.4rem",
    whiteSpace: "nowrap",
  },
  hr: {
    my: 4,
  },
  strong: {
    fontWeight: "semibold",
  },
  pre: {
    my: 4,
    rounded: "md",
    overflow: "hidden",
  },
  kbd: {},
  br: {},
  table: {
    borderWidth: "1px",
    my: 4,
  },
  th: {},
  tr: {},
  td: {},
  a: {
    transition: "color 0.5s",
    transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
    position: "relative",
    color: "#6265fe",
    "&:hover": {
      textDecoration: "none",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      zIndex: "-1",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "30%",
      opacity: 0.2,
      transform: "scale3d(0, 1, 1)",
      transformOrigin: "0% 50%",
      transition: "transform 0.5s",
      transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
      bg: "#6265fe",
    },
    "&:hover::before": {
      transform: "scale3d(1, 1, 1)",
    },
  },
  ul: {
    mt: 4,
    ml: 6,
    "blockquote &": {
      mt: 2,
    },
    "& > li + li": {
      mt: 1,
    },
    "& ul, ol": {
      mt: 2,
      ml: 4,
    },
  },
  ol: {
    mt: 4,
    ml: 6,
    "blockquote &": {
      mt: 2,
    },
    "& > li + li": {
      mt: 1,
    },
    "& ul, ol": {
      mt: 2,
      ml: 4,
    },
  },
  li: {},
  img: {
    my: 4,
  },
  blockquote: {
    px: 4,
    py: 4,
    my: 4,
  },
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "blackAlpha" }),
  {
    mdx,
  }
);
