"use client";
import * as React from "react";

export interface DividerProps {
  orientation: "vertical" | "horizontal";
}

export const Divider: React.FC<DividerProps> = ({ orientation }) => {
  const span = <span className="bg-text-paragraph mx-2 inline-block size-[0.2rem] rounded-full text-center align-middle opacity-70" />;
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
