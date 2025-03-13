import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope 
} from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/yourusername',
      icon: FaFacebook,
      color: 'bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: FaInstagram,
      color: 'bg-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
      color: 'bg-blue-700'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: FaGithub,
      color: 'bg-gray-800'
    },
    {
      name: 'Zalo',
      url: 'https://zalo.me/yourusername',
      icon: SiZalo,
      color: 'bg-blue-500'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: FaEnvelope,
      color: 'bg-red-600'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-full ${link.color} text-white hover:opacity-90 transition-opacity`}
            title={link.name}
          >
            <Icon className="text-xl" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks; 