"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

interface SectionProps {
  title: string;
  paras: string[];
  image?: StaticImageData;
  buttonText?: string;
  link?: string;
  reverse?: boolean; // optional for alternating layout (image left / text right)
}

export default function Section({
  title,
  paras,
  image,
  buttonText,
  link,
  reverse = false,
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`container mx-auto w-full flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-24 px-6 py-16 lg:px-20 xl:p-24`}
    >
      {/* Image */}
      {image ? (
        <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-[450px]"
        >
          <Image
            src={image}
            alt={title}
            className="w-full h-auto shadow-xl object-cover"
          />
        </motion.div>
        <div className="bg-blue-600 w-full h-full absolute -right-4 -bottom-4 sm:-right-8 sm:-bottom-8 -z-10"></div>
        </div>
      ) : null}

      {/* Text Content */}
      <div className="flex-1 text-left font-montserrat">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
          {title}
        </h2>
        {paras.map((text, index) => {
          return (
            <p key={index} className="text-gray-600 leading-relaxed mb-6 text-xl">
              {text}
            </p>
          );
        })}
        {link && (
          <Link href={link} className="border-b border-blue-600">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center rounded-full text-base text-blue-600 font-semibold transition-colors"
            >
              {buttonText || "Read More"} <RiArrowRightLine className="ml-2" size={20}/>
            </motion.button>
          </Link>
        )}
      </div>
    </motion.section>
  );
}
