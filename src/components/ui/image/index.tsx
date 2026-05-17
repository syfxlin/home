"use client";
import cx from "clsx";
import mediumZoom, { Zoom } from "medium-zoom";
import NImage from "next/image";
import * as React from "react";
import { HTMLAttributes, Ref, useMemo, useRef } from "react";
import { breakpoints } from "../../../theme/tokens";

function parse(src: string, alt?: string) {
  const exec = /\.(\d+)x(\d+)\.\w+$/.exec(src);
  if (exec) {
    const width = Number.parseInt(exec[1]);
    const height = Number.parseInt(exec[2]);
    return {
      src,
      alt: alt ?? "image",
      fill: false,
      width,
      height,
      sizes: Object.values(breakpoints)
        .map(p => `(max-width: ${p}) 100vw`)
        .join(","),
    };
  } else {
    return {
      src,
      alt: alt ?? "image",
      fill: true,
      width: undefined,
      height: undefined,
      sizes: Object.values(breakpoints)
        .map(p => `(max-width: ${p}) 100vw`)
        .join(","),
    };
  }
}

export type ImageProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt: string;
  zoom?: boolean;
  ref?: Ref<HTMLDivElement>;
};

export function Image({ src, alt, zoom, ref, ...props }: ImageProps) {
  const parsed = useMemo(() => parse(src, alt), [src, alt]);
  const zoomRef = useRef<Zoom | null>(null);
  return (
    <span
      {...props}
      ref={ref}
      className={cx("relative mx-auto flex max-w-full items-center justify-center overflow-hidden transition-[filter] duration-300 [filter:var(--image-filter)]", props.className)}
      style={{ ...props.style, maxWidth: parsed.width !== undefined ? `${parsed.width}px` : "100%" }}
    >
      {parsed.width !== undefined && parsed.height !== undefined && (
        <span
          className="relative inset-0 block"
          style={{ paddingBottom: `${((parsed.height / parsed.width) * 100).toFixed(4)}%` }}
        />
      )}
      {/* prettier-ignore */}
      <NImage
        src={parsed.src}
        alt={parsed.alt}
        fill={parsed.fill}
        sizes={parsed.sizes}
        width={parsed.width}
        height={parsed.height}
        className="size-full object-cover [filter:none] transition-[filter] duration-300 ease-out [&&[loading='lazy'][style*='background-image']]:blur"
        placeholder="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='/%3E%3C/svg%3E"
        ref={(node) => {
          if (zoom) {
            const value = zoomRef.current = zoomRef.current ?? mediumZoom({ margin: 60 });
            if (node) {
              value.attach(node);
            } else {
              value.detach();
            }
          }
        }}
      />
    </span>
  );
}
