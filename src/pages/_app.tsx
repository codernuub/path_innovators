"use client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Poppins, Raleway, Lexend } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoverContact from "@/components/HoverContact";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.variable} ${poppins.variable} ${raleway.variable} ${lexend.variable}`}
    >
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <ScrollToTop />
      <HoverContact/>
    </main>
  );
}
