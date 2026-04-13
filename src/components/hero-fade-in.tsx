"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type HeroFadeInProps = HTMLMotionProps<"section">;

const HeroFadeIn = ({ children, className, ...sectionProps }: HeroFadeInProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...sectionProps}
    >
      {children}
    </motion.section>
  );
};

export default HeroFadeIn;

