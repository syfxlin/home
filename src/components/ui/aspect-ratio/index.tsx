"use client";
import * as React from "react";
import { HTMLAttributes } from "react";

function mergeClassName(...names: Array<string | false | null | undefined>) {
  return names.filter(Boolean).join(" ");
}

export type AspectRatioProps = HTMLAttributes<HTMLDivElement> & {
  ratio: number;
  ref?: React.Ref<HTMLDivElement>;
};

export function AspectRatio({ ratio, ...props }: AspectRatioProps) {
  return (
    <div
      {...props}
      className={mergeClassName(
        "relative max-w-full overflow-hidden before:block before:h-0 before:content-[''] after:table after:clear-both after:content-[''] [&>*:not(style)]:absolute [&>*:not(style)]:inset-0 [&>*:not(style)]:flex [&>*:not(style)]:w-full [&>*:not(style)]:items-center [&>*:not(style)]:justify-center [&>*:not(style)]:overflow-hidden [&>img]:object-cover [&>video]:object-cover",
        props.className,
      )}
      style={{ ...props.style, paddingBottom: `${((1 / ratio) * 100).toFixed(4)}%` }}
    />
  );
}
