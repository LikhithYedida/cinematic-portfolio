import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { DataFieldCanvas } from './DataFieldCanvas';
import { profile, heroCopy, heroKpis, heroDomains } from '../data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

const headlineGradients = [
  'from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]',
  'from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]',
  'from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]',
];

/** Counts from 0 to `target` once, with an ease-out curve. */
function useCountUp(target: number, delayMs = 900, durationMs = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / durationMs);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, delayMs, durationMs]);
  return value;
}

const KpiRow: React.FC<{ value: number; suffix: string; label: string; delay: number }> = ({
  value,
  suffix,
  label,
  delay,
}) => {
  const n = useCountUp(value, delay);
  return (
    <div className="flex items-end justify-between gap-6 py-3 border-b border-[#8C6D4F]/20 last:border-b-0">
      <span
        className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#A8988B] leading-snug max-w-[9rem]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </span>
      <span
        className="text-4xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#D4AF37] to-[#8C6D4F] tabular-nums"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {n}
        {suffix}
      </span>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const companies = heroDomains;

  return (
    <section className="relative w-full min-h-screen md:h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black">
      {/* ================= 1. DATA BACKDROP ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DataFieldCanvas className="opacity-40 md:opacity-100" />
        {/* Warm spotlight from the top right */}
        <div className="absolute -top-40 right-0 w-[48rem] h-[48rem] bg-[#D4AF37]/[0.07] rounded-full blur-[160px]" />
        {/* Soft left edge blend so the headline stays legible */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/85 to-transparent" />
        {/* Bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* ================= 2. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen md:h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {profile.fullName.toUpperCase()}
          </a>

          <nav
            className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm ml-auto lg:ml-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-12 pt-16 pb-10 md:pt-4 md:pb-2 my-auto">
          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Availability chip */}
            <motion.div variants={fadeUpVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#8C6D4F]/40 bg-black/40 backdrop-blur-sm text-[10px] tracking-[0.24em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-[#D4AF37] opacity-70 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                </span>
                Open to data analyst & analytics engineering roles
              </span>
            </motion.div>

            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="sr-only">{profile.fullName}, {profile.title}. </span>
                {heroCopy.headline.map((line, i) => (
                  <span
                    key={line}
                    className={`block text-transparent bg-clip-text bg-gradient-to-b ${headlineGradients[i % 3]}`}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Roles */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {profile.roles.map((role, i) => (
                  <React.Fragment key={role}>
                    {i > 0 && <span className="text-[#8C6D4F] mx-1">•</span>}
                    {role}
                  </React.Fragment>
                ))}
              </p>
            </motion.div>

            {/* Intro */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-7"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                {heroCopy.intro}
                <br className="hidden sm:block" /> {heroCopy.introLine2}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                className="group relative inline-flex items-center justify-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="group relative inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Executive KPI panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block pointer-events-auto z-20 w-[19rem] xl:w-[21rem] mr-2 xl:mr-10"
          >
            <div className="relative p-6 border border-[#8C6D4F]/40 bg-[#0A0806]/70 backdrop-blur-md shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/70" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/70" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/70" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/70" />

              <div className="flex items-center justify-between mb-2">
                <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                  Executive Summary
                </span>
              </div>

              {heroKpis.map((k, i) => (
                <KpiRow key={k.label} {...k} delay={1000 + i * 220} />
              ))}

              {/* Mini trend sparkline */}
              <svg viewBox="0 0 240 48" className="w-full h-12 mt-3" aria-hidden="true">
                <defs>
                  <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#D4AF37" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 L24 36 L48 38 L72 30 L96 32 L120 24 L144 26 L168 17 L192 19 L216 10 L240 6 L240 48 L0 48 Z"
                  fill="url(#spark-fill)"
                />
                <motion.path
                  d="M0 40 L24 36 L48 38 L72 30 L96 32 L120 24 L144 26 L168 17 L192 19 L216 10 L240 6"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 1.8, ease: 'easeOut' }}
                />
                <circle cx="240" cy="6" r="2.5" fill="#F7E7C4" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Experience credibility strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pointer-events-auto"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-[9.5px] tracking-[0.3em] uppercase text-[#8C6D4F] shrink-0">Work across</span>
          <div className="hidden sm:block w-10 h-[1px] bg-[#8C6D4F]/50" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10.5px] tracking-[0.26em] uppercase text-[#C4B5A5]">
            {companies.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
