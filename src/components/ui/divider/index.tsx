"use client";
import * as React from "react";

export interface DividerProps {
  orientation: "vertical" | "horizontal";
}

export const Divider: React.FC<DividerProps> = ({ orientation }) => {
  const span = <span className="mx-2 inline-block size-[0.2rem] rounded-full bg-text-paragraph text-center align-middle opacity-70" />;
  return orientation === "vertical" ?
      (
        span
      ) :
      (
        <div>
          {span}
          {span}
          {span}
        </div>
      );
};
