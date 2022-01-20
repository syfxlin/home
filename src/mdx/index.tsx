/* eslint-disable react-hooks/rules-of-hooks */
import React, { forwardRef } from "react";
import CodeBlock from "./CodeBlock";
import Link from "next/link";
import { useU } from "@syfxlin/ustyled";

export const wrapper: React.FC = (props) => {
  const { css } = useU();
  return (
    <div
      {...props}
      css={css`
        margin-top: 2;
        letter-spacing: 2;
        color: #71717a;
        font-size: 1.125rem;
      `}
    />
  );
};

export const h1: React.FC = (props) => {
  const { css } = useU();
  return (
    <h1
      {...props}
      css={css`
        color: black;
        font-weight: 600;
      `}
    />
  );
};

export const h2: React.FC = (props) => {
  const { css } = useU();
  return (
    <h2
      {...props}
      css={css`
        color: black;
        font-weight: 600;
      `}
    />
  );
};

export const h3: React.FC = (props) => {
  const { css } = useU();
  return (
    <h3
      {...props}
      css={css`
        color: black;
        font-weight: 600;
      `}
    />
  );
};

export const h4: React.FC = (props) => {
  const { css } = useU();
  return (
    <h4
      {...props}
      css={css`
        color: black;
        font-weight: 600;
      `}
    />
  );
};

export const h5: React.FC = (props) => {
  const { css } = useU();
  return (
    <h5
      {...props}
      css={css`
        color: black;
        font-weight: 600;
      `}
    />
  );
};

export const h6: React.FC = (props) => {
  const { css } = useU();
  return (
    <h6
      {...props}
      css={css`
        color: black;
        font-weight: 600;
      `}
    />
  );
};

export const p: React.FC = (props) => {
  const { css } = useU();
  return (
    <p
      {...props}
      css={css`
        margin: 4 0;

        blockquote & {
          margin-top: 0;
        }
      `}
    />
  );
};

export const inlineCode: React.FC = (props) => {
  const { css } = useU();
  return (
    <code
      {...props}
      css={css`
        font-size: 0.875;
        border-radius: 1.25;
        white-space: nowrap;
        color: red7;
        background-color: red0;
        padding: 0.5 1;
      `}
    />
  );
};

export const code = CodeBlock;

export const a = forwardRef<HTMLAnchorElement, JSX.IntrinsicElements["a"]>(
  (props, ref) => {
    const { css } = useU();
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
            color: primary5;
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
              background-color: primary5;
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
  const { css } = useU();
  return (
    <ul
      {...props}
      css={css`
        padding-left: 6;

        > li + li {
          margin-top: 1;
        }
      `}
    />
  );
};

export const ol = ul;
