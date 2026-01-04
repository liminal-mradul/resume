import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink, ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      year: "2024-25",
      items: [
        { title: "Winner - Techfest SparkX (AI/ML Quiz)", org: "IIT Bombay Zonals", desc: "Top 5 shortlist for Round 2" },
        { title: "Founder - Next Founder", org: "Entrepreneurship Community", desc: "100+ active participants" },
        { title: "Research Paper Completion", org: "Independent Research", desc: "9 months on Chaos Theory & Quantum Duality" }
      ]
    },
    {
      year: "2024",
      items: [
        { title: "Participant - Daydream Delhi", org: "Game Development", desc: "Built and showcased game project" },
        { title: "Active Member - Hack Club", org: "Global Tech Community", desc: "Contributing to open source" },
        { title: "Mentor", org: "Personal Initiative", desc: "Mentoring Arnab Das, Jishan, and Roshani" }
      ]
    },
    {
      year: "2023-24",
      items: [
        { title: "Security Researcher", org: "Bug Bounty & Ethical Hacking", desc: "PhysicsWallah, IoTWebPlanet vulnerabilities" },
        { title: "Operation Sindoor", org: "Cyber Operations", desc: "Offensive security operations" }
      ]
    }
  ];

  const projects = [
    {
      title: "Aegis VCS",
      description: "Distributed version control system built in Rust with cryptographic security, BLAKE3 hashing, and Ed25519 signatures.",
      tech: ["Rust", "Cryptography", "Systems"],
      category: "Systems"
    },
    {
      title: "AegisNet",
      description: "Decentralized P2P network enabling autonomous node synchronization for distributed version control.",
      tech: ["Python", "Networking", "P2P"],
      category: "Network"
    },
    {
      title: "Aegis Browser",
      description: "Multi-tab web browser with PyQt6 framework, integrating Qt WebEngine for modern web rendering.",
      tech: ["Python", "PyQt6", "GUI"],
      category: "Application"
    },
    {
      title: "N-Body Simulation",
      description: "Classical three-body gravitational problem with high-fidelity numerical integration and visualization.",
      tech: ["Python", "Physics", "NumPy"],
      category: "Research"
    },
    {
      title: "Collatz Analysis",
      description: "Pattern analysis of Collatz sequence across 1M numbers with predictive machine learning model.",
      tech: ["Python", "ML", "Mathematics"],
      category: "Research"
    },
    {
      title: "Security Research",
      description: "Vulnerability discovery and responsible disclosure in production web applications and APIs.",
      tech: ["Red Teaming", "OSINT", "Web Security"],
      category: "Security"
    }
  ];

  const writings = [
    { title: "Uncompromising Python", desc: "Comprehensive guide from basics to advanced concepts with portfolio projects" },
    { title: "Through Different Eyes", desc: "Exploring perception through psychology, philosophy, and neuroscience" },
    { title: "Chaos & Quantum Duality", desc: "Research paper on chaos theory applications in classical physics" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-lg font-medium tracking-tight">Mradul Umrao</a>
            <div className="flex gap-8 text-sm">
              <a href="#work" className={`transition-colors ${activeSection === 'work' ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Work</a>
              <a href="#projects" className={`transition-colors ${activeSection === 'projects' ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Projects</a>
              <a href="#research" className={`transition-colors ${activeSection === 'research' ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Research</a>
              <a href="#contact" className={`transition-colors ${activeSection === 'contact' ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white text-xs rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
              Student researcher exploring the intersection of physics, security, and computation
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              3 years of hands-on experience in cybersecurity and development. 
              Currently preparing for IMO and IOI while building communities and mentoring the next generation.
            </p>
            <div className="flex items-center gap-4 text-sm text-zinc-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Kanpur, India
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                5 years enthusiast
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="work" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-zinc-500 mb-12">Experience & Achievements</h2>
          <div className="space-y-16">
            {experiences.map((yearGroup, idx) => (
              <div key={idx}>
                <div className="text-sm font-medium text-zinc-400 mb-6">{yearGroup.year}</div>
                <div className="space-y-8">
                  {yearGroup.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 group-hover:scale-150 transition-transform"></div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                              <p className="text-sm text-zinc-500">{item.org}</p>
                            </div>
                          </div>
                          <p className="text-zinc-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-zinc-500 mb-12">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group border border-zinc-200 rounded-lg p-6 hover:border-zinc-900 transition-all bg-white">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-zinc-400">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-zinc-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-zinc-100 text-zinc-600 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Writing */}
      <section id="research" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-zinc-500 mb-12">Research & Writing</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-zinc-900 pl-6">
              <h3 className="text-2xl font-medium mb-3">Chaos Theory & Quantum Duality</h3>
              <p className="text-zinc-600 mb-4 leading-relaxed">
                Independent research exploring chaos theory applications in classical physics, 
                working toward unified perspectives with quantum duality. 
                9 months of dedicated research culminating in a comprehensive academic paper.
              </p>
              <span className="text-sm text-zinc-500">Research Paper â€¢ 2024-25</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {writings.slice(0, 2).map((writing, idx) => (
                <div key={idx} className="border border-zinc-200 rounded-lg p-6">
                  <h3 className="font-medium mb-2">{writing.title}</h3>
                  <p className="text-sm text-zinc-600">{writing.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-zinc-200">
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Skills & Expertise</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-sm font-medium mb-3">Security</div>
                <div className="text-sm text-zinc-600 space-y-1">
                  <div>Penetration Testing</div>
                  <div>Web Security</div>
                  <div>API Exploitation</div>
                  <div>OSINT</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-3">Development</div>
                <div className="text-sm text-zinc-600 space-y-1">
                  <div>Python</div>
                  <div>Rust</div>
                  <div>React/Next.js</div>
                  <div>Shell Scripting</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-3">Physics</div>
                <div className="text-sm text-zinc-600 space-y-1">
                  <div>Classical Mechanics</div>
                  <div>Chaos Theory</div>
                  <div>Numerical Simulation</div>
                  <div>Metaphysics</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-3">Tools</div>
                <div className="text-sm text-zinc-600 space-y-1">
                  <div>Burp Suite</div>
                  <div>Nmap</div>
                  <div>Linux</div>
                  <div>Git</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-zinc-200 pt-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-medium mb-6 tracking-tight">Let's work together</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                I'm always open to discussing research collaborations, project opportunities, 
                or mentorship. Feel free to reach out.
              </p>
              <a 
                href="mailto:mradulumrao@gmail.com"
                className="inline-flex items-center gap-2 text-lg font-medium group"
              >
                mradulumrao@gmail.com
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="https://github.com/mradulumrao" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mradulumrao" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/mradulumrao" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-zinc-500">
              Â© 2025 Mradul Umrao
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
      }
