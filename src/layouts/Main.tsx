import React from "react";
import { PageProps } from "../pages/[[...slug]]";
import * as mdx from "../mdx";
import { MDXRemote } from "next-mdx-remote";

const Main: React.FC<PageProps> = ({ page }) => {
  return <MDXRemote {...page.body} components={mdx} />;
};

export default Main;
