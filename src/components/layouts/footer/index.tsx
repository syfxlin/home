import * as React from "react";
import { fetcher } from "../../../contents";
import { Divider } from "../../ui/divider";
import { Link } from "../../ui/link";

export const Footer: React.FC = async () => {
  const [seo, author, footer] = await Promise.all([fetcher.seo(), fetcher.author(), fetcher.footer()]);
  return (
    <footer className="max-w-content [&_p]:text-text-description [&_span]:text-text-description relative mx-auto flex w-full flex-col items-center px-0 py-5 text-center [&_a]:underline [&_p]:m-0.5 [&_p]:text-[0.875rem] [&_span]:text-[0.875rem]">
      <p>
        {footer.main.map((item, index) => (
          <React.Fragment key={item.link}>
            {index !== 0 && <Divider orientation="vertical" />}
            <Link unstyled aria-label={item.title} href={item.link}>
              {item.title}
            </Link>
          </React.Fragment>
        ))}
      </p>
      <p>
        {/* eslint-disable-next-line react/purity */}
        Copyright © {seo.birthday.getFullYear()}-{new Date().getFullYear()} {author.fullname}
      </p>
      <p>
        Powered by{" "}
        <Link unstyled href="https://nextjs.org">
          Next.js
        </Link>
        <Divider orientation="vertical" />
        Designed by{" "}
        <Link unstyled href="https://ixk.me">
          Otstar Lin
        </Link>
      </p>
    </footer>
  );
};
