"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
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
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-container bg-muted/20">
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
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My journey through the tech industry, building real-world solutions
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative space-y-8"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="relative"
            >
              <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}>
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"
                  }`}
                >
                  <motion.div
                    className="card-premium p-6 lg:p-8 space-y-6 group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 lg:justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="lg:hidden p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="text-primary" size={20} />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-xs font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
