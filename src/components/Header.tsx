import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Header = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const socialItems = [
    { icon: <FiGithub />, href: 'https://github.com/zer0arc4' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/alakati-rithesh-chandra' },
    { icon: <FiTwitter />, href: 'https://x.com/Zer0Arc4' },
    { icon: <FiMail />, href: 'mailto:iamzer0arc4@email.com' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <a className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              zer0arc4
            </a>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link href={item.href}>
                <a className="relative text-gray-300 hover:text-cyan-400 transition-colors">
                  {item.name}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400"
                    whileHover={{ width: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </a>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {socialItems.map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
              whileHover={{ y: -2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;