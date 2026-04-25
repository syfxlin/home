"use client";
import Tippy, { TippyProps } from "@tippyjs/react";
import NLink, { LinkProps as NLinkProps } from "next/link";
import * as React from "react";
import { AnchorHTMLAttributes, ReactElement } from "react";

function mergeClassName(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & NLinkProps & {
  tooltip?: TippyProps | boolean;
  unstyled?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
};

export function Link({ tooltip, unstyled, href, ...props }: LinkProps) {
  const className = mergeClassName(props.className, !unstyled && "link-animated");
  let element: ReactElement | undefined;
  if (typeof href === "string") {
    if (/^(?:https?:)?\/\/|\.[\da-z]+$/i.test(href)) {
      element = <a target="_blank" rel="nofollow noopener noreferrer" {...props} className={className} href={href} />;
    }
    if (href.startsWith("#")) {
      element = <a {...props} className={className} href={href} />;
    }
  }
  if (!element) {
    element = <NLink {...props} className={className} href={href} />;
  }
  return tooltip ?
      (
        <Tippy animation="shift-away" content={props["aria-label"]} {...(typeof tooltip === "boolean" ? {} : tooltip)}>
          {element}
        </Tippy>
      ) :
      (
        element
      );
}
