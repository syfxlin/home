import React from "react";
import NLink from "next/link";
import { useTh } from "../theme/hooks/use-th";
import useMedia from "../hooks/use-media";
import { css } from "@emotion/react";

type LinkProps = {
  label: string;
  icon: string;
  href: string;
  full?: boolean;
};

const Link: React.FC<LinkProps> = ({ label, icon, href, full }) => {
  const th = useTh();
  const matches = useMedia(`(min-width: ${th.breakpoint("md")})`);
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
          line-height: ${th.lineHeight("md")};
          border-radius: ${th.radii("sm")};
          font-weight: 500;
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform;
          transition-duration: 200ms;
          text-decoration: none;
          font-size: 0.9rem;
          border: 1px solid transparent;
          color: ${th.color("dark.7", "dark.4")};
          background-color: transparent;
          height: ${th.spacing(["minor", 7.5])};
          padding: 0 ${th.spacing(["minor", !full || !matches ? 2 : 3.5])};

          &:hover {
            background-color: ${th.color("gray.1", "dark.8")};
          }

          &:focus {
            box-shadow: 0 0 0 2px ${th.color("primary.1")};
          }

          img {
            width: ${th.fontSize("md")};
            height: ${th.fontSize("md")};
          }
        `}
      >
        {!full || !matches ? <img src={icon} alt={label} /> : label}
      </a>
    </NLink>
  );
};

export default Link;
