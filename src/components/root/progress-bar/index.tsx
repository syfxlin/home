import NextTopLoader from "nextjs-toploader";
import * as React from "react";
import * as styles from "./styles.css";

export const ProgressBar: React.FC = () => {
  return <NextTopLoader color={styles.color} height={2} />;
};
