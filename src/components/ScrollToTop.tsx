"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // you can replace with any icon
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrolledPercentage = (scrollTop + windowHeight) / docHeight;

    setIsVisible(scrolledPercentage >= 0.6); // show after 60%
  };

  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
}, []);


  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="w-fit fixed bottom-14 right-5 lg:bottom-5 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaArrowUp size={25} />
        </motion.button>
      )}
    </>
  );
}
