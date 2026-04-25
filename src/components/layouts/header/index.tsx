import { Caveat } from "next/font/google";
import * as React from "react";
import { fetcher } from "../../../contents";
import { t } from "../../../locales";
import { Image } from "../../ui/image";
import { Link } from "../../ui/link";

const caveat = Caveat({ subsets: ["latin"] });

export const Header: React.FC = async () => {
  const [author, header] = await Promise.all([fetcher.author(), fetcher.header()]);
  return (
    <header className="mb-4 flex flex-col items-center">
      <Image
        className="mx-0 h-30 w-30 rounded-full filter-(--theme-image-filter) transition-[filter] duration-300"
        src={author.avatar}
        alt={t("article.avatar")}
      />
      <h1 className={`${caveat.className} mt-2 text-center text-[2.2rem] leading-tight tracking-wider font-bold text-(--theme-text-title)`}>
        {author.fullname}
      </h1>
      <div className="text-center text-[0.9rem]">{author.description}</div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {header.main.map(item => (
          <Link key={item.link} aria-label={item.title} href={item.link} className="inline-flex items-center px-1">
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};
