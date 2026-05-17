"use client";
import Tippy, { TippyProps } from "@tippyjs/react";
import cx from "clsx";
import NLink, { LinkProps as NLinkProps } from "next/link";
import * as React from "react";
import { AnchorHTMLAttributes, ReactElement, Ref } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & NLinkProps & {
  tooltip?: TippyProps | boolean;
  unstyled?: boolean;
  ref?: Ref<HTMLAnchorElement>;
};

function linkClassName(className?: string, unstyled?: boolean) {
  return cx(
    !unstyled &&
    "text-text-primary no-underline transition-[background-size,color,background-color] duration-300 [background-image:linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,var(--color-background-focus),var(--color-background-focus))] [background-position:100%_100%,0_100%] [background-repeat:no-repeat] [background-size:100%_40%,0_40%] hover:[background-size:0_40%,100%_40%] focus:[background-size:0_40%,100%_40%] active:[background-size:0_40%,100%_40%] [&.active]:[background-size:0_40%,100%_40%]",
    className,
  );
}

export function Link({ tooltip, unstyled, href, ref, ...props }: LinkProps) {
  let element: ReactElement | undefined;
  if (typeof href === "string") {
    if (/^(?:https?:)?\/\/|\.[\da-z]+$/i.test(href)) {
      element = (
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          {...props}
          className={linkClassName(props.className, unstyled)}
          href={href}
          ref={ref}
        />
      );
    }
    if (href.startsWith("#")) {
      element = (
        <a
          {...props}
          className={linkClassName(props.className, unstyled)}
          href={href}
          ref={ref}
        />
      );
    }
  }
  if (!element) {
    element = (
      <NLink
        {...props}
        className={linkClassName(props.className, unstyled)}
        href={href}
        ref={ref}
      />
    );
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
