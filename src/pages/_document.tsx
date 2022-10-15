import NextDocument, { Head, Html, Main, NextScript } from "next/document";
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
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap&text=岡山大学祭201は終了しまたくさんのご来場ありがとうざい企画:校友会・実行委員制作電子計算機研究こちら"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap&text=OkaymUniverstFl201hdToucfgA/SExCPbpR"
            rel="stylesheet"
          />
          {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
            <Script
              id="gtm"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
                  `,
              }}
            />
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
