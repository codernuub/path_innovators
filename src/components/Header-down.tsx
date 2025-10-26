"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import { PAGE_LINKS, SERVICE_LINKS } from "@/utils/nav";

import LogoImage from "@/assets/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-5 lg:px-0 py-3 container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <Image
              src={LogoImage}
              className="w-[180px] lg:w-[220px] hover:scale-105 transition-transform duration-300"
              alt="Path Innovators"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 ml-auto">
          {[...PAGE_LINKS,...SERVICE_LINKS].map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link
                  href={item.href}
                  className={`relative font-lexend capitalize text-md transition-all duration-300 ${
                    isActive
                      ? scrolled? "text-secondary font-semibold":"text-white font-semibold"
                      : scrolled? "text-secondary hover:text-blue-600 hover:scale-105":"text-white hover:text-blue-600 hover:scale-105"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-600 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl lg:hidden hover:scale-110 transition-transform duration-300"
        >
          {isOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-blue-900/90 to-blue-700/90 border-t shadow-lg backdrop-blur-md"
          >
            <nav className="flex flex-col items-center p-6 space-y-6">
              {PAGE_LINKS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-white text-lg font-semibold capitalize transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
