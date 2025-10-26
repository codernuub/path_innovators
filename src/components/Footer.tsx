"use client";
import { PAGE_LINKS, SERVICE_LINKS } from "@/utils/nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function QuickLinksBlock({
  heading,
  links,
}: {
  heading?: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">{heading}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-[#0b1120] text-gray-300 font-montserrat pt-16 pb-4"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Path <span className="text-blue-500">InNoVaToRs</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            At Path InNoVaToRs, we are driven by passion and excellence to
            deliver innovative solutions that transform industries and empower
            businesses worldwide.
          </p>
        </div>

        <QuickLinksBlock heading="Pages" links={PAGE_LINKS} />
        <QuickLinksBlock heading="Services" links={SERVICE_LINKS} />
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <a
                href="https://maps.google.com/?q=123+Innovation+Street,+Tech+City,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Red hills, Hyderabad, Telangana
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-blue-500 mt-1" />
              <a
                href="tel:+919885786628"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                +91 98857 86628
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-blue-500 mt-1" />
              <a
                href="mailto:smartrj2012@gmail.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                smartrj2012@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-400 text-sm font-[300]">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link href={"/"} className="font-semibold">
            Path InNoVaToRs
          </Link>
          . All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
