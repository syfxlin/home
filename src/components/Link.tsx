import React from "react";
import NLink from "next/link";
import { useUp } from "../theme/hooks/use-breakpoint";
import { useU } from "@syfxlin/ustyled";

type LinkProps = {
  label: string;
  icon: string;
  href: string;
  full?: boolean;
};

const Link: React.FC<LinkProps> = ({ label, icon, href, full }) => {
  const { css } = useU();
  const matches = useUp("md");
  return (
    <NLink href={href}>
      <a
        href={href}
        aria-label={label}
        css={css`
          display: inline-flex;
          appearance: none;
          align-items: center;
          justify-content: center;
          user-select: none;
          position: relative;
          white-space: nowrap;
          vertical-align: middle;
          width: auto;
          line-height: 1.5;
          border-radius: 1.25;
          font-weight: 500;
          transition-property: default;
          transition-duration: 200ms;
          text-decoration: none;
          font-size: 0.9rem;
          border: 1px solid transparent;
          color: dark7, dark4;
          background-color: transparent;
          height: 7.5;
          padding: 0 ${!full || !matches ? 2 : 3.5};

          &:hover {
            background-color: gray1, dark8;
          }

          &:focus {
            box-shadow: 0 0 0 2px primary1;
          }

          img {
            width: 1rem;
            height: 1rem;
          }
        `}
      >
        {!full || !matches ? <img src={icon} alt={label} /> : label}
      </a>
    </NLink>
  );
};

export default Link;
