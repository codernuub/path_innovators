import React from "react";
import { motion } from "framer-motion";
import { RiCheckboxCircleLine } from "react-icons/ri";

import { StaticImageData } from "next/image";

import { ImageCard } from "./About";
import { MainSection } from "./Main";

interface VisionSectionProps {
  image:StaticImageData;
  heading: string;
  subheading?: string;
  description: string;
  points: { title: string; description: string }[];
  className?: {
    container?: string;
    body?: string;
    para?:string;
    rightBody?:string;
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

        <div className={`flex flex-col gap-10 ${className?.rightBody}`}>
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {heading}
          </motion.h2>

          {/* Subheading */}
          <motion.h3
            className="text-xl sm:text-2xl italic font-semibold uppercase text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheading}
          </motion.h3>

          {/* Description */}
          <motion.p
            className={`text-base sm:text-lg text-gray-300 max-w-3xl lg:mx-0 ${className?.para}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      {/* Bullet Points */}
          {points.length ? <motion.ul
            className="flex flex-col flex-wrap sm:flex-row justify-center gap-5 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {points.map((point, index) => (
              <li
                key={index}
                className={`w-full sm:w-[45%] lg:w-[30%] flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-2xl hover:bg-white/20 transition-all ${className?.li?.container}`}
              >
                <RiCheckboxCircleLine className="text-blue-400 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mt-1 mb-2 font-medium text-[0.9rem] sm:text-[1rem]">{point.title}</h4>
                  <p className={`text-gray-200 text-left text-[0.8rem] sm:text-[0.9rem] ${className?.para}`}>{point.description}</p>
                </div>
              </li>
            ))}
          </motion.ul>:null}
    </MainSection>
  );
};

export default VisionSection;
