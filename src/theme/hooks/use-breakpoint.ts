import useMediaQuery from "./use-media-query";
import { Breakpoints, useUstyled } from "@syfxlin/ustyled";

export const useUp = (minWidth: keyof Breakpoints) => {
  const [ctx] = useUstyled();
  return useMediaQuery(`(min-width: ${ctx.theme.breakpoints[minWidth]}px)`);
};

export const useDown = (maxWidth: keyof Breakpoints) => {
  const [ctx] = useUstyled();
  return useMediaQuery(`(max-width: ${ctx.theme.breakpoints[maxWidth]}px)`);
};

export const useBetween = (
  minWidth: keyof Breakpoints,
  maxWidth: keyof Breakpoints
) => {
  const [ctx] = useUstyled();
  return useMediaQuery(
    `(min-width: ${ctx.theme.breakpoints[minWidth]}px) and (max-width: ${ctx.theme.breakpoints[maxWidth]}px)`
  );
};
