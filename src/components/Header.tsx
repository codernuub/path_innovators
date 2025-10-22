"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "services", href: "/#services" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <header className="w-full bg-white backdrop-blur-sm border-[#dfdfdf] fixed top-0 left-0 z-50">
      <div className="w-full mx-auto px-5 py-4  container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/">
            <h1 className="text-xl sm:text-2xl leading-xl sm:leading-[2xl] font-semibold text-gray-800">
              Path <span className="text-blue-600">InNoVaToRs</span>
            </h1>
            <span className="block text-[0.8rem] italic">
              The Key to success
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
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
                  className={`relative font-lexend capitalize transition-colors duration-300 ${
                    isActive
                      ? "text-"
                      : "text-blue hover:text-royalblue"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-royalblue rounded-full"
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
          className="text-gray-700 text-2xl lg:hidden"
        >
          {isOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-sm"
          >
            <nav className="flex flex-col items-start p-4 space-y-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-medium font-lexend capitalize transition-colors duration-300 ${
                        isActive
                          ? "text-royalblue"
                          : "text-gray-700 hover:text-royalblue"
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
