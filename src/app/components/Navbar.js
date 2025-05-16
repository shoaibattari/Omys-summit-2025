"use client";
import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaRegCalendarAlt,
  FaBars,
  FaTimes,
  FaUsers,
  FaIdCard,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-dark/90 backdrop-blur-sm" : "py-4 bg-dark"
      } border-b border-neon`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-neon hover:text-yellow transition-colors">
            <span className="glow-text">OMYS</span>{" "}
            <span className="text-yellow">Summit</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#schedule"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <FaRegCalendarAlt className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">SCHEDULE</span>
            </a>
            <a
              href="https://maps.app.goo.gl/VuwcmgJ93QWNp8TN9"
              target="_blank"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <HiOutlineLocationMarker className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">VENUE</span>
            </a>
            <a
              href="https://chat.whatsapp.com/KhMDP0GnCWEA1IuioiVvil"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <FaUsers className="mr-2 group-hover:scale-110 transition-transform" />

              <span className="font-medium">COMMUNITY</span>
            </a>
            <a
              href="https://www.canva.com/design/DAGnanxYAV8/d9WdNtmKjV3zxL73yRUVDw/edit?utm_content=DAGnanxYAV8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <CgProfile className="mr-2 group-hover:scale-110 transition-transform" />

              <span className="font-medium">DP (Digital Profile)</span>
            </a>
            <a
              href="/EntryPass.jpg"
              download="EntryPass.jpg"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <FaIdCard  className="mr-2 group-hover:scale-110 transition-transform" />

              <span className="font-medium">Entry Pass</span>
            </a>
            <div className="flex space-x-5 ml-4">
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-xl text-neon hover:text-yellow cursor-pointer transition-colors hover:scale-125" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-xl text-neon hover:text-yellow cursor-pointer transition-colors hover:scale-125" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-xl text-neon hover:text-yellow cursor-pointer transition-colors hover:scale-125" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <FaTimes className="text-2xl hover:text-yellow transition-colors" />
            ) : (
              <FaBars className="text-2xl hover:text-yellow transition-colors" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} pt-4 pb-6`}>
          <div className="flex flex-col h-screen mt-12 space-y-4">
            <a
              href="#schedule"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <FaRegCalendarAlt className="mr-2 group-hover:scale-110 transition-transform text-2xl" />
              <span className="font-medium text-2xl">SCHEDULE</span>
            </a>
            <a
              href="https://maps.app.goo.gl/VuwcmgJ93QWNp8TN9"
              target="_blank"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <HiOutlineLocationMarker className="mr-2 group-hover:scale-110 transition-transform text-2xl" />
              <span className="font-medium text-2xl">VENUE</span>
            </a>
            <a
              href="https://chat.whatsapp.com/KhMDP0GnCWEA1IuioiVvil"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <FaUsers className="mr-2 group-hover:scale-110 transition-transform text-2xl" />

              <span className="font-medium text-2xl">COMMUNITY</span>
            </a>
            <a
              href="https://www.canva.com/design/DAGnanxYAV8/d9WdNtmKjV3zxL73yRUVDw/edit?utm_content=DAGnanxYAV8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <CgProfile className="mr-2 group-hover:scale-110 transition-transform text-2xl" />

              <span className="font-medium text-2xl">DP (Digital Profile)</span>
            </a>
            <a
              href="/EntryPass.jpg"
              download="EntryPass.jpg"
              className="flex items-center text-orange hover:text-neon group transition-colors"
            >
              <FaIdCard className="mr-2 group-hover:scale-110 transition-transform text-2xl" />

              <span className="font-medium text-2xl">Entry Pass</span>
            </a>

            <div className="flex justify-center space-x-6 pt-12">
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-2xl text-neon hover:text-yellow cursor-pointer transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl text-neon hover:text-yellow cursor-pointer transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl text-neon hover:text-yellow cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
