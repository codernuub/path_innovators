import Link from "next/link";
import { RiPhoneLine, RiWhatsappLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function HoverContact() {
  return (
    <div className="flex gap-5 bottom-14 left-5 z-40 fixed bottom text-white lg:bottom-5">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-[40px] h-[40px]"
      >
        <Link
          href={`tel:+919885786628`}
          target="_blank"
          className="block p-2 w-fit h-fit aspect-square rounded-full bg-[royalblue]"
        >
          <RiPhoneLine size={24} />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          href={`https://wa.me/${9885786628}`}
          target="_blank"
          className="block p-2 w-fit h-fit aspect-square rounded-full bg-secondary"
        >
          <RiWhatsappLine size={24} />
        </Link>
      </motion.div>
    </div>
  );
}
