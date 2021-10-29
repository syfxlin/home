import { Colors } from "./foundations/colors";
import { BorderWidths, Radii } from "./foundations/borders";
import { Breakpoints } from "./foundations/breakpoints";
import {
  Fonts,
  FontSizes,
  LetterSpacings,
  LineHeights,
} from "./foundations/fonts";
import { Shadows } from "./foundations/shadows";
import { Sizes, Spacing } from "./foundations/spacing";
import { TimingFunction } from "./foundations/timingFunction";
import { Properties } from "csstype";

export type CSSProperties = Properties<string | number>;

export type SizesKey<K extends string = string> =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | K
  | string;

export type SizesRecord<T, K extends string = string> = {
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
} & {
  [P in K]: T;
} & {
  [key: string]: T;
};

export type ThemeTokens = {
  primaryColor: keyof Colors;
  colors: Colors;
  borderWidths: BorderWidths;
  radii: Radii;
  breakpoints: Breakpoints;
  fonts: Fonts;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
  letterSpacings: LetterSpacings;
  shadows: Shadows;
  sizes: Sizes;
  spacing: Spacing;
  timingFunction: TimingFunction;
};

declare module "@emotion/react" {
  export interface Theme extends ThemeTokens {
    colorScheme: "light" | "dark";
  }
}
