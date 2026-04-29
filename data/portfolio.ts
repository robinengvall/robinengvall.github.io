export const portfolioData = {
  // Personal Information
  personal: {
    name: "Robin Engvall",
    initials: "RE",
    title: "AI & Backend Developer",
    tagline: "Junior Python Developer specializing in AI, backend systems, and data-driven solutions",
    location: "Gothenburg, Sweden",
    availability: "Available for new opportunities",
    email: "robinengvall96@gmail.com",
    phone: "+46 XXX XXX XXX",
    profileImage: "/profile.jpg", // Replace with your image
    resumeUrl: "/CV_robin_engvall_ENG.pdf",
    resumeLastUpdated: "April 2026"
  },

  // Social Links
  socials: {
    github: "https://github.com/robinengvall",
    linkedin: "https://linkedin.com/in/robin-engvall"
  },

  // About / Bio
  about: {
    shortBio: "Passionate developer focused on building intelligent systems that solve real-world problems. With a strong foundation in Python, AI, and backend development, I create scalable solutions that bridge the gap between complex algorithms and practical applications.",
    longBio: "I'm a Junior Python Developer with specialized expertise in AI, backend systems, and data engineering. My journey in software development has been driven by curiosity and a commitment to building high-quality, impactful solutions.\n\nThrough hands-on internships at innovative tech companies, I've gained practical experience developing AI-powered features, building robust APIs, and working with large-scale datasets. I thrive in collaborative environments where I can contribute to meaningful projects while continuously learning and growing.\n\nWhen I'm not coding, I'm exploring the latest developments in machine learning, contributing to open-source projects, or experimenting with new technologies.",
    quickFacts: [
      {
        icon: "MapPin",
        label: "Location",
        value: "Gothenburg, Sweden"
      },
      {
        icon: "GraduationCap",
        label: "Education",
        value: "Python & AI Development"
      },
      {
        icon: "Briefcase",
        label: "Focus",
        value: "AI & Backend Systems"
      },
      {
        icon: "Award",
        label: "Experience",
        value: "2+ Years"
      }
    ]
  },

  // Skills
  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        skills: [
          { name: "Python", icon: "Code2"},
          { name: "JavaScript", icon: "Code2" },
          { name: "TypeScript", icon: "Code2" },
          { name: "SQL", icon: "Database"},
          { name: "Bash", icon: "Terminal"}
        ]
      },
      {
        id: "ml-data",
        name: "Machine Learning & Data",
        skills: [
          { name: "TensorFlow", icon: "Brain"},
          { name: "PyTorch", icon: "Brain"},
          { name: "Scikit-learn", icon: "LineChart"},
          { name: "Pandas", icon: "Table"},
          { name: "NumPy", icon: "Calculator"},
          { name: "LSTM", icon: "Network"},
          { name: "NLP", icon: "MessageSquare"},
          { name: "Data Preprocessing", icon: "Filter"}
        ]
      },
      {
        id: "web-dev",
        name: "Web Development",
        skills: [
          { name: "Flask", icon: "Server"},
          { name: "FastAPI", icon: "Zap"},
          { name: "Django", icon: "Globe"},
          { name: "REST API", icon: "Link"},
          { name: "React", icon: "Code"},
          { name: "Next.js", icon: "Layout"}
        ]
      },
      {
        id: "tools",
        name: "Tools & Technologies",
        skills: [
          { name: "Git", icon: "GitBranch"},
          { name: "Docker", icon: "Container"},
          { name: "MongoDB", icon: "Database"},
          { name: "PostgreSQL", icon: "Database"},
          { name: "Linux", icon: "Terminal"},
          { name: "AWS", icon: "Cloud"},
          { name: "Azure", icon: "Cloud"},
          { name: "CI/CD", icon: "GitCommit"}
        ]
      }
    ]
  },

  // Projects
  projects: [
    // Software Projects
    {
      id: 1,
      title: "FlashLingo",
      description: "Interactive language learning application with flashcard-based training system. Built with modern web technologies to make vocabulary acquisition engaging and effective.",
      longDescription: "A comprehensive language learning platform featuring spaced repetition algorithms, progress tracking, and customizable flashcard decks. Users can create their own decks or use pre-made ones to learn new languages efficiently.",
      image: "/images/flashlingo.png",
      tags: ["Python", "Flask", "JavaScript", "SQLite", "Web App"],
      category: "Software",
      github: "https://github.com/robinengvall/flashlingo",
      live: "",
      featured: true
    },
    {
      id: 2,
      title: "PodManager",
      description: "Podcast management system with automated transcription, audio enhancement, and AI-generated content. Streamlines the entire podcast production workflow from recording to publishing.",
      longDescription: "An end-to-end podcast management platform that automates transcription, generates show notes, and manages episode metadata. Features include audio processing, automated content generation, and integration with popular podcast hosting platforms.",
      image: "/images/podmanager.png",
      tags: ["Flask", "MongoDB", "AI", "Python", "Audio Processing"],
      category: "Software",
      github: "",
      live: "https://www.podmanager.ai/",
      featured: true
    },
    {
      id: 3,
      title: "Slot Machine Game",
      description: "Classic slot machine game built with clean code architecture and smooth animations. Features realistic game mechanics, score tracking, and an intuitive user interface.",
      longDescription: "A fun and interactive slot machine simulator with authentic casino-style gameplay. Includes multiple paylines, bonus features, and statistics tracking to analyze your winning patterns.",
      image: "/images/slot_machine.png",
      tags: ["Python", "Game Development", "OOP", "GUI"],
      category: "Software",
      github: "",
      live: "",
      featured: false
    },
    {
      id: 4,
      title: "TextLens",
      description: "High-performance text analysis tool written in Rust for blazing-fast document processing and insights. Provides detailed statistics, readability scores, and pattern detection.",
      longDescription: "A command-line tool built with Rust that performs comprehensive text analysis including word frequency, sentiment analysis, readability metrics, and keyword extraction. Optimized for processing large documents with minimal resource usage.",
      image: "/images/textlens.png",
      tags: ["Rust", "CLI", "Text Processing", "Performance"],
      category: "Software",
      github: "",
      live: "",
      featured: false
    },
    
    // Data Project
    {
      id: 5,
      title: "Steam Data Pipeline",
      description: "Automated ETL pipeline for extracting, transforming, and analyzing Steam gaming platform data. Provides insights into gaming trends, player behavior, and market dynamics.",
      longDescription: "A robust data engineering project that scrapes Steam data, processes it through multiple transformation stages, and stores it in a structured format for analysis. Includes automated scheduling, data validation, and visualization dashboards.",
      image: "/images/steam_analytics.png",
      tags: ["Python", "ETL", "Data Engineering", "Pandas", "Airflow", "PostgreSQL"],
      category: "Data",
      github: "https://github.com/robinengvall/steam-data-pipeline",
      live: "",
      featured: true
    },
    
    // AI/ML Projects
    {
      id: 6,
      title: "AI Recipes",
      description: "AI-powered recipe generator and meal planner using natural language processing. Creates personalized recipes based on available ingredients, dietary preferences, and cooking skill level.",
      longDescription: "An intelligent cooking assistant that leverages machine learning to generate creative recipes, suggest ingredient substitutions, and provide step-by-step cooking instructions. The system learns from user feedback to improve recommendations over time.",
      image: "/images/ai_recipie.png",
      tags: ["Python", "NLP", "Machine Learning", "OpenAI API", "Flask"],
      category: "AI/ML",
      github: "",
      live: "",
      featured: true
    },
    {
      id: 7,
      title: "Model Evaluation Framework",
      description: "Comprehensive ML model evaluation toolkit with automated metrics calculation, visualization, and comparison tools. Streamlines the process of assessing and comparing machine learning models.",
      longDescription: "A Python framework for systematic evaluation of machine learning models across multiple metrics. Features include automated cross-validation, hyperparameter tuning, performance visualization, and detailed reporting for model comparison.",
      image: "/images/model_evaluator.png",
      tags: ["Python", "Scikit-learn", "Machine Learning", "Data Visualization", "MLOps"],
      category: "AI/ML",
      github: "https://github.com/robinengvall/model_evaluator",
      live: "",
      featured: false
    },
    {
      id: 8,
      title: "LineSpotting",
      description: "Computer vision system for detecting and analyzing lines in images and video streams. Useful for sports analytics, lane detection, and document processing applications.",
      longDescription: "An advanced image processing application that uses computer vision algorithms to detect, track, and analyze lines in various contexts. Implements edge detection, Hough transforms, and custom algorithms for robust line identification in challenging conditions.",
      image: "/images/linespotting.png",
      tags: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Deep Learning"],
      category: "AI/ML",
      github: "",
      live: "",
      featured: false
    }
  ],

  // Experience
  experience: [
    {
      id: 1,
      title: "AI & App Developer, LIA",
      company: "Podmanager",
      location: "Gothenburg, Sweden",
      period: "2025",
      current: false,
      description: "Developed AI-powered backend features, API integrations, and data flows using Python and Flask. Participated in code reviews and technical discussions within the team.",
      achievements: [
        "Built AI-powered features for podcast content generation and automation",
        "Integrated multiple third-party APIs for audio processing and transcription",
        "Implemented efficient data flows and backend architecture improvements",
        "Contributed to team code reviews and technical decision-making"
      ],
      technologies: ["Python", "Flask", "MongoDB", "API Integration", "AI"]
    },
    {
      id: 2,
      title: "AI Developer, LIA",
      company: "Linespotting AB",
      location: "Kalmar, Sweden",
      period: "2024–2025",
      current: false,
      description: "Developed AI systems for identifying political corruption. Handled and preprocessed over 1 million rows of data and trained ML models.",
      achievements: [
        "Designed and implemented AI models for corruption pattern detection",
        "Preprocessed and analyzed 1M+ rows of complex data",
        "Trained and optimized machine learning models for production use",
        "Developed data pipelines for efficient data processing at scale"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "TensorFlow", "Data Processing"]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "Python Developer with AI Specialization",
      institution: "Teknikhögskolan Gothenburg",
      location: "Gothenburg, Sweden",
      period: "2023–2025",
      description: "Vocational diploma focusing on Python, AI, backend development, and practical system development. Completed 22 weeks of internship at tech companies.",
      highlights: [
        "Specialized in Python programming and AI development",
        "Hands-on training in backend systems and API development",
        "22 weeks of industry internship experience",
        "Project-based learning with real-world applications"
      ],
      grade: ""
    }
  ],

  // Certifications
  certifications: [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford University",
      date: "2024",
      image: "/certificates/ml-specialization.jpg",
      verificationUrl: "",
      verified: true
    },
    {
      id: 2,
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2023",
      image: "/certificates/python-data-science.jpg",
      verificationUrl: "",
      verified: true
    },
    {
      id: 3,
      title: "Deep Learning with TensorFlow",
      issuer: "Udemy",
      date: "2024",
      image: "/certificates/tensorflow.jpg",
      verificationUrl: "",
      verified: false
    }
  ],

  // Achievements
  achievements: [
    {
      id: 1,
      label: "LeetCode",
      metric: "500+",
      title: "Problems Solved",
      description: "Consistently solving algorithmic challenges to sharpen problem-solving skills",
      link: "https://leetcode.com/robinengvall",
      icon: "Trophy"
    },
    {
      id: 2,
      label: "GitHub",
      metric: "50+",
      title: "Contributions",
      description: "Active contributor to open-source projects and personal repositories",
      link: "https://github.com/robinengvall",
      icon: "GitCommit"
    },
    {
      id: 3,
      label: "Projects",
      metric: "15+",
      title: "Completed Projects",
      description: "Successfully delivered projects ranging from AI systems to web applications",
      link: "#projects",
      icon: "Rocket"
    },
    {
      id: 4,
      label: "Learning Streak",
      metric: "365",
      title: "Days of Code",
      description: "Maintained a year-long coding streak through consistent daily practice",
      link: "",
      icon: "Flame"
    }
  ],

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]
};
