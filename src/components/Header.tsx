import React from "react";
import { useRouter } from "next/router";
import Link from "./Link";
import nav from "../../content/settings/nav.json";
import { useTh } from "../theme/hooks/use-th";
import { css } from "@emotion/react";

const Header: React.FC = () => {
  const router = useRouter();
  const th = useTh();
  return (
    <header
      css={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: ${th.spacing(4)};
        padding-bottom: ${th.spacing(4)};

        > a {
          &:first-child {
            margin-left: 0;
          }

          margin-left: ${th.spacing(0.5)};
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
