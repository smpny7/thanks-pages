import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
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
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap&text=岡山大学祭201は終了しまたくさんのご来場ありがとうざい企画:校友会・実行委員制作電子計算機研究こちら"
            rel="stylesheet"
          />
          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <Script
                id="gtm"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
                  `,
                }}
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
