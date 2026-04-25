"use client";
import Tippy, { TippyProps } from "@tippyjs/react";
import Link, { LinkProps } from "next/link";
import * as React from "react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

function mergeClassName(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

const defaultClassName =
  "inline-flex cursor-pointer items-center justify-center gap-1 rounded bg-transparent px-2.5 py-2 text-center align-middle text-base leading-none text-[var(--theme-text-primary)] no-underline outline-none transition-[color,background-color,box-shadow] duration-300 hover:bg-[var(--theme-bg-hover)] [&.active]:bg-[var(--theme-bg-hover)] focus:shadow-[0_0_0_2px_var(--theme-bg-focus)] active:shadow-[0_0_0_2px_var(--theme-bg-focus)] [&>.iconify]:mx-[-0.1rem] [&>.iconify]:h-[1.1rem] [&>.iconify]:w-[1.1rem]";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tooltip?: TippyProps | boolean;
  unstyled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
};
export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
  tooltip?: TippyProps | boolean;
  unstyled?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
};

export function Button({ tooltip, unstyled, ...props }: ButtonProps) {
  const element = <button {...props} className={mergeClassName(props.className, !unstyled && defaultClassName)} />;
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

export function LinkButton({ tooltip, unstyled, href, ...props }: LinkButtonProps) {
  if (typeof href === "string" && /^(?:https?:)?\/\/|^#|\.[\da-z]+$/i.test(href)) {
    const element = <a {...props} className={mergeClassName(props.className, !unstyled && defaultClassName)} href={href} />;
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

  const element = <Link {...props} className={mergeClassName(props.className, !unstyled && defaultClassName)} href={href} />;
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
