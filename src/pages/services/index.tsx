import Head from "next/head";
import { motion } from "framer-motion";

import { VideoBanner } from "@/components/Banner";
import ServiceDetails from "@/components/Service";
import VisionSection from "@/components/Vision";

import Banner1Image from "@/assets/banner/working.mp4";
import ServicesImage from "@/assets/services/services.jpg";

import S1T1 from "@/assets/services/1/logo-design.jpg";
import S1T2 from "@/assets/services/1/design.jpg";
import S1T3 from "@/assets/services/1/brand.jpg";


export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Path Innovator</title>
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
              OUR <span className="text-blue-600">SERVICES</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="italic text-[1.25rem] lg:text-[2rem] max-w-3xl text-white"
            >
              At Path InNoVaToRs, we offer a comprehensive range of services
              designed to empower businesses and individuals to achieve their
              goals.
            </motion.p>
          </div>
        </div>
      </VideoBanner>
      <VisionSection
        heading="Services"
        className={{
          container: "text-secondary",
          para: "text-secondary",
          rightBody: "my-auto",
          li: {
            container: "!bg-secondary/10",
          },
        }}
        subheading="Driving innovation, delivering excellence, shaping the future."
        description={`Our services are tailored to meet the diverse needs of our clients,
providing them with the tools, knowledge, and support necessary to
succeed in today's dynamic landscape. With a focus on excellence,
integrity, collaboration, customer-centricity, innovation, empathy, and
continuous learning, we deliver exceptional results that drive growth
and success`}
        image={ServicesImage}
        points={[]}
      />
      <ServiceDetails
        className={{ container: "bg-gray-50" }}
        name="Design Services"
        subheading="Professional Design Solutions
Tailored to Your Needs"
        description={`At Path InNoVaToRs, we offer a range of comprehensive design
services to help businesses create impactful visual identities and
communicate effectively with their target audience. Our team of
experienced designers combines creativity, technical expertise, and
focused to the core details in order to deliver exceptional and unique
design solutions`}
        types={[
          {
            title: "Logo Designing",
            description: `Specializing in crafting unique and
memorable logos, our designers work
closely with you to understand your
brand values and create a logo that
effectively represents your identity.
`,image:S1T1
          },
          {
            title: "Website Designing",
            description: `We specialize in creating engaging,
visually appealing websites that reflect
your brand's identity with responsive
design and intuitive navigation.

`,image:S1T2
          },
          {
            title: "Brand Identity",
            description: `We help businesses establish a strong brand
identity with consistent visual elements like color
schemes, typography, and brand guidelines,
creating a cohesive and professional image that
resonates with your target audience.`,
image:S1T3
          },
        ]}
      />
      <ServiceDetails
        name="Training & Education"
        subheading="Empowering Businesses
with Digital Marketing Training
and Education
Tailored to Your Needs"
        description={`At Path InNoVaToRs, we understand the importance of digital
marketing in today's competitive landscape. Our comprehensive
training and education services equip businesses with the knowledge
and skills needed to navigate the digital realm successfully.
`}
        types={[
          {
            title: "Digital Marketing",
            description: `We provide training for students and
businesses, helping them develop
effective digital marketing strategies
tailored to their goals and target
audience. Our expert team offers
guidance on utilizing various digital
channels, including social media,
search engine optimization, content
marketing, and more.

`,
          },
          {
            title: "Spoken English",
            description: `We offer spoken English training for
students and businesses, enabling
them to enhance their communication
skills and fluency. Our dedicated
instructors provide personalized
guidance to help learners achieve their
language proficiency goals.`,
          },
        ]}
      />
      <ServiceDetails
        className={{ container: "bg-blue-100" }}
        name="Consultations"
        subheading="Expert Career Consultations
to Shape Your Professional Path"
        description={`At Path InNoVaToRs, we offer professional career consultations to help
individuals navigate their career paths and make informed decisions.
Our experienced career advisors provide personalized guidance and
support based on industry insights and trends.

`}
        types={[
          {
            title: "Career Assessment",
            description: `We offer assessments &
consultations for informed
career choices & guidance.
`,
          },
          {
            title: `Interview Preparation`,
            description: `Our career advisors provide expert
resume advice and interview
preparation to help individuals stand
out in the job market confidently.
`,
          },
          {
            title: "Professional Development",
            description: `We guide professional development, enhancing
skills, networking, and career advancement
opportunities, helping individuals achieve their
goals with actionable plans.`,
          },
        ]}
      />
      <ServiceDetails
        name="Tourism"
        subheading="Unforgettable Travel Experiences
Tailored to Your Desires"
        description={`At Path InNoVaToRs, we curate exceptional tourism experiences for
individuals and groups, ensuring unforgettable journeys to captivating
destinations. Our tourism services cover a wide range of travel experiences
and destinations. Whether you seek adventure, relaxation, cultural
immersion, or a combination of these, our dedicated team will create an
itinerary that suits your preferences.

`}
        types={[
          {
            title: "Adventure Tourism",
            description: `Embark on thrilling adventures, such as hiking,
trekking, rafting, or wildlife safaris. We design
customized adventure tours that cater to your
adrenaline-seeking spirit and provide thrilling
experiences in breathtaking natural settings.

`,
          },
          {
            title: `Luxury Tourism`,
            description: `Indulge in opulence and luxury with our curated
luxury tourism experiences. We handpick
luxurious accommodations, arrange private
transportation, and curate exclusive activities to
ensure a truly lavish and memorable travel
experience.
`,
          },
        ]}
      />
      <ServiceDetails
      className={{container:"bg-gray-50"}}
  name="Marketing"
  subheading="Accelerate your brand growth with powerful marketing strategies"
  description="Our Marketing Service combines data-driven strategies with creative execution to help your business attract, engage, and retain the right audience. From digital campaigns to performance analytics, we turn your marketing investments into measurable growth."
  types={[
    {
      title: "Social Media Strategy",
      description:
        "Our social media experts craft engaging content calendars, ad campaigns, and community strategies to build loyal audiences.",
    },
    {
      title: "Content Marketing",
      description:
        "We produce high-impact blogs, videos, and brand stories that boost awareness, generate leads, and strengthen authority.",
    },
    {
      title: "Performance Analytics",
      description:
        "Track every click, impression, and conversion with advanced analytics to measure success and refine marketing efforts in real time.",
    },
  ]}
/><ServiceDetails
  name="Recruitments"
  subheading="Connecting exceptional talent with ambitious organizations"
  description="Our Recruitment Service simplifies the hiring process by combining industry expertise with cutting-edge sourcing tools. We identify, evaluate, and deliver candidates who not only fit your job description but also your company culture."
  types={[
    {
      title: "Talent Sourcing",
      description:
        "We proactively search for high-quality candidates using smart databases, social platforms, and professional networks.",
    },
    {
      title: "Executive Search",
      description:
        "Our specialized recruiters help organizations fill senior-level roles through discreet, strategic, and result-oriented searches.",
    },
    {
      title: "Interview & Screening",
      description:
        "Every candidate goes through a rigorous vetting process to ensure skill alignment, experience relevance, and cultural compatibility.",
    },
    {
      title: "Onboarding Support",
      description:
        "We assist with candidate integration and early-stage engagement to guarantee smooth transitions and stronger retention rates.",
    },
  ]}
/>


    </>
  );
}
