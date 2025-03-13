import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Trang chủ" 
        description="Portfolio cá nhân của Tên Của Bạn - Front-end Developer chuyên về React và Tailwind" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">
              Xin chào, tôi là <span className="text-accent">Tên Của Bạn</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl mt-2 text-secondary">
              Front-end Developer
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Tôi là một lập trình viên đam mê thiết kế và phát triển các ứng dụng web hiện đại.
              Với kinh nghiệm làm việc với React, Tailwind CSS và các công nghệ web mới nhất,
              tôi luôn hướng đến việc tạo ra những sản phẩm chất lượng và trải nghiệm người dùng tuyệt vời.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-accent text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
              >
                Liên hệ với tôi
              </a>
              <a 
                href="/projects" 
                className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors"
              >
                Xem dự án
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src="/assets/images/profile.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home; 