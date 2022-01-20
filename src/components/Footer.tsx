import React from "react";
import footer from "../../content/settings/footer.json";
import { useU } from "@syfxlin/ustyled";

const processVar = (name: string, value?: string) => {
  switch (name) {
    case "year":
      return `${new Date().getFullYear()}`;
  }
  return "";
};

const convert = (str?: string) => {
  if (!str) {
    return null;
  }
  const regexp = /{([^:}]+):?([^}]*)}/g;
  let match;
  do {
    match = regexp.exec(str);
    if (match) {
      str = str.replace(
        match[0],
        processVar(match[1], match.length > 2 ? match[2] : undefined)
      );
    }
  } while (match);
  return str;
};

type Props = {
  date: string;
};

const Footer: React.FC<Props> = ({ date }) => {
  const { css } = useU();
  return (
    <footer
      css={css`
        padding: 4 0;
        border-top: 1px solid gray3;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;

        p,
        a {
          margin: 0.5 0;
          color: gray6;
          font-size: 0.875;
        }
      `}
    >
      <div
        dangerouslySetInnerHTML={{ __html: convert(footer.main.code) || "" }}
      />
      <p>Last updated on: {new Date(date).toLocaleString()}</p>
      <p>
        This page designed and built with by{" "}
        <a href="https://ixk.me">Otstar Lin</a> in 2021
      </p>
    </footer>
  );
};

export default Footer;
