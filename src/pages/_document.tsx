import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href={`https://fonts.googleapis.com`} />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link
            href={`https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`}
            rel="stylesheet"
          />
          <link
            href={`https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@400;500;700&display=swap`}
            rel="stylesheet"
          />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:site_name" content="Timóteo Piano | Front-End & Full-Stack Developer" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Timóteo Piano | Front-End & Full-Stack Developer" />
          <meta
            property="og:description"
            content="Timóteo Reinheimer Piano is a Web Developer who builds accessible, inclusive products and digital experiences for the web."
          />
          
          <meta property="og:url" content="https://timoteopiano.dev/" />
          <meta property="og:image" content="images/og.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
