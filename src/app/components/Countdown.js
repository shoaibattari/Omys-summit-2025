"use client"
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-05-18T14:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-teal text-center border-y border-neon">
      <div className="flex justify-center items-center mb-6">
        <FaCalendarAlt className="text-neon mr-2 text-xl glow" />
        <h3 className="text-2xl font-bold text-neon glow-text">MAY 18, 2025</h3>
      </div>

      <div className="flex justify-center gap-1 lg:gap-4 px-4">
        {/* Days */}
        <div className="bg-yellow text-dark p-4 rounded-lg border-2 border-neon hover:border-orange transition-all lg:min-w-[100px]">
          <p className="text-3xl font-bold">{timeLeft.days}</p>
          <p>Days</p>
        </div>

        {/* Hours */}
        <div className="bg-orange text-dark p-4 rounded-lg border-2 border-neon hover:border-yellow transition-all lg:min-w-[100px]">
          <p className="text-3xl font-bold">{timeLeft.hours}</p>
          <p>Hours</p>
        </div>

        {/* Minutes */}
        <div className="bg-neon text-dark p-4 rounded-lg border-2 border-yellow hover:border-orange transition-all lg:min-w-[100px]">
          <p className="text-3xl font-bold">{timeLeft.minutes}</p>
          <p>Minutes</p>
        </div>

        {/* Seconds - New Addition */}
        <div className="bg-dark text-neon p-4 rounded-lg border-2 border-orange hover:border-yellow transition-all lg:min-w-[100px] glow-box">
          <p className="text-3xl font-bold">{timeLeft.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <FaClock className="text-neon mr-2 glow" />
        <p className="text-white">
          {format(new Date("2025-05-18T14:00:00"), "EEEE '|' h:mm a")}
        </p>
      </div>
    </section>
  );
}
