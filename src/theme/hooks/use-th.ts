import { css, Theme, useTheme } from "@emotion/react";
import { BorderWidths, Radii } from "../foundations/borders";
import { Breakpoints } from "../foundations/breakpoints";
import {
  Fonts,
  FontSizes,
  LetterSpacings,
  LineHeights,
} from "../foundations/fonts";
import { Sizes, Spacing } from "../foundations/spacing";
import { TimingFunction } from "../foundations/timingFunction";
import { Shadows } from "../foundations/shadows";

export const useTh = () => {
  const theme = useTheme() as Theme;

  const parseColor = (
    c: string | [string, (value: string) => string]
  ): string => {
    if (typeof c === "string") {
      c = [c, (value) => value];
    }
    const [color, convert] = c;
    const [name, level] = color.split(".");
    if (level === undefined) {
      return theme.colors[name] as string;
    }
    return convert(
      theme.colors[name === "primary" ? theme.primaryColor : name][
        parseInt(level)
      ]
    );
  };

  const parseSize = (size: string | number | undefined) => {
    if (typeof size === "number") {
      return `${size}px`;
    } else {
      return size;
    }
  };

  return {
    theme,
    colorScheme: theme.colorScheme,
    primaryColor: theme.primaryColor,
    color: (
      color: string | [string, (value: string) => string],
      dark?: string | [string, (value: string) => string]
    ) => {
      return theme.colorScheme === "light"
        ? parseColor(color)
        : parseColor(dark ?? color);
    },
    borderWidth: (size: keyof BorderWidths) => {
      return parseSize(theme.borderWidths[size] ?? size);
    },
    radii: (size: keyof Radii) => {
      return parseSize(theme.radii[size] ?? size);
    },
    breakpoint: (size: keyof Breakpoints) => {
      return `${theme.breakpoints[size]}px`;
    },
    font: (font: keyof Fonts) => {
      return theme.fonts[font] ?? font;
    },
    fontSize: (size: keyof FontSizes) => {
      return parseSize(theme.fontSizes[size] ?? size);
    },
    lineHeight: (height: keyof LineHeights) => {
      return theme.lineHeights[height] ?? height;
    },
    letterSpacing: (spacing: keyof LetterSpacings) => {
      return parseSize(theme.letterSpacings[spacing] ?? spacing);
    },
    shadow: (shadow: keyof Shadows) => {
      return theme.shadows[shadow] ?? shadow;
    },
    minor: (size: number) => {
      return parseSize(theme.sizes.minor * size);
    },
    major: (size: number) => {
      return parseSize(theme.sizes.major * size);
    },
    size: (size: [keyof Sizes, number]) => {
      return parseSize(theme.sizes[size[0]] * size[1]);
    },
    spacing: (size: keyof Spacing | [keyof Sizes, number]) => {
      if (size instanceof Array) {
        return parseSize(theme.sizes[size[0]] * size[1]);
      }
      return parseSize(theme.spacing[size] ?? size);
    },
    timingFunction: (fun: keyof TimingFunction) => {
      return theme.timingFunction[fun] ?? fun;
    },
    // responsive
    up: (minWidth: keyof Breakpoints) => {
      return `@media (min-width: ${theme.breakpoints[minWidth]}px)`;
    },
    down: (maxWidth: keyof Breakpoints) => {
      return `@media (max-width: ${theme.breakpoints[maxWidth]}px)`;
    },
    between: (minWidth: keyof Breakpoints, maxWidth: keyof Breakpoints) => {
      return `@media (min-width: ${theme.breakpoints[minWidth]}px) and (max-width: ${theme.breakpoints[maxWidth]}px)`;
    },
    responsive: (values: Partial<Record<keyof Breakpoints | "_", any>>) => {
      return Object.entries(values).map(([bp, style]) => {
        if (bp === "_") {
          return style;
        } else {
          return css`
            @media (min-width: ${theme.breakpoints[bp]}px) {
              ${style}
            }
          `;
        }
      });
    },
  };
};
