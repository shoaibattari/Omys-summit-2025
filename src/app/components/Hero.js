"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaBolt } from "react-icons/fa";

 function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative bg-teal text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-4xl  font-semibold text-neon uppercase tracking-widest"
          variants={itemVariants}
        >
          THE OKHAI MEMON YOUTH SERVICES
        </motion.p>

        <motion.p
          className="text-3xl  text-orange font-bold"
          variants={itemVariants}
        >
          PRESENTS
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-bold  text-neon glow-text"
          variants={itemVariants}
        >
          MILLION <span className="text-yellow">DOLLAR</span>
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-bold  text-white"
          variants={itemVariants}
        >
          Summit <span className="text-neon">2025</span>
        </motion.h2>

        <motion.p className="text-3xl  text-neon" variants={itemVariants}>
          Collaborate by:{" "}
          <span className="font-bold text-yellow">SRL COMMERCIEY</span>
        </motion.p>

        <motion.div
          className="my-8 border-t border-neon w-24 mx-auto"
          variants={itemVariants}
        />

        <motion.p
          className="text-2xl md:text-3xl  text-yellow font-bold"
          variants={itemVariants}
        >
          <FaBolt className="inline mr-2 " />
          Learn • Grow • Lead
          <FaBolt className="inline ml-2 " />
        </motion.p>

        <motion.div
          className="my-8 border-t border-neon w-24 mx-auto"
          variants={itemVariants}
        />

        <motion.p
          className="text-lg md:text-2xl max-w-2xl mx-auto 2 text-white/90"
          variants={itemVariants}
        >
          It&apos;s your time to
          <span className="text-neon font-medium">break limits</span>
          <span className="text-yellow font-medium"> spark big ideas</span> and
          <span className="text-orange font-medium"> level up your hustle</span>
        </motion.p>

        <motion.button
          className="bg-neon hover:bg-[#8FD800] text-dark font-bold py-4 px-10 rounded-lg text-lg flex items-center mx-auto border-2 border-transparent hover:border-yellow transition-all group mt-2"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={"https://forms.gle/DdiWEbQxdySqhk1y5"} className="group-hover:translate-x-1 transition-transform" >
            REGISTER NOW
          </Link>
          <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
