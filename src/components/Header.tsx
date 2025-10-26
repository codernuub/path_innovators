"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiMenu2Line,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { PAGE_LINKS, SERVICE_LINKS } from "@/utils/nav";
import LogoImage from "@/assets/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false); // for desktop hover
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false); // for mobile toggle

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        <nav className="hidden lg:flex items-center gap-10 ml-auto relative">
          {PAGE_LINKS.map((item, i) => {
            const isActive = pathname === item.href;

            // If it's the "Services" nav item → add dropdown
            if (item.name.toLowerCase() === "services") {
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={navLinkVariants}
                  className="relative"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 relative font-lexend capitalize text-md transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? "text-blue-700 font-semibold"
                          : "text-white font-semibold"
                        : scrolled
                        ? "text-gray-800 hover:text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    <RiArrowDownSLine
                      className={`transition-transform ${
                        serviceOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </Link>

                  {/* Services dropdown menu */}
                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-8 right-0 bg-white shadow-xl rounded-xl py-3 px-4 w-[230px] flex flex-col gap-2 border border-gray-100"
                      >
                        {SERVICE_LINKS.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

            // Normal links
            return (
              <motion.div
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
                      ? scrolled
                        ? "text-blue-700 font-semibold"
                        : "text-white font-semibold"
                      : scrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            scrolled ? "text-blue-700" : "text-white"
          } text-2xl lg:hidden hover:scale-110 transition-transform duration-300`}
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
            className="lg:hidden bg-gradient-to-b from-blue-900/95 to-blue-700/90 border-t shadow-lg backdrop-blur-md"
          >
            <nav className="flex flex-col items-start p-6 space-y-5">
              {PAGE_LINKS.map((item, i) => {
                const isActive = pathname === item.href;

                // For Services → show expandable submenu
                if (item.name.toLowerCase() === "services") {
                  return (
                    <div key={item.name} className="w-full">
                      <button
                        onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="flex justify-between w-full text-white text-lg font-semibold capitalize"
                      >
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          {item.name}
                        </Link>
                        <RiArrowDownSLine
                          className={`transform transition-transform ${
                            mobileServiceOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServiceOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 flex flex-col gap-3 pl-3 border-l border-white/30"
                          >
                            {SERVICE_LINKS.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsOpen(false)}
                                className="text-blue-100 hover:text-white text-base capitalize transition-all duration-200"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Normal pages
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
                      className={`block text-lg font-semibold capitalize transition-colors duration-300 ${
                        isActive ? "text-blue-300" : "text-white hover:text-blue-300"
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
