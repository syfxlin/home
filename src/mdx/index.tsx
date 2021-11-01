/* eslint-disable react-hooks/rules-of-hooks */
import React, { forwardRef } from "react";
import { css } from "@emotion/react";
import { useTh } from "../theme/hooks/use-th";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

export const wrapper: React.FC = (props) => {
  const th = useTh();
  return (
    <div
      {...props}
      css={css`
        margin-top: ${th.spacing(2)};
        letter-spacing: ${th.letterSpacing("lg")};
        color: #71717a;
        font-size: 1.125rem;
      `}
    />
  );
};

export const h1: React.FC = (props) => {
  const th = useTh();
  return (
    <h1
      {...props}
      css={css`
        color: ${th.color("black")};
        font-weight: 600;
      `}
    />
  );
};

export const h2: React.FC = (props) => {
  const th = useTh();
  return (
    <h2
      {...props}
      css={css`
        color: ${th.color("black")};
        font-weight: 600;
      `}
    />
  );
};

export const h3: React.FC = (props) => {
  const th = useTh();
  return (
    <h3
      {...props}
      css={css`
        color: ${th.color("black")};
        font-weight: 600;
      `}
    />
  );
};

export const h4: React.FC = (props) => {
  const th = useTh();
  return (
    <h4
      {...props}
      css={css`
        color: ${th.color("black")};
        font-weight: 600;
      `}
    />
  );
};

export const h5: React.FC = (props) => {
  const th = useTh();
  return (
    <h5
      {...props}
      css={css`
        color: ${th.color("black")};
        font-weight: 600;
      `}
    />
  );
};

export const h6: React.FC = (props) => {
  const th = useTh();
  return (
    <h6
      {...props}
      css={css`
        color: ${th.color("black")};
        font-weight: 600;
      `}
    />
  );
};

export const p: React.FC = (props) => {
  const th = useTh();
  return (
    <p
      {...props}
      css={css`
        margin: ${th.spacing(4)} 0;

        blockquote & {
          margin-top: 0;
        }
      `}
    />
  );
};

export const inlineCode: React.FC = (props) => {
  const th = useTh();
  return (
    <code
      {...props}
      css={css`
        font-size: ${th.fontSize("sm")};
        border-radius: ${th.radius("sm")};
        white-space: nowrap;
        color: ${th.color("red.7")};
        background-color: ${th.color("red.0")};
        padding: ${th.spacing(0.5)} ${th.spacing(1)};
      `}
    />
  );
};

export const code = CodeBlock;

export const a = forwardRef<HTMLAnchorElement, JSX.IntrinsicElements["a"]>(
  (props, ref) => {
    const th = useTh();
    const innerLink = props.href?.startsWith("/");
    const Root = innerLink ? Link : React.Fragment;
    return (
      // @ts-ignore
      <Root {...(innerLink ? { href: props.href } : {})}>
        <a
          {...props}
          ref={ref}
          css={css`
            transition: color 0.5s;
            transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
            color: ${th.color("primary.5")};
            text-decoration: none;

            &::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 30%;
              opacity: 0.2;
              transform: scale3d(0, 1, 1);
              transform-origin: 0 50%;
              transition: transform 0.5s;
              transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
              background-color: ${th.color("primary.5")};
            }

            &:hover {
              text-decoration: none;

              &::before {
                transform: scale3d(1, 1, 1);
              }
            }
          `}
        />
      </Root>
    );
  }
);

export const ul: React.FC = (props) => {
  const th = useTh();
  return (
    <ul
      {...props}
      css={css`
        padding-left: ${th.spacing(6)};

        > li + li {
          margin-top: ${th.spacing(1)};
        }
      `}
    />
  );
};

export const ol = ul;
