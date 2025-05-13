import Link from "next/link";
import { FaArrowRight, FaBolt, FaRocket } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="register"
      className="py-16 bg-dark text-white relative overflow-hidden border-t border-neon"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-neon animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-yellow animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <FaRocket className="text-neon text-4xl mr-3 glow" />
          <FaBolt className="text-yellow text-4xl glow" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neon glow-text uppercase tracking-tighter">
          READY TO LEVEL UP?
        </h2>

        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Join the OMYS Million Dollar Summit and{" "}
          <span className="text-yellow">unlock your earning potential</span>.
        </p>

        <Link
          href={"https://forms.gle/DdiWEbQxdySqhk1y5"}
          className="w-fit bg-neon hover:bg-[#8FD800] text-dark font-bold py-4 px-10 rounded-lg flex items-center mx-auto border-2 border-transparent hover:border-yellow transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-1 transition-transform">
            REGISTER NOW
          </span>
          <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-16 h-1 bg-neon"></div>
          <div className="w-16 h-1 bg-yellow"></div>
          <div className="w-16 h-1 bg-orange"></div>
        </div>
      </div>
    </section>
  );
}
