import Document, { Head, Html, Main, NextScript } from "next/document";
import { header } from "../../config";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src="/ga.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
        
              gtag("config", "${header.ga}");
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
