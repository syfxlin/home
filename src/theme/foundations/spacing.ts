import { CSSProperties, SizesRecord } from "../types";

export type Sizes = {
  major: number;
  minor: number;
};

export const sizes: Sizes = {
  major: 8,
  minor: 4,
};

export type Spacing = SizesRecord<CSSProperties["margin"]>;

export const spacing: Spacing = {
  xs: sizes.minor * 2,
  sm: sizes.minor * 3,
  md: sizes.minor * 4,
  lg: sizes.minor * 5,
  xl: sizes.minor * 6,
};
