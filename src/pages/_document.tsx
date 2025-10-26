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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
