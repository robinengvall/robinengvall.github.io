// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade in sections on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animate skill bars when visible
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillLevels = entry.target.querySelectorAll('.skill-level');
      skillLevels.forEach((level, index) => {
        setTimeout(() => {
          level.style.opacity = '1';
        }, index * 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(category => {
  skillObserver.observe(category);
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNav() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.style.color = 'var(--accent-primary)';
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Add parallax effect to header
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector('header');
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
    header.style.opacity = 1 - (scrolled / 500);
  }
});

// Add typing effect to subtitle (optional)
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  setTimeout(typeWriter, 800);
}

// Skills search functionality
const skillSearchInput = document.getElementById('skillSearch');
const skillBadges = document.querySelectorAll('.skill-badge');
const skillCategories = document.querySelectorAll('.skill-category-block');

if (skillSearchInput) {
  skillSearchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      // Reset all badges and show all categories
      skillBadges.forEach(badge => {
        badge.classList.remove('highlighted', 'faded');
      });
      skillCategories.forEach(category => {
        category.style.display = 'block';
      });
    } else {
      // Filter and highlight, hide empty categories
      skillCategories.forEach(category => {
        let hasVisibleSkills = false;
        const badges = category.querySelectorAll('.skill-badge');
        
        badges.forEach(badge => {
          const skillName = badge.getAttribute('data-skill').toLowerCase();
          const badgeText = badge.textContent.toLowerCase();
          
          if (skillName.includes(searchTerm) || badgeText.includes(searchTerm)) {
            badge.classList.add('highlighted');
            badge.classList.remove('faded');
            hasVisibleSkills = true;
          } else {
            badge.classList.add('faded');
            badge.classList.remove('highlighted');
          }
        });
        
        // Hide/show entire category based on if any skills match
        if (hasVisibleSkills) {
          category.style.display = 'block';
        } else {
          category.style.display = 'none';
        }
      });
    }
  });

  // Clear search on escape
  skillSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      skillSearchInput.value = '';
      skillBadges.forEach(badge => {
        badge.classList.remove('highlighted', 'faded');
      });
      skillCategories.forEach(category => {
        category.style.display = 'block';
      });
    }
  });
}

// Add hover effect sound (optional - commented out)
/*
document.querySelectorAll('.project-card, .experience-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    // Play a subtle hover sound
    // const audio = new Audio('path/to/hover-sound.mp3');
    // audio.volume = 0.1;
    // audio.play();
  });
});
*/

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    
    // Random size variation
    const size = 2 + Math.random() * 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles on load
createParticles();

console.log('%c🚀 Portfolio loaded successfully!', 'color: #00ffaa; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Robin Engvall', 'color: #7c3aed; font-size: 12px;');