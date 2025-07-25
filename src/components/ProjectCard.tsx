import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ project, index }: { project: { title: string; description: string; tags: string[]; link: string }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-purple-300">
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={project.link}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link === '#' ? 'Coming Soon' : 'View Project'}
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;