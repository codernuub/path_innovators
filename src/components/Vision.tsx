import React from "react";
import { motion } from "framer-motion";
import { RiCheckboxCircleLine } from "react-icons/ri";

import { StaticImageData } from "next/image";

import { ImageCard } from "./About";
import { MainSection } from "./Main";

interface VisionSectionProps {
  image:StaticImageData;
  heading: string;
  subheading: string;
  description: string;
  points: { title: string; description: string }[];
  className?: {
    container?: string;
    body?: string;
    para?:string;
    li?:{
      container?:string;
    }
  };
}

const VisionSection: React.FC<VisionSectionProps> = ({
  image,
  heading,
  subheading,
  description,
  points,
  className,
}) => {
  return (
    <MainSection className={{ container: className?.container }}>
      <div className={`w-full  flex gap-20 flex-col lg:flex-row ${className?.body}`}>
        <ImageCard image={image} alt={heading} />

        <div className="flex flex-col gap-10 ">
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
            className={`text-base lg:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 ${className?.para}`}
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
                className={`flex items-start gap-3 bg-white/10 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/20 transition-all ${className?.li?.container}`}
              >
                <RiCheckboxCircleLine className="text-blue-400 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mt-1 mb-2">{point.title}</h4>
                  <p className={`text-gray-200 text-left ${className?.para}`}>{point.description}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </MainSection>
  );
};

export default VisionSection;
