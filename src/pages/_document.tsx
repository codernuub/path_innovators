import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global defaults */}
        <meta
          name="description"
          content="Driven by passion and excellence, Path InNoVaTors delivers innovative solutions that transform industries and empower businesses worldwide. Explore our cutting-edge services and visionary approach."
        />
        <meta
          name="keywords"
          content="Path InNoVaTors, innovation, technology solutions, business transformation, digital marketing, recruitment, design services, automation, AI solutions"
        />
        <meta
          property="og:title"
          content="Path InNoVaTors | Innovative Solutions for a Smarter Future"
        />
        <meta
          property="og:description"
          content="Empowering businesses with innovation, technology, and creativity. Discover how Path InNoVaTors is transforming industries worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathinnovators.com" />
        <meta
          property="og:image"
          content="https://pathinnovators.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Path InNoVaTors | Innovative Solutions for a Smarter Future"
        />
        <meta
          name="twitter:description"
          content="Driven by passion and excellence, Path InNoVaTors transforms industries and empowers businesses with cutting-edge innovation."
        />
        <meta
          name="twitter:image"
          content="https://pathinnovators.com/logo.png"
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/android-chrome-192x192.png"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
