"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {about.shortBio}
          </motion.p>
        </div>

        {/* Quick Facts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {about.quickFacts.map((fact, index) => {
            const IconComponent = Icons[fact.icon as keyof typeof Icons] as LucideIcon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="card-premium p-6 space-y-3 text-center group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {IconComponent && <IconComponent className="text-primary" size={24} />}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="font-semibold text-foreground">{fact.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Long Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card-premium p-8 lg:p-12 space-y-6"
        >
          <h3 className="text-2xl font-bold">My Journey</h3>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            {about.longBio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
