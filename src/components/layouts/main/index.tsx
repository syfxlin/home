import * as React from "react";
import { PropsWithChildren } from "react";

export type MainProps = PropsWithChildren<object>;

export const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="max-w-content animate-fade-in relative mx-auto flex min-h-screen w-full flex-1 flex-col items-center justify-center px-8">{children}</main>;
};
