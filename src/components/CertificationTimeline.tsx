import { motion } from 'framer-motion';

const certifications = {
  completed: [
    {
      name: 'TryHackMe',
      items: ['Pentesting Fundamentals', 'Security Principles', 'Pre-Security']
    },
    {
      name: 'HTB Academy',
      items: ['Linux Fundamentals', 'Intro to Networking', 'Web Requests']
    },
    {
      name: 'Cisco',
      items: ['Intro to Cybersecurity', 'OS Basics']
    },
    {
      name: 'Postman',
      items: ['API Fundamentals Student Expert']
    }
  ],
  inProgress: [
    {
      name: 'TCM Security',
      items: ['Practical Ethical Hacking (PEH)']
    },
    {
      name: 'HTB',
      items: ['Starting Point Tier 3']
    },
    {
      name: 'CompTIA',
      items: ['Network+ (N10-009)']
    }
  ]
};

const CertificationTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
      
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-green-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Completed Certifications</h3>
          <div className="space-y-6">
            {certifications.completed.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="pl-6 relative"
              >
                <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-green-500"></div>
                <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {cert.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-yellow-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">In Progress</h3>
          <div className="space-y-6">
            {certifications.inProgress.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="pl-6 relative"
              >
                <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {cert.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationTimeline;