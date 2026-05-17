import * as React from "react";
import { PropsWithChildren } from "react";

export type MainProps = PropsWithChildren<object>;

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="relative mx-auto flex min-h-screen w-full max-w-content flex-1 animate-fade-in flex-col items-center justify-center px-8">{children}</main>;
};
