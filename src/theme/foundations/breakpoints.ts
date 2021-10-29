import { SizesRecord } from "../types";

export type Breakpoints = SizesRecord<number>;

export const breakpoints: Breakpoints = {
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
};
