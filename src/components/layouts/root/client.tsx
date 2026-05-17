"use client";
import { Caveat } from "next/font/google";
import * as React from "react";
import { COLINE_LANGUAGE } from "../../../env/public";
import { Providers } from "../../../theme/providers";
import { Analytics } from "../../root/analytics";
import { Canvas } from "../../root/canvas";
import { HelloWorld } from "../../root/hello-world";
import { ProgressBar } from "../../root/progress-bar";
import { RootProps } from "./index";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-display" });

export const ClientRoot: React.FC<RootProps> = (props) => {
  return (
    <html lang={COLINE_LANGUAGE} data-theme="light" className={caveat.variable} suppressHydrationWarning>
      <body>
        <Providers>
          {props.children}
          <Canvas />
          <Analytics />
          <ProgressBar />
          <HelloWorld />
        </Providers>
      </body>
    </html>
  );
};
