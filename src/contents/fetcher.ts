import React from "react";
import { reader } from "./reader";
import { AuthorData, FooterData, HeaderData, SeoData } from "./types";

const seo: () => Promise<SeoData> = React.cache(async () => {
  const info = await reader.singletons.seo.read({ resolveLinkedFiles: true });
  if (!info) {
    throw new TypeError("No seo data configured.");
  }
  return {
    language: info.language,
    link: info.link,
    logo: info.logo,
    title: info.title,
    subtitle: info.subtitle,
    description: info.description,
    birthday: new Date(info.birthday as string),
    keywords: info.keywords,
  };
});

const author: () => Promise<AuthorData> = React.cache(async () => {
  const info = await reader.singletons.author.read({ resolveLinkedFiles: true });
  if (!info) {
    throw new TypeError("No author data configured.");
  }
  return {
    fullname: `${info.firstname} ${info.lastname}`,
    username: info.username,
    firstname: info.firstname,
    lastname: info.lastname,
    avatar: info.avatar,
    description: info.description,
  };
});

const header: () => Promise<HeaderData> = React.cache(async () => {
  const info = await reader.singletons.header.read({ resolveLinkedFiles: true });
  if (!info) {
    return { main: [] };
  }
  return info as HeaderData;
});

const footer: () => Promise<FooterData> = React.cache(async () => {
  const info = await reader.singletons.footer.read({ resolveLinkedFiles: true });
  if (!info) {
    return { main: [] };
  }
  return info as FooterData;
});

export const fetcher = {
  seo,
  author,
  header,
  footer,
};
