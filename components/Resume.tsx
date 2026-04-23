"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Resume() {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="section-container bg-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            <span className="text-gradient">Resume</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Download my complete resume for a detailed overview
          </motion.p>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-premium p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Resume Preview */}
            <div className="flex-shrink-0">
              <div className="w-48 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border-2 border-border/50 shadow-xl">
                <FileText className="text-primary" size={64} />
              </div>
            </div>

            {/* Resume Info */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {personal.name}
                </h3>
                <p className="text-xl font-semibold text-primary">
                  {personal.title}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>Last updated: {personal.resumeLastUpdated}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                My resume includes detailed information about my education, professional experience, 
                technical skills, projects, and achievements. Perfect for recruiters and hiring managers 
                looking for comprehensive background information.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download PDF
                </motion.a>
                <motion.a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-border rounded-xl font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={20} />
                  View Online
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
