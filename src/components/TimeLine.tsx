import { motion } from "framer-motion";
import {
  RiBuilding2Line,
  RiFlightTakeoffLine,
  RiComputerLine,
  RiLightbulbFlashLine,
  RiGlobalLine,
} from "react-icons/ri";
import { MainSection } from "./Main";

interface TimeLineItem {
  year: string;
  title?: string;
  text?: string;
  icon?: JSX.Element;
}

interface TimeLineProps {
  timelines: TimeLineItem[];
  heading: string;
}

const colors = [
  { bg: "from-blue-50 to-blue-100", text: "text-blue-800" },
  { bg: "from-indigo-50 to-indigo-100", text: "text-indigo-800" },
  { bg: "from-emerald-50 to-teal-100", text: "text-teal-800" },
  { bg: "from-amber-50 to-yellow-100", text: "text-amber-800" },
  { bg: "from-rose-50 to-pink-100", text: "text-rose-800" },
];


const iconMapper = (title?: string) => {
  if (!title) return <RiBuilding2Line className="w-7 h-7 md:w-9 md:h-9" />;
  const lower = title.toLowerCase();
  if (lower.includes("foundation") || lower.includes("establish"))
    return <RiBuilding2Line className="w-7 h-7 md:w-9 md:h-9" />;
  if (lower.includes("expand") || lower.includes("horizon"))
    return <RiFlightTakeoffLine className="w-7 h-7 md:w-9 md:h-9" />;
  if (lower.includes("digital") || lower.includes("training"))
    return <RiComputerLine className="w-7 h-7 md:w-9 md:h-9" />;
  if (lower.includes("innovation") || lower.includes("integration"))
    return <RiLightbulbFlashLine className="w-7 h-7 md:w-9 md:h-9" />;
  if (lower.includes("global") || lower.includes("future"))
    return <RiGlobalLine className="w-7 h-7 md:w-9 md:h-9" />;
  return <RiBuilding2Line className="w-7 h-7 md:w-9 md:h-9" />;
};

export default function TimeLine({ heading, timelines }: TimeLineProps) {
  return (
    <MainSection className={{ container: "bg-gray-50" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-bold text-center mb-20 text-gray-800 font-montserrat"
      >
        {heading}
      </motion.h2>

      {/* UNIVERSAL TIMELINE (Responsive for both mobile & desktop) */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-blue-100 transform -translate-x-1/2" />

        {timelines.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col sm:flex-row items-center justify-between mt-20 sm:mt-24`}
            >
              {/* Left or Right Content */}
              <div
                className={`relative w-full sm:w-1/2 px-5 sm:px-10 mb-8 sm:mb-0 ${
                  isLeft
                    ? "sm:text-right sm:pr-10 sm:order-1"
                    : "sm:text-left sm:pl-10 sm:order-2"
                }`}
              >
                  
                <div className={`bg-gradient-to-br ${colors[index % colors.length].bg} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}>
              
                  <div className={`text-3xl md:text-4xl font-extrabold mb-2 font-montserrat ${colors[index % colors.length].text}`}>
                    {item.year}
                  </div>
                  <h3 className={`text-lg md:text-xl font-semibold ${colors[index % colors.length].text} mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Icon in Center Line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14  ${colors[index % colors.length].text} rounded-full shadow-lg z-10 bg-gradient-to-br ${colors[index % colors.length].bg}`}>
                {item.icon || iconMapper(item.title)}
              </div>

              {/* Empty spacer to balance layout on alternating sides */}
              <div
                className={`hidden sm:block w-1/2 ${
                  isLeft ? "order-2" : "order-1"
                }`}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </MainSection>
  );
}


/*import {motion} from "framer-motion";

interface TimeLineProps {
  timelines:{
    year:string;
    title?:string;
    text?:string;
  }[];
  heading:string;
}

export default function TimeLine({heading,timelines}:TimeLineProps) {
  return <section className="w-full flex flex- justify-center items-center py-20 bg-gray-50">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-20 text-gray-800 font-montserrat"
        >
          {heading}
        </motion.h2>

        <div className="w-fit mx-auto relative border-l-4 mt-10 border-blue-600">
          {timelines.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-12 ml-6 lg:ml-10 relative max-w-[1200px]"
            >
             
              <div className="absolute -left-[35px] lg:-left-[52.5px] top-2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>

             
              <h3 className="text-2xl font-semibold text-blue-700 font-montserrat">
                {item.year}
              </h3>

              <h3 className="font-medium mt-3">{item.title}</h3>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-3xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
}*/