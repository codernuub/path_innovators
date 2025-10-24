import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";

import Values from "./Values";

import DesignImage from "@/assets/services/design.jpg";
import ConsultImage from "@/assets/services/consultation.jpg";
import TrainingImage from "@/assets/services/education.jpg";
import RImage from "@/assets/services/recritment.jpg";
import TourismImage from "@/assets/services/tourism.jpg";
import MarketingImage from "@/assets/services/marketing.jpg"

export default function OurServices() {
  const services = [
    {
      title: "Design Services",
      subheading: "Professional Design Solutions Tailored to Your Needs",
      href: "/services#design-services",
      image:DesignImage
    },
    {
      title: "Training & Education",
      subheading:
        "Empowering Businesses with Digital Marketing Training and Education",
      href: "/services#training-&-education",
      image:TrainingImage
    },
    {
      title: "Consultations",
      subheading: "Expert Career Consultations to Shape Your Professional Path",
      href: "/services#consultations",
      image:ConsultImage
    },
    {
      title: "Recruitments",
      subheading: "Finding the best talent for your team",
      href: "/services#recruitments",
      image:RImage
    },
    {
      title: "Tourism",
      subheading: "Unforgettable Travel Experiences Tailored to Your Desires",
      href: "/services#tourism",
          image:TourismImage
    },
    {
      title: "Marketing",
      subheading: "Boosting your brand presence online",
      href: "/services#marketing",
          image:MarketingImage
    },
  ];

  return (
    <Values
      className={{ container: "!bg-gray-50" }}
      heading="OUR SERVICES"
      description="We offer a wide range of services to help your business grow. Our team of experts is dedicated to delivering the best solutions tailored to your needs."
    >
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`relative rounded-xl shadow-md hover:shadow-xl transition-all w-full overflow-hidden`}
            >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-full aspect-square object-cover"
            />
            <div className="absolute top-0 left-0 z-[5] w-full h-full bg-gradient-to-b from-black/10 to-black/40"></div>
            <div
              key={idx}
              className="text-left p-6 absolute bottom-0 left-0 z-10"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white mb-4">{service.subheading}</p>
              <Link
                href={service.href}
                className="text-white text-[0.8rem]"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Values>
  );
}
