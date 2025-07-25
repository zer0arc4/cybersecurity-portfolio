import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const commands = [
  { cmd: 'whoami', response: 'rithesh-chandra-alakati' },
  { cmd: 'nmap --version', response: 'Nmap 7.92 ( https://nmap.org )' },
  { cmd: 'ls ~/projects', response: 'crypto-hash-generator  automated-recon-tool' },
];

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const cycleCommands = () => {
      if (isTyping) {
        // Type the command
        if (displayedCommand.length < commands[currentCommand].cmd.length) {
          setTimeout(() => {
            setDisplayedCommand(commands[currentCommand].cmd.substring(0, displayedCommand.length + 1));
          }, 100);
        } else {
          setTimeout(() => {
            setIsTyping(false);
            setDisplayedResponse('');
          }, 800);
        }
      } else {
        // Type the response
        if (displayedResponse.length < commands[currentCommand].response.length) {
          setTimeout(() => {
            setDisplayedResponse(commands[currentCommand].response.substring(0, displayedResponse.length + 1));
          }, 50);
        } else {
          setTimeout(() => {
            setCurrentCommand((currentCommand + 1) % commands.length);
            setDisplayedCommand('');
            setIsTyping(true);
          }, 2000);
        }
      }
    };

    const timer = setTimeout(cycleCommands, 10);
    return () => clearTimeout(timer);
  }, [currentCommand, displayedCommand, displayedResponse, isTyping]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
    >
      <div className="flex items-center px-4 py-3 bg-gray-900 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-400">terminal</div>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex items-start mb-2">
          <span className="text-green-400 mr-2">$</span>
          <span className="text-cyan-300">{displayedCommand}</span>
          {isTyping && <span className="ml-1 w-2 h-5 bg-gray-500 animate-pulse"></span>}
        </div>
        {displayedResponse && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 whitespace-pre"
          >
            {displayedResponse}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;