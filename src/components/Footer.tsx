import React from "react";
import { a as A } from "../mdx";
import { css } from "@emotion/react";
import { useTh } from "../theme/hooks/use-th";

type Props = {
  date: string;
};

const Footer: React.FC<Props> = ({ date }) => {
  const th = useTh();
  const year = new Date().getFullYear();
  return (
    <footer
      css={css`
        padding: ${th.spacing(["minor", 4])} 0;
        border-top: 1px solid ${th.color("gray.3")};
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        p {
          margin: ${th.spacing(["minor", 1])} 0;
          color: ${th.color("gray.6")};
          font-size: ${th.fontSize("sm")};
        }
      `}
    >
      <p>{year} © Otstar Lin. All rights reserved.</p>
      <p>
        This page designed and built with by{" "}
        <A href="https://ixk.me">Otstar Lin</A> in 2021.
      </p>
      <p>Last updated on: {new Date(date).toLocaleString()}.</p>
    </footer>
  );
};

export default Footer;
