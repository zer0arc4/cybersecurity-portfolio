import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string; level: number }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-gray-800/50 p-4 rounded-lg border-l-2 border-cyan-500"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xl mr-2">{skill.icon}</span>
          <h4 className="font-medium">{skill.name}</h4>
        </div>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;