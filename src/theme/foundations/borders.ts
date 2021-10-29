import { CSSProperties, SizesRecord } from "../types";

export type BorderWidths = SizesRecord<CSSProperties["borderWidth"]>;

export const borderWidths: BorderWidths = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 8,
};

export type Radii = SizesRecord<CSSProperties["borderRadius"], "half" | "full">;

export const radii: Radii = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  half: "50%",
  full: 9999,
};
