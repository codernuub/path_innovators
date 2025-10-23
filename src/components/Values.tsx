import { motion } from "framer-motion";

export default function Values({
  heading,
  description,
  values,
}: {
  heading: string;
  description: string;
  values: {
    title: string;
    description: string;
    icon: JSX.Element;
    color: string;
    textColor: string;
  }[];
}) {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-8 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat mb-6"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* FLEX CENTERED CARDS */}
        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col items-center bg-gradient-to-br ${value.color} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all w-full sm:w-[300px] md:w-[360px]`}
            >
              <div
                className={`text-5xl mb-4 ${value.textColor} flex justify-center`}
              >
                {value.icon}
              </div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-2 ${value.textColor} text-center`}
              >
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
