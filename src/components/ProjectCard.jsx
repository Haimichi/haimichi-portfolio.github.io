import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent text-white rounded hover:bg-blue-600 transition-colors text-sm"
          >
            Demo
          </a>
          <a 
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 