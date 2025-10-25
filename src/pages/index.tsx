import { Fragment } from "react";
import Head from "next/head";

import { motion } from "framer-motion";

import { VideoBanner } from "@/components/Banner";
import Quote from "@/components/Quote";
import HistorySection from "@/components/HistorySection";
import Milestones from "@/components/Milestones";
import VisionSection from "@/components/Vision";

import CompanyValues from "@/components/CompanyValues";
import OurValues from "@/components/OurValues";
import OurServices from "@/components/Services";

import Banner1Image from "@/assets/banner/banner.mp4";
import AboutImage from "@/assets/home/about.webp";
import VisionImage from "@/assets/home/vision.webp";
import MissionImage from "@/assets/home/mission.webp"

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home | Path Innovator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoBanner image={Banner1Image} title="">
        <div className="absolute inset-0 z-40 flex justify-start mt-auto h-fit">
        <div className="text-left px-5 py-8 lg:p-24">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[2.2rem] md:text-[2.5rem] uppercase lg:text-[4rem] xl:text-[5rem] font-bold text-white leading-tight drop-shadow-lg"
          >
            Path <span className="text-blue-600">InNoVaTors</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="italic text-[1.25rem] lg:text-[2rem] max-w-3xl text-white"
          >
            Driven by passion and excellence to
            deliver innovative solutions that transform industries and empower
            businesses worldwide.
          </motion.p>
        
        </div>
      </div>
      </VideoBanner>

      <VisionSection
        id="about"
        heading="About Us"
         className={{
          container: "text-secondary",
          para: "text-secondary",
          rightBody:"my-auto",
          li: {
            container: "!bg-secondary/10",
          },
        }}
        subheading="Driving innovation, delivering excellence, shaping the future."
        description={`Path InNoVaToRs is a dynamic company founded on innovation and excellence. We turn bold ideas into impactful solutions that help our clients stand out and achieve remarkable success. Our team of creative thinkers and industry experts delivers cutting-edge strategies, innovative concepts, and top-quality service tailored to your needs. With a focus on growth, creativity, and results, we don’t just meet expectations—we exceed them. At Path InNoVaToRs, our clients are more than partners—they’re our cherished diamonds. Together, we transform industries, push boundaries, and shape the future with innovative solutions.`}
        image={AboutImage}
        points={[]}
      />
      <Quote
        quote="“The Golden Rule For Every 
          Business Man is — Put yourself
         in your Customer's Place.”"
      />
      
      <CompanyValues/>
      <OurServices/>
      <VisionSection
        className={{
          container: "bg-secondary text-white",
          body: "lg:!flex-row-reverse",
        }}
        image={VisionImage}
        heading="Our Vision"
        subheading="EMPOWERING INDIVIDUALS AND BUSINESSES WITH INNOVATIVE SOLUTIONS"
        description="At Path InNoVaToRs, our vision is to be the premier provider of innovative
solutions that cater to the diverse requirements and needs of individuals and
businesses. We are committed to making a positive impact by helping our
clients overcome challenges and achieve remarkable success."
        points={[
          {
            title: "Addressing Diverse Needs",
            description: `We are dedicated to catering to the diverse requirements and needs of individuals and businesses across various industries and sectors.`,
          },
          {
            title: "Positive Impact",
            description: `Our goal is to make a positive impact in the lives of our clients and their stakeholders by providing innovative solutions that drive growth and success.`,
          },
          {
            title: "Go-To Source",
            description: `We aim to become the go-to source for our clients, offering them innovative ideas and solutions that set them apart from the competition.`,
          },
          {
            title: "Understanding Challenges",
            description: `By deeply understanding the challenges faced by our clients, we can develop tailored strategies and solutions to help them overcome obstacles and achieve remarkable results.`,
          },
        ]}
      />
      
      <OurValues/>
      <VisionSection
        className={{
          container: "text-secondary",
          para: "text-secondary",
          li: {
            container: "!bg-secondary/10",
          },
        }}
         image={MissionImage}
        heading="Our Mission"
        subheading="DELIVERING EXCEPTIONAL QUALITY SERVICE AND
EMPOWERING SUCCESS"
        description="Our mission at Path InNoVaToRs is to deliver exceptional quality service and
empower our clients to achieve their goals. We are dedicated to providing
innovative solutions that are responsive to the ever-changing business
landscape. As service providers, we bring a wealth of expertise and a
customer-centric approach to ensure that our clients receive the best
possible service"
        points={[
          {
            title: "Exceptional Quality Service",
            description:
              "We are committed to delivering exceptional quality service that goes above and beyond client expectations.",
          },
          {
            title: "Innovative Solutions",
            description:
              "Our mission is to develop and implement innovative ideas and solutions that address the unique needs and challenges of our clients.",
          },
          {
            title: "Adapting to Change",
            description:
              "We stay responsive to the ever-changing business landscape, continuously adapting our services to meet evolving industry trends and emerging technologies.",
          },
          {
            title: "Customer-Centric Approach",
            description:
              "Our approach is customer-centric, ensuring that our clients receive personalized attention and tailored solutions that align with their objectives.",
          },
          {
            title: "Empowering Success",
            description:
              "We are dedicated to empowering our clients to achieve their goals and reach new heights of success through our expertise and support.",
          },
        ]}
      />
      <HistorySection />
    

      <Quote
        quote="“Success Isn't Just About What You
Accomplish In Your Life,It's About
What You Inspire Others To Do.”"
      />
      <Milestones />
    </Fragment>
  );
}
