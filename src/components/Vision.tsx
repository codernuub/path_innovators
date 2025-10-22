import React from "react";
import { motion } from "framer-motion";
import {} from "react-icons";
import { RiCheckboxCircleLine } from "react-icons/ri";

interface VisionSectionProps {
  heading: string;
  subheading: string;
  description: string;
  points: string[];
}

const VisionSection: React.FC<VisionSectionProps> = ({
  heading,
  subheading,
  description,
  points,
}) => {
  return (
    <section className="w-full py-16 px-5 flex justify-center bg-[#0E1A2B] text-white font-montserrat">
      <div className="w-full max-w-[1600px] flex flex-col gap-10 text-center lg:text-left">
        {/* Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {heading}
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          className="text-xl lg:text-2xl italic font-semibold text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subheading}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-base lg:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          className="grid md:grid-cols-2 gap-5 mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/20 transition-all"
            >
              <RiCheckboxCircleLine className="text-blue-400 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-200 text-left">{point}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default VisionSection;
