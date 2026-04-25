import NextTopLoader from "nextjs-toploader";
import * as React from "react";

export const ProgressBar: React.FC = () => {
  return <NextTopLoader color="var(--theme-text-primary)" height={2} />;
};
