import * as React from "react";
import { PropsWithChildren } from "react";

export type MainProps = PropsWithChildren<object>;

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-[45rem] flex-1 flex-col items-center justify-center px-8 animate-[fade-in_0.5s_ease]">
      {children}
    </main>
  );
};
