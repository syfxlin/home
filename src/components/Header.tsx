import React from "react";
import { useRouter } from "next/router";
import Link from "./Link";
import nav from "../../content/settings/nav.json";
import { useU } from "@syfxlin/ustyled";

const Header: React.FC = () => {
  const router = useRouter();
  const { css } = useU();
  return (
    <header
      css={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 4 0;

        > a {
          &:first-of-type {
            margin-left: 0;
          }

          margin-left: 0.5;
        }
      `}
    >
      {router.asPath !== "" && router.asPath !== "/" && (
        <Link href="/" label="Home" icon="/img/home.svg" full />
      )}
      {nav.main.map((item) => (
        <Link
          key={item.url}
          label={item.title}
          icon={item.icon}
          href={item.url}
          full={item.full}
        />
      ))}
    </header>
  );
};

export default Header;
