"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import QuoteBanner from "@/assets/banner/quote-banner.jpg";

export default function Quote({quote}:{quote:string}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full py-24 px-6 xl:py-24 text-center text-white font-montserrat"
    >
      <div className="relative max-w-3xl mx-auto z-20">
        <p className="text-lg sm:text-2xl lg:text-3xl leading-snug italic">
          {quote}
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[5] bg-black/50"></div>
      <Image src={QuoteBanner} className="absolute top-0 left-0 w-full h-full object-cover" alt="quote"/>
    </motion.section>
  );
}
