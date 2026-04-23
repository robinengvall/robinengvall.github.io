"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, socials } = portfolioData;

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            I'm always excited to collaborate on interesting projects or discuss new opportunities. 
            Feel free to reach out through any of these channels.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {/* Email Card */}
          <motion.a
            href={`mailto:${personal.email}`}
            className="card-premium p-8 space-y-4 group text-center"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
              <Mail className="text-primary" size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Email Me</h3>
              <p className="text-primary font-semibold break-all">
                {personal.email}
              </p>
              <p className="text-sm text-muted-foreground">
                Best for detailed inquiries
              </p>
            </div>
            <motion.div
              className="inline-flex items-center gap-2 text-primary font-medium"
              whileHover={{ gap: 12 }}
            >
              Send Message
              <Send size={16} />
            </motion.div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            className="card-premium p-8 space-y-4 group text-center"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
              <MapPin className="text-primary" size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-primary font-semibold">
                {personal.location}
              </p>
              <p className="text-sm text-muted-foreground">
                Available for remote work and local opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card-premium p-8 space-y-6"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold">Connect on Social Media</h3>
            <p className="text-muted-foreground">
              Follow my journey and stay updated with my latest projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.github && (
              <motion.a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-muted rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="font-semibold">@robinengvall</p>
                </div>
              </motion.a>
            )}
            {socials.linkedin && (
              <motion.a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-muted rounded-xl hover:bg-primary/10 hover:text-primary transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold">Robin Engvall</p>
                </div>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-6"
        >
          <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <p className="text-primary font-medium">
              Open to opportunities • Available for collaboration
            </p>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you have a project in mind, want to discuss potential opportunities, 
            or just want to say hello, I'd love to hear from you!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
