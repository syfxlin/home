import { CSSProperties } from "../types";

export type TimingFunction = {
  default: CSSProperties["transitionTimingFunction"];
  linear: CSSProperties["transitionTimingFunction"];
  in: CSSProperties["transitionTimingFunction"];
  out: CSSProperties["transitionTimingFunction"];
  inOut: CSSProperties["transitionTimingFunction"];
};

export const timingFunction: TimingFunction = {
  default: "cubic-bezier(0.51, 0.3, 0, 1.21)",
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
};
