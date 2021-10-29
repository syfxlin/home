import { ThemeTokens } from "./types";
import { colors } from "./foundations/colors";
import { borderWidths, radii } from "./foundations/borders";
import {
  fonts,
  fontSizes,
  letterSpacings,
  lineHeights,
} from "./foundations/fonts";
import { sizes, spacing } from "./foundations/spacing";
import { shadows } from "./foundations/shadows";
import { breakpoints } from "./foundations/breakpoints";
import { timingFunction } from "./foundations/timingFunction";

export const theme: ThemeTokens = {
  primaryColor: "violet",
  colors,
  borderWidths,
  radii,
  breakpoints,
  fonts,
  fontSizes,
  lineHeights,
  letterSpacings,
  shadows,
  sizes,
  spacing,
  timingFunction,
};
