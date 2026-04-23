"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Search } from "lucide-react";
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5,
  SiFlask, SiFastapi, SiDjango,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiMongodb, SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiDocker, SiLinux,
  SiReact, SiNextdotjs,
  SiGithub, SiPostman, SiJupyter,
} from "react-icons/si";
import { Database, Brain, Network, Server, Code2 } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

// Icon mapping - maps skill names to their icons
const iconMap: Record<string, any> = {
  // Programming Languages
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "HTML": SiHtml5,
  "CSS": Code2,
  "Bash": Code2,
  "SQL": Database,
  
  // Backend & APIs
  "Flask": SiFlask,
  "FastAPI": SiFastapi,
  "Django": SiDjango,
  "REST API": Server,
  
  // ML & Data
  "TensorFlow": SiTensorflow,
  "PyTorch": SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "Machine Learning": Brain,
  "Data Analysis": Database,
  "Data Preprocessing": Database,
  "LSTM": Network,
  "NLP": Brain,
  "Deep Learning": Brain,
  "AI APIs": Brain,
  "Data Visualization": Database,
  "Model Training": Brain,
  
  // Databases
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "SQLite": SiSqlite,
  "Database Design": Database,
  "ORM": Database,
  "NoSQL": Database,
  "Data Modeling": Database,
  
  // Tools
  "Git": SiGit,
  "Docker": SiDocker,
  "Linux": SiLinux,
  "AWS": Server,
  "Azure": Server,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "GitHub": SiGithub,
  "VS Code": Code2,
  "Postman": SiPostman,
  "Jupyter Notebook": SiJupyter,
  "CI/CD": Code2,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState("");

  // Flatten all skills from all categories
  const allSkills = skills.categories.flatMap((cat) => cat.skills);

  // Filter skills based on search
  const filteredSkills = searchTerm
    ? allSkills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allSkills;

  return (
    <section id="skills" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider"
          >
            TECH STACK
          </motion.h2>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 lg:gap-6 max-w-7xl">
          {allSkills.map((skill) => {
            const isHighlighted = searchTerm && 
              skill.name.toLowerCase().includes(searchTerm.toLowerCase());
            const isFiltered = searchTerm && !isHighlighted;
            
            // Get the icon component for this skill
            const IconComponent = iconMap[skill.name] || Code2;

            return (
              <motion.div
                key={skill.name}
                variants={item}
                className={`
                  group relative
                  ${isFiltered ? 'opacity-20' : 'opacity-100'}
                  ${isHighlighted ? 'scale-110' : ''}
                  transition-all duration-300
                `}
                whileHover={{ y: -8, scale: 1.1 }}
              >
                <div
                  className={`
                    relative p-4 rounded-2xl
                    bg-gradient-to-br from-purple-900/30 to-blue-900/30
                    border border-border/30
                    backdrop-blur-sm
                    group-hover:border-primary/50
                    transition-all duration-300
                    flex flex-col items-center justify-center
                    min-h-[120px]
                    ${isHighlighted ? 'border-primary shadow-lg shadow-primary/30' : ''}
                  `}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                  
                  {/* Tech Icon */}
                  <div className="relative flex items-center justify-center mb-2">
                    <IconComponent 
                      className="text-primary/80 group-hover:text-primary transition-colors" 
                      size={40}
                    />
                  </div>

                  {/* Skill name */}
                  <div className="relative w-full flex items-center justify-center">
                    <p className="text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors text-center px-1 leading-tight">
                      {skill.name}
                    </p>
                  </div>

                  {/* Highlight ring */}
                  {isHighlighted && (
                    <motion.div
                      className="absolute inset-0 border-2 border-primary rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
          </div>
        </motion.div>

        {/* Search results info */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground"
          >
            {filteredSkills.length > 0 ? (
              <p>Found {filteredSkills.length} technolog{filteredSkills.length === 1 ? 'y' : 'ies'}</p>
            ) : (
              <p>No technologies found matching "{searchTerm}"</p>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
