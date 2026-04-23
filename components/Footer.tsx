"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Download, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";

export default function Footer() {
  const { personal, socials, navigation } = portfolioData;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border/50 bg-muted/20">
      <div className="section-container py-12 space-y-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gradient">
              {personal.initials}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building intelligent systems and scalable solutions with a focus on AI and backend development.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.github && (
                <motion.a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
              {socials.linkedin && (
                <motion.a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              )}
              <motion.a
                href={`mailto:${personal.email}`}
                className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Actions</h3>
            <div className="space-y-3">
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.a
                href="#certifications"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#certifications");
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Award size={18} />
                View Certificates
              </motion.a>
              <motion.a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} />
                Get in Touch
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} {personal.name}. Built with Next.js, TypeScript & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-40 glow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </footer>
  );
}
