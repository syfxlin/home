"use client";
import Tippy, { TippyProps } from "@tippyjs/react";
import cx from "clsx";
import Link, { LinkProps } from "next/link";
import * as React from "react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, Ref } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tooltip?: TippyProps | boolean;
  unstyled?: boolean;
  ref?: Ref<HTMLButtonElement>;
};
export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
  tooltip?: TippyProps | boolean;
  unstyled?: boolean;
  ref?: Ref<HTMLAnchorElement>;
};

function buttonClassName(className?: string, unstyled?: boolean) {
  return cx(
    !unstyled &&
    "inline-flex items-center justify-center gap-1 rounded bg-transparent px-2 py-2 text-center align-middle text-base leading-none text-text-primary no-underline outline-none transition-[color,background-color,box-shadow] duration-300 hover:bg-background-hover focus:shadow-focus active:shadow-focus [&>.iconify]:mx-[-0.1rem] [&>.iconify]:h-[1.1rem] [&>.iconify]:w-[1.1rem] [&.active]:bg-background-hover",
    className,
  );
}

export function Button({ tooltip, unstyled, ref, ...props }: ButtonProps) {
  const element = (
    <button
      {...props}
      className={buttonClassName(props.className, unstyled)}
      ref={ref}
    />
  );
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

export function LinkButton({ tooltip, unstyled, href, ref, ...props }: LinkButtonProps) {
  if (typeof href === "string" && /^(?:https?:)?\/\/|^#|\.[\da-z]+$/i.test(href)) {
    const element = (
      <a
        {...props}
        className={buttonClassName(props.className, unstyled)}
        href={href}
        ref={ref}
      />
    );
    return tooltip ?
        (
          <Tippy animation="shift-away" content={props["aria-label"]} {...(typeof tooltip === "boolean" ? {} : tooltip)}>
            {element}
          </Tippy>
        ) :
        (
          element
        );
  } else {
    const element = (
      <Link
        {...props}
        className={buttonClassName(props.className, unstyled)}
        href={href}
        ref={ref}
      />
    );
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
}
