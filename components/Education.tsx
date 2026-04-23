"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-container">
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
            <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My academic background and continuous learning journey
          </motion.p>
        </div>

        {/* Education Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={item}
              className="card-premium p-6 lg:p-8 space-y-6 group"
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-semibold text-primary">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-primary flex items-center gap-2">
                  <Award size={16} />
                  Highlights
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
