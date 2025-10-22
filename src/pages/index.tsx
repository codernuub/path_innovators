import { Fragment } from "react";
import Head from "next/head";

import { motion } from "framer-motion";

import Banner from "@/components/Banner";
import Section from "@/components/Section";

import Banner1Image from "@/assets/banner-1.jpg";
import AboutImage from "@/assets/about.png";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home | Kisan Hit Nursery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner image={Banner1Image} title="Kisan Hit Nursery">
        <div className="w-fit text-center m-auto p-5 lg:p-24 text-white">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[2rem] lg:text-[4rem] font-bold leading-[104%]"
          >
            Path InNoVaTors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="font-[600] italic text-[1rem] lg:text-[2rem] leading-[104%] mt-1"
          >
            Where innovation meets excellence
          </motion.p>
        </div>
      </Banner>
      <Section
        title="About"
        paras={[
          `Path InNoVaToRs is a dynamic company
that was founded in June 2019. With a
passion for innovation and a drive for
excellence, we are committed to
transforming industries and pushing the
boundaries of what is possible.
`,
`At Path InNoVaToRs, we thrive on
delivering unique concepts, innovative
ideas, and outstanding quality service.`,
]}
        image={AboutImage} // replace with your image path
        buttonText="Read More"
        link="/about"
      />
    </Fragment>
  );
}
