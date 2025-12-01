"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import LaptopHero from "../components/LaptopHero";

// Simple reusable wrapper for each content section
function Section({
  children,
  id,
  title,
  eyebrow,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="snap-section">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/90 mb-3">
              {eyebrow}
            </p>
          )}

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>

          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="snap-container bg-black text-white">

      {/* Top gradient background effect */}
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_#22c55e22,_transparent_65%),_radial-gradient(circle_at_bottom,_#0ea5e922,_transparent_55%)]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <span className="font-semibold text-sm md:text-base">Abhinav Karna</span>

          <div className="hidden md:flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="snap-section">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1.3fr,1fr] gap-12 items-center py-20 md:py-28">

          {/* Left side hero text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs md:text-sm uppercase tracking-[0.25em] text-emerald-400/90"
            >
              Web Developer · Cloud & Cybersecurity · USA Alumni
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 text-3xl md:text-5xl font-bold leading-tight"
            >
              I build clean, animated products
              <span className="block text-zinc-300 text-xl md:text-2xl mt-2">
                for ambitious people and growing businesses.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-sm md:text-base text-zinc-400 max-w-xl"
            >
              I&apos;m Abhinav, an 18-year-old developer from Nepal — USA Exchange
              Program Alumni, EIMUN Delegate, and digital marketer for{" "}
              <span className="text-zinc-100 font-medium">MG Steel</span> and{" "}
              <span className="text-zinc-100 font-medium">Rukmani</span>.
              I design modern websites, work on SaaS ideas, and aim for a
              future career in cloud engineering & cybersecurity in Europe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition"
              >
                Work with me
                <ArrowRight size={16} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-100 hover:bg-zinc-900 transition"
              >
                View my work
              </a>
            </motion.div>
          </div>

          {/* Right side: Laptop animation */}
          <LaptopHero />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="about" title="A bit about me" eyebrow="Background">
        <p className="text-sm md:text-base text-zinc-300 max-w-3xl leading-relaxed">
          I’m a web developer, tester, and aspiring cloud & cybersecurity engineer.
          I enjoy turning messy ideas into clean digital products for restaurants,
          clinics, and SMEs.
          <br /><br />
          As a{" "}
          <span className="text-white font-medium">USA Exchange Program Alumni</span> and{" "}
          <span className="text-white font-medium">EIMUN 2024 Delegate</span>, I gained
          global exposure, leadership skills, and structured decision-making that
          shapes how I think and build.
        </p>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section id="experience" title="Experience & Roles" eyebrow="What I've been doing">
        <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-300">
          {[
            {
              role: "USA Exchange Program Alumni",
              time: "2023 – 2024",
              text: "Represented Nepal in the US-based exchange program—developed leadership, communication & global perspectives.",
            },
            {
              role: "Delegate – EIMUN 2024",
              time: "2024",
              text: "Worked in debate, negotiation, and structured policymaking.",
            },
            {
              role: "Digital Marketer – MG Steel",
              time: "2023 – 2024",
              text: "Handled campaigns, social media, and branding to grow MG Steel’s digital reach.",
            },
            {
              role: "Digital Marketer – Rukmani",
              time: "2023",
              text: "Built content and marketing angles to enhance Rukmani’s brand identity.",
            },
            {
              role: "Freelance Web Developer & Tester",
              time: "2024 – Present",
              text: "Designed fast, clean websites for SMEs using WordPress & Next.js.",
            },
            {
              role: "Product & SaaS Experiments",
              time: "2024 – Present",
              text: "Prototyped food delivery, multivendor, WhatsApp ordering, and AI-powered ERP concepts.",
            },
          ].map((item) => (
            <div key={item.role} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">{item.role}</h3>
                <span className="text-xs text-zinc-500">{item.time}</span>
              </div>
              <p className="text-xs md:text-sm text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects" title="Selected Projects & Concepts" eyebrow="Work">
        <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-300">
          {[
        {
          name: "MarketHub – Minimal E-commerce",
          text: "A fast, clean and multi-vendor, created in Next.js shopping interface.",
          url: "https://gocartshop.in",
        },
        {
          name: "Rukmani Group Website",
          text: "A clear service and appointment-focused clinic website.",
          url: "https://rukmanigroup.com",
        },
        {
          name: "Food Delivery Prototype",
          text: "A Pathao/KitchenCrew-style ordering prototype.",
          url: "https://restaurant-management-jphyb5ask-abhinav-karnas-projects.vercel.app/",
        },
        {
          name: "AI Cloud ERP Concept",
          text: "A vision for AI-assisted SME ERP systems.",
          url: "https://accknown.lovable.app/",
        },
          ].map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-emerald-400/50 hover:bg-zinc-800/50 transition cursor-pointer"
        >
          <h3 className="font-medium mb-1">{p.name}</h3>
          <p className="text-xs md:text-sm text-zinc-400">{p.text}</p>
        </a>
          ))}
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" title="Let’s build something" eyebrow="Contact">
        <p className="text-sm md:text-base text-zinc-300 max-w-xl mb-4">
          Looking for collaborations in web dev, digital Marketing, cloud or product ideas.
        </p>

        <div className="space-y-3 text-sm md:text-base text-zinc-200">
          <a
            href="mailto:abhinavkarna00@gmail.com"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <Mail size={18} /> abhinavkarna00@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/abhinav-karna-631299241/"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </Section>

    </main>
  );
}
