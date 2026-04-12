"use client";

import { motion } from "framer-motion";

interface ProjectCardFadeInProps {
  children: React.ReactNode;
  index: number;
}

const ProjectCardFadeIn = ({ children, index }: ProjectCardFadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.12 }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectCardFadeIn;

