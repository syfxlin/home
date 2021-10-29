import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import ga from "../../content/settings/ga.json";
import seo from "../../content/settings/seo.json";

export default class AppDocument extends Document {
  render(): JSX.Element {
    const linkTags = seo.link_tags && JSON.parse(seo.link_tags.code);
    const metaTags = seo.meta_tags && JSON.parse(seo.meta_tags.code);
    return (
      <Html lang={seo.language}>
        <Head>
          <meta name="description" content={seo.description} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={seo.language} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:site_name" content={seo.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={seo.twitter} />
          <meta name="twitter:creator" content={seo.twitter} />
          {linkTags &&
            linkTags.map((tag: any, index: number) => (
              <link key={`link-${index}`} {...tag} />
            ))}
          {metaTags &&
            metaTags.map((tag: any, index: number) => (
              <meta key={`meta-${index}`} {...tag} />
            ))}
          <script async src="/ga.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
        
              gtag("config", "${ga.token}");
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
