"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { MainSection } from "./Main";

interface SectionProps {
  title: string;
  paras: string[];
  image?: StaticImageData;
  buttonText?: string;
  link?: string;
  reverse?: boolean; // optional for alternating layout (image left / text right)
}

export function ImageCard({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative inline-block shrink-0"
    >
      {/* Blue background card (consistent ratio) */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 max-w-[470px] max-h-[470px] bg-blue-600 rounded-lg -z-10" />

      {/* Image container */}
      <div className="overflow-hidden rounded-lg shadow-xl w-fit h-fit">
        <Image
          src={image}
          alt={alt}
          className="w-full max-w-[470px] h-auto object-cover"
          priority
        />
      </div>
    </motion.div>
  );
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
    <MainSection>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`w-full flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-24`}
      >
        {/* Image */}
        {image ? <ImageCard image={image} alt={title} /> : null}

        {/* Text Content */}
        <div className="flex-1 text-left font-montserrat">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
            {title}
          </h2>
          {paras.map((text, index) => {
            return (
              <motion.p
                key={index}
                className={`text-base lg:text-lg text-secondary max-w-3xl mx-auto mb-4 lg:mx-0`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {text}
              </motion.p>
            );
          })}
          {link && (
            <Link href={link} className="border-b border-blue-600">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center rounded-full text-base text-blue-600 font-semibold transition-colors"
              >
                {buttonText || "Read More"}{" "}
                <RiArrowRightLine className="ml-2" size={20} />
              </motion.button>
            </Link>
          )}
        </div>
      </motion.section>
    </MainSection>
  );
}
