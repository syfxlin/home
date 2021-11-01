import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllPages } from "../api/page";
import layouts, { Layouts } from "../layouts";
import Header from "../components/Header";
import Head from "next/head";
import { useTh } from "../theme/hooks/use-th";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import seo from "../../content/settings/seo.json";
import author from "../../content/settings/author.json";

export type PageProps = {
  page: {
    title: string;
    slug: string;
    layout: Layouts;
    date: string;
    content: string;
    body: any;
  };
};

const Page: NextPage<PageProps> = ({ page, ...props }) => {
  const th = useTh();
  const Layout = layouts[page.layout];
  return (
    <>
      <Head>
        <title>
          {page.slug === "/" || page.slug === ""
            ? seo.title
            : `${page.title} | ${seo.title}`}
        </title>
      </Head>
      <div
        css={css`
          width: 100%;
          max-width: 100%;
          margin: auto;
          padding: 0 1rem;

          ${th.up("sm")} {
            max-width: ${th.breakpoint("sm")};
          }
        `}
      >
        <Header />
        <main
          css={css`
            padding-top: ${th.spacing(8)};
            padding-bottom: ${th.spacing(8)};
          `}
        >
          <img
            src={author.avatar}
            alt={`${author.firstName} ${author.lastName}`}
            css={css`
              width: 96px;
              height: 96px;
              border-radius: 50%;
            `}
          />
          <h1
            css={css`
              margin-top: ${th.spacing(4)};
              margin-bottom: 0;
              font-weight: 500;
              font-family: "Comic Sans MS", serif;
            `}
          >
            {author.firstName} {author.lastName}
          </h1>
          <p
            css={css`
              margin-top: ${th.spacing(1)};
              color: ${th.color("gray.6")};
            `}
          >
            {author.description}
          </p>
          <Layout {...props} page={page} />
        </main>
        <Footer date={page.date} />
      </div>
    </>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = () => {
  const pages = getAllPages(["slug"]);
  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug.substring(1).split("/"),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pages = getAllPages(["title", "slug", "layout", "date", "content"]);
  const page = pages.find(
    (page) =>
      page.slug ===
      `/${(params?.slug as undefined | string[])?.join("/") ?? ""}`
  ) as Record<string, any>;
  const body = await serialize(page.content);
  return {
    props: {
      page: {
        ...page,
        body,
      },
    },
  };
};
