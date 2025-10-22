import {motion} from "framer-motion";

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
              {/* Circle Marker */}
              <div className="absolute -left-[35px] lg:-left-[52.5px] top-2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>

              {/* Year */}
              <h3 className="text-2xl font-semibold text-blue-700 font-montserrat">
                {item.year}
              </h3>

              {/* Description */}
              <h3 className="font-medium mt-3">{item.title}</h3>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-3xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
}