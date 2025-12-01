"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Your content
const slides = [
  {
    id: "about",
    label: "ABOUT",
    title: "Abhinav Karna",
    body: "20-year-old web developer from Nepal, USA Exchange Program Alumni, EIMUN Delegate, and Digital Marketer for brands like MG Steel and Rukmani International.I help people and businesses simplify technology and grow through digital marketing, cloud, and emerging tech.",
    tag: "About me",
    gradient: "from-emerald-500/40 via-cyan-500/20 to-transparent",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    title: "Real-world Work & Skills",
    body: "Digital marketing for MG Steel & Rukmani, freelance developer for SMEs, UI/UX optimization for restaurants and clinics, and product thinking around SaaS, delivery systems, and AI-enabled ERP concepts.",
    tag: "Work & impact",
    gradient: "from-cyan-500/40 via-emerald-500/20 to-transparent",
  },
  {
    id: "future",
    label: "FUTURE",
    title: "Cloud & Cybersecurity Path",
    body: "Building toward technical leadership in Europe — combining cloud engineering, cybersecurity, business strategy, and global exposure from the USA Exchange Program.",
    tag: "Where I'm going",
    gradient: "from-teal-500/40 via-cyan-500/20 to-transparent",
  },
];

export default function LaptopHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Strong 3D mouse tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = tiltRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * -20; // stronger tilt
    const rotateY = (x / rect.width) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = tiltRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  // Scroll → change slide (like Addverb)
  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = window.scrollY / maxScroll;

      let index = 0;
      if (progress > 0.66) index = 2;
      else if (progress > 0.33) index = 1;

      setActiveIndex(index);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={tiltRef}
      className="relative w-full max-w-xl mx-auto md:mx-0 transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer glow */}
      <div className="absolute -inset-10 bg-gradient-to-br from-emerald-500/30 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Device frame */}
      <div className="relative rounded-[32px] border border-zinc-800 bg-gradient-to-b from-zinc-900 via-black to-black shadow-[0_40px_120px_rgba(0,0,0,0.9)] px-5 md:px-7 pt-5 pb-6">
        {/* Notch */}
        <div className="flex justify-center mb-5">
          <div className="h-1.5 w-16 rounded-full bg-zinc-700/80" />
        </div>

        {/* Active gradient behind glass */}
        <div
          className={`absolute inset-0 rounded-[32px] blur-2xl opacity-40 transition-all duration-700 bg-gradient-to-br ${slides[activeIndex].gradient}`}
        />

        {/* Glass screen – NO height animation, no overflow clipping */}
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 overflow-visible">
          {/* Moving neon blobs */}
          <motion.div
            key={"blobL-" + activeIndex}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-emerald-500/40 blur-3xl"
          />
          <motion.div
            key={"blobR-" + activeIndex}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute -right-32 -top-24 h-56 w-56 rounded-full bg-cyan-500/40 blur-3xl"
          />

          {/* Screen content */}
          <div className="relative px-5 md:px-7 py-7 overflow-hidden">
            {/* Label row */}
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-emerald-300/90 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{slides[activeIndex].label}</span>
            </div>

            {/* Horizontal slider */}
            <motion.div
              className="flex"
              animate={{ x: `${-activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
              style={{ width: `${slides.length * 100}%` }}
            >
              {slides.map((slide) => (
                <motion.div
                  key={slide.id}
                  className="w-full shrink-0 pr-5 md:pr-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg md:text-xl font-semibold mb-2"
                  >
                    {slide.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[13px] md:text-[15px] text-zinc-100/90 leading-relaxed"
                  >
                    {slide.body}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom buttons */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {slides.map((slide, i) => {
                const active = i === activeIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIndex(i)}
                    className={`h-11 rounded-xl border text-[11px] md:text-[12px] transition-all ${
                      active
                        ? "border-emerald-400/80 bg-emerald-400/15 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:border-emerald-300/60 hover:text-emerald-100"
                    }`}
                  >
                    {slide.tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom base */}
        <div className="mt-4 flex justify-center">
          <div className="h-1.5 w-24 rounded-full bg-zinc-800/90" />
        </div>
      </div>
    </div>
  );
}