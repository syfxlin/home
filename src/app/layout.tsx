import { Metadata } from "next";
import * as React from "react";
import { Root } from "../components/layouts/root";
import { metadata } from "../components/layouts/root/metadata";
import "../theme/globals.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/dist/tippy.css";

export const generateMetadata = async (): Promise<Metadata> => metadata();

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}
