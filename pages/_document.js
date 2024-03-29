import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Kotta&display=swap"
        rel="stylesheet"
      ></link>
      <title>BitTokenized: Shaping the Tokenized Revolution</title>
      <meta
        name="description"
        content="BitTokenized: Shaping the Tokenized Revolution, One Token At a Time!"
      />
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
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#39FF14" />{" "}
      <meta name="theme-color" content="#39FF14" />{" "}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
