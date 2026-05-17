import cx from "clsx";
import { Caveat } from "next/font/google";
import * as React from "react";
import { fetcher } from "../../../contents";
import { t } from "../../../locales";
import { Image } from "../../ui/image";
import { Link } from "../../ui/link";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-display" });

export const Header: React.FC = async () => {
  const [author, header] = await Promise.all([fetcher.author(), fetcher.header()]);
  return (
    <header className="mb-4 flex flex-col items-center">
      <Image className="h-30 w-30 rounded-full filter-(--image-filter) transition-[filter] duration-300" src={author.avatar} alt={t("article.avatar")} />
      <h1 className={cx(caveat.variable, "mt-2 font-display text-[2.2rem] font-bold leading-tight tracking-wider text-text-title")}>{author.fullname}</h1>
      <div className="text-center text-[0.9rem]">{author.description}</div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 [&_a]:inline-flex [&_a]:items-center [&_a]:px-1">
        {header.main.map(item => (
          <Link key={item.link} aria-label={item.title} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};
