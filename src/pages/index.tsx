import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '../components/Header';
import Terminal from '../components/Terminal';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import CertificationTimeline from '../components/CertificationTimeline';

const Home = () => {
  const skills = [
    { name: 'Python', icon: '🐍', level: 90 },
    { name: 'Bash', icon: '💻', level: 85 },
    { name: 'Burp Suite', icon: '🔍', level: 80 },
    { name: 'Nmap', icon: '📡', level: 85 },
    { name: 'Wireshark', icon: '📊', level: 75 },
  ];

  const projects = [
    {
      title: 'Cryptographic Hash Generator',
      description: 'Flask-based web app for generating/comparing hashes (MD5, SHA-256)',
      tags: ['Python', 'Flask', 'CryptoJS'],
      link: 'https://github.com/zer0acr4/Cryptographic-Hash-Generator',
    },
    {
      title: 'Automated Recon Tool',
      description: 'Python + Bash tool for automated reconnaissance (Coming Soon)',
      tags: ['Python', 'Bash', 'Automation'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Head>
        <title>Rithesh Chandra Alakati | Cybersecurity Professional</title>
        <meta name="description" content="Aspiring Red Teamer and Security Researcher" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                Hi, I'm <span className="text-white">Rithesh Chandra Alakati</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-300">
                Aspiring Red Teamer | Security Researcher
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                3rd Year B.Tech Cybersecurity Student at JNTUH. Focused on web/API penetration testing, 
                adversary simulation, and vulnerability research.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-900/30 rounded-lg font-medium"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Terminal />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="border-b-4 border-cyan-500 pb-2">About Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">My Journey</h3>
                <p className="mb-6 text-gray-300">
                  I'm a cybersecurity student with a passion for offensive security. My philosophy is 
                  <span className="font-bold text-cyan-300"> "Learn → Break → Defend → Repeat"</span> - 
                  constantly challenging systems to understand and improve their security.
                </p>
                <p className="mb-6 text-gray-300">
                  Currently focused on mastering OWASP Top 10 vulnerabilities, Active Directory attacks, 
                  and expanding my red teaming skills through CTFs and labs.
                </p>
                <div className="p-6 bg-gray-800/50 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-lg mb-2">Career Goal</h4>
                  <p className="text-gray-300">
                    Transition into professional red teaming and bug bounty hunting, contributing to 
                    making the digital world more secure.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">My Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="border-b-4 border-purple-500 pb-2">My Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="border-b-4 border-green-500 pb-2">Certifications</span>
            </h2>
            
            <CertificationTimeline />
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-800/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-gray-400">
            "Security is a process, not a product." — Bruce Schneier
          </p>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Rithesh Chandra Alakati. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;