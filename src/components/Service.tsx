"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

import { MainSection } from "./Main";

import PlaceholderImg from "@/assets/home/about.png"; // replace with your image

interface ServiceType {
  title: string;
  description: string;
  image?: StaticImageData;
}

interface ServiceDetailsProps {
  name: string;
  subheading: string;
  description: string;
  types: ServiceType[];
  className?: {
    container?: string;
  }
}

const gradients = [
  "from-pink-500 via-red-400 to-yellow-400",
  "from-indigo-500 via-blue-400 to-cyan-400",
  "from-purple-500 via-pink-500 to-orange-400",
  "from-emerald-500 via-green-400 to-lime-400",
  "from-sky-500 via-blue-400 to-indigo-500",
];

export default function ServiceDetails({
  name,
  subheading,
  description,
  types,
  className
}: ServiceDetailsProps) {
  return (
    <MainSection id={name.split(" ").join("-").toLowerCase()} className={{ container: className?.container }}>
      <div className="w-full">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">{name}</h2>
          <p className="text-lg text-blue-600 font-medium mb-5">{subheading}</p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <h4 className="text-center font-semibold mt-10">Our Services Includes</h4>
        </motion.div>
        {/* Service Types */}
        <div className="flex flex-col flex-wrap md:flex-row justify-center gap-10">
          {types.map((type, index) => {
            const gradient =
              gradients[index % gradients.length]; // pick different gradient each card

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`w-full md:w-[calc(25%_-_28px)] lg:w-[calc(33.33%_-_28px)] shrink-0 relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r ${gradient}`}
              >
                {/* Image Overlay */}
                <div className="absolute w-full h-full">
                  <Image
                    src={type.image || PlaceholderImg}
                    alt={type.title}
                    fill
                    className="object-cover opacity-40"
                  />
                </div>

                {/* Text Section */}
                <div className="relative z-10  h-full inset-0 flex flex-col justify-start p-8 bg-gradient-to-t from-black/65 via-black/25 to-transparent">
                  <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-md">
                    {type.title}
                  </h3>
                  <p className="text-white leading-relaxed text-[0.9rem] drop-shadow-sm mb-2">
                    {type.description}
                  </p>
                  <div className="relative z-10 flex gap-4 text-white mt-auto ml-auto">
                    <Link href="tel:+919885786628">
                      <RiPhoneFill size={20} />
                    </Link>
                    <Link href={`https://wa.me/${9885786628}?text=I want to enquire about ${type.title} service`}>
                      <RiWhatsappFill size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MainSection>
  );
}
