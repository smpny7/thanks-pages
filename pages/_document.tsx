import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { config } from "../lib/config";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta name="description" content={config.description} />
          <meta name="og:image" content={config.ogp} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap"
            rel="stylesheet"
          />
          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
            <>
              <script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
                defer
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
                  `,
                }}
                defer
              />
            </>
          )}
        </Head>
        <body style={{ backgroundColor: config.backgroundColor }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
