import Countdown from "./components/Countdown";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <Countdown />
      <Speakers />
      <Schedule />
      <Sponsors />
      <CTA />
      <Leadership />
      <Footer />
    </div>
  );
}
