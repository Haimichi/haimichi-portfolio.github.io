import React from 'react';
import SocialLinks from '../components/SocialLinks';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Liên hệ" 
        description="Liên hệ với Nguyễn Huỳnh Thanh Hải - Front-end Developer" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Liên hệ với tôi</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h2>
            {/* Thay thế ContactForm bằng form đơn giản */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Họ và tên</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent" 
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent" 
                  placeholder="Nhập địa chỉ email của bạn"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Tin nhắn</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Nhập tin nhắn của bạn"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-accent text-white px-6 py-2 rounded hover:bg-accent-dark transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Email:</strong> your.email@example.com
              </p>
              <p>
                <strong>Điện thoại:</strong> +84 123 456 789
              </p>
              <p>
                <strong>Địa chỉ:</strong> Hà Nội, Việt Nam
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Kết nối với tôi</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;