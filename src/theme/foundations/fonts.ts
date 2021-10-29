import { CSSProperties, SizesRecord } from "../types";

export type Fonts = {
  mono: CSSProperties["fontFamily"];
  serif: CSSProperties["fontFamily"];
  sans: CSSProperties["fontFamily"];
};

export const fonts: Fonts = {
  mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
  sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
};

export type FontSizes = SizesRecord<CSSProperties["fontSize"]>;

export const fontSizes: FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

export type LineHeights = SizesRecord<CSSProperties["lineHeight"]>;

export const lineHeights: LineHeights = {
  xs: 1,
  sm: 1.25,
  md: 1.5,
  lg: 1.75,
  xl: 2,
};

export type LetterSpacings = SizesRecord<CSSProperties["letterSpacing"]>;

export const letterSpacings: LetterSpacings = {
  xs: "-0.025em",
  sm: "0em",
  md: "0.025em",
  lg: "0.05em",
  xl: "0.1em",
};
