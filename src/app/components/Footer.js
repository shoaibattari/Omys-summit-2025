import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <FaTwitter className="text-xl hover:text-secondary cursor-pointer" />
          <FaLinkedin className="text-xl hover:text-secondary cursor-pointer" />
          <FaInstagram className="text-xl hover:text-secondary cursor-pointer" />
          <FaFacebook className="text-xl hover:text-secondary cursor-pointer" />
        </div>
        <p className="text-lg mb-4">
          THE OKHAI MEMON YOUTH SERVICES
        </p>
        <p className="text-black">
          © 2025 OMYS Million Dollar Summit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}