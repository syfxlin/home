import * as React from "react";
import { fetcher } from "../../../contents";
import { Divider } from "../../ui/divider";
import { Link } from "../../ui/link";

export const Footer: React.FC = async () => {
  const [seo, author, footer] = await Promise.all([fetcher.seo(), fetcher.author(), fetcher.footer()]);
  return (
    <footer className="relative mx-auto flex w-full max-w-180 flex-col items-center px-0 py-5 text-center text-[0.875rem] text-(--theme-text-description)">
      <p className="m-px">
        {footer.main.map((item, index) => (
          <React.Fragment key={item.link}>
            {index !== 0 && <Divider orientation="vertical" />}
            <Link unstyled aria-label={item.title} href={item.link} className="text-(--theme-text-description) underline">
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </p>
      {/* eslint-disable-next-line react/purity */}
      <p className="m-px">Copyright © {seo.birthday.getFullYear()}-{new Date().getFullYear()} {author.fullname}</p>
      <p className="m-px">
        Powered by{" "}
        <Link unstyled href="https://nextjs.org" className="text-(--theme-text-description) underline">
          Next.js
        </Link>
        <Divider orientation="vertical" />
        Designed by{" "}
        <Link unstyled href="https://ixk.me" className="text-(--theme-text-description) underline">
          Otstar Lin
        </Link>
      </p>
    </footer>
  );
};
