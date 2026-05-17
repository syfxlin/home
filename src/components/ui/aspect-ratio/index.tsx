"use client";
import { cx, sx } from "@syfxlin/reve";
import * as React from "react";
import { forwardRef, HTMLAttributes } from "react";
import * as styles from "./styles.css";

export type AspectRatioProps = HTMLAttributes<HTMLDivElement> & {
  ratio: number;
};

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(({ ratio: r, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cx(props.className, styles.container)}
      style={sx(props.style, { [styles.ratio]: `${((1 / r) * 100).toFixed(4)}%` })}
      ref={ref}
    />
  );
});
