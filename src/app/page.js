"use client";
import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import ImageModal from "./components/ImageModal";
import Gallery from "./components/Gallery";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open modal when component mounts
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const mediaData = [
    {
      type: "image",
      src: "/main-poster.jpg",
      alt: "main event",
      caption: "Event Details",
    },
      {
      type: "image",
      src: "/general-invitation.jpg",
      alt: "main event",
      caption: "Event Details",
    },
    {
      type: "video",
      src: "/video1.mp4",
      caption: "Introduction Event",
    },
    {
      type: "video",
      src: "/video2.mp4",
      caption: "Introduction Event",
    },
    {
      type: "video",
      src: "/video3.mp4",
      caption: "Introduction Event",
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleClose}
        imageSrc="/main-poster.jpg" // Update this path
      />
      <Navbar />
      <Hero />
      <div>
        <Gallery mediaItems={mediaData} />
      </div>
      <Countdown />
      <Speakers />
      {/* <Schedule /> */}
      <Sponsors />
      <CTA />
      <Leadership />
      <Footer />
    </div>
  );
}
