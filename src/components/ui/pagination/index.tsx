"use client";
import * as React from "react";
import { t } from "../../../locales";
import { range, resolve } from "../../../utils/vender";
import { LinkButton } from "../button";
import { Iconify } from "../iconify/client";

export interface PaginationProps {
  index: number;
  pages: number;
  links?: string;
  onLink?: (page: number) => string;
  onPage?: (page: number) => void;
}

const activeClassName = "!bg-[var(--theme-text-primary)] !text-[var(--theme-bg-full)]";
const compactClassName = "!gap-1";
const ellipsisClassName = "px-1";
const twoLinkClassName = "!flex-1 !justify-center !gap-1 !px-4 !py-4 !text-[1.2rem] text-center";

export const Pagination: React.FC<PaginationProps> = ({ index, pages, links, onLink, onPage }) => {
  return (
    <section className="my-4 flex items-center justify-center gap-1">
      {index !== 1 && (
        <LinkButton
          className={compactClassName}
          aria-label={t("pagination.prev")}
          href={links !== undefined ? resolve(links, "page", index - 1) : onLink?.(index - 1) ?? "#"}
          onClick={() => onPage?.(index - 1)}
        >
          <Iconify icon="ri:arrow-left-s-line" /> {t("pagination.prev")}
        </LinkButton>
      )}
      {pages >= 1 && (
        <LinkButton
          className={index === 1 ? activeClassName : ""}
          aria-label={t("pagination.curr", 1)}
          href={links !== undefined && links !== null ? resolve(links, "page", 1) : onLink?.(1) ?? "#"}
          onClick={() => onPage?.(1)}
          key="page-1"
        >
          1
        </LinkButton>
      )}
      {index >= 3 && <span className={ellipsisClassName}>...</span>}
      {range(index - 1, index + 1)
        .filter(i => i > 1 && i < pages)
        .map(i => (
          <LinkButton
            className={index === i ? activeClassName : ""}
            aria-label={t("pagination.curr", i)}
            href={links !== undefined && links !== null ? resolve(links, "page", i) : onLink?.(i) ?? "#"}
            onClick={() => onPage?.(i)}
            key={`page-${i}`}
          >
            {i}
          </LinkButton>
        ))}
      {index <= pages - 3 && <span className={ellipsisClassName}>...</span>}
      {pages >= 2 && (
        <LinkButton
          className={index === pages ? activeClassName : ""}
          aria-label={t("pagination.curr", pages)}
          href={links !== undefined && links !== null ? resolve(links, "page", pages) : onLink?.(pages) ?? "#"}
          onClick={() => onPage?.(pages)}
          key={`page-${pages}`}
        >
          {pages}
        </LinkButton>
      )}
      {index !== pages && (
        <LinkButton
          className={compactClassName}
          aria-label={t("pagination.next")}
          href={links !== undefined && links !== null ? resolve(links, "page", index + 1) : onLink?.(index + 1) ?? "#"}
          onClick={() => onPage?.(index + 1)}
        >
          {t("pagination.next")} <Iconify icon="ri:arrow-right-s-line" />
        </LinkButton>
      )}
    </section>
  );
};

export interface TwoPaginationProps {
  prev?: {
    name: string;
    link: string;
  };
  next?: {
    name: string;
    link: string;
  };
}

export const TwoPagination: React.FC<TwoPaginationProps> = (props) => {
  return (
    <section className="my-4 flex gap-2 p-0">
      {props.prev && (
        <LinkButton
          className={twoLinkClassName}
          style={{ justifyContent: "flex-start" }}
          aria-label={t("pagination.prev")}
          href={props.prev.link}
        >
          <Iconify icon="ri:arrow-left-s-line" /> {props.prev.name}
        </LinkButton>
      )}
      {props.next && (
        <LinkButton
          className={twoLinkClassName}
          style={{ justifyContent: "flex-end" }}
          aria-label={t("pagination.next")}
          href={props.next.link}
        >
          {props.next.name} <Iconify icon="ri:arrow-right-s-line" />
        </LinkButton>
      )}
    </section>
  );
};
