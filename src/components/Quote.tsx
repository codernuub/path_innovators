"use client";
import { motion } from "framer-motion";

export default function Quote({quote}:{quote:string}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-16 px-6 xl:pb-24 text-center text-gray-800 font-montserrat"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-lg sm:text-2xl lg:text-3xl leading-snug italic">
          {quote}
        </p>
      </div>
    </motion.section>
  );
}
