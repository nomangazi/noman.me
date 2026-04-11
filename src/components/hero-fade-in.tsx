"use client";

import { motion } from "framer-motion";

interface HeroFadeInProps {
  children: React.ReactNode;
  className?: string;
}

const HeroFadeIn = ({ children, className }: HeroFadeInProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default HeroFadeIn;

