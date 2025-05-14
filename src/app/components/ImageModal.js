"use client"; // Required for interactivity

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function ImageModal({ isOpen, onClose, imageSrc }) {
  // Close modal when pressing ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative rounded-lg max-w-4xl w-full max-h-[80vh]">
        {/* Close button at top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="h-4 w-4" />
        </button>

        {/* Image content */}
        <div className="p-4 pt-12">
          <Image
            src={imageSrc}
            alt="Modal content"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <div className="p-4  flex justify-center">
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSdzlSDaj1Rc59SGCsm8DcUtm8ucrZT8-eOxB79JAJn7vwW0_g/viewform"
              }
              className="px-6 py-2 bg-neon text-black rounded-md hover:bg-neon/40 hover:text-white transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
