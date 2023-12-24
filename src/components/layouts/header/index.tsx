import * as styles from "./styles.css";
import React from "react";
import { fetcher } from "../../../contents";
import { Image } from "../../ui/image";
import { cx } from "@syfxlin/reve";
import { Link } from "../../ui/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export const Header: React.FC = async () => {
  const [author, header] = await Promise.all([fetcher.author(), fetcher.header()]);
  return (
    <header className={styles.header}>
      <Image className={styles.avatar} src={author.avatar} alt="头像" />
      <h1 className={cx(styles.author, caveat.className)}>{author.fullname}</h1>
      <div className={styles.intro}>{author.description}</div>
      <div className={styles.links}>
        {header.main.map((item) => (
          <Link key={item.link} aria-label={item.title} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};
