import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">Liên hệ với tôi</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h2>
          <ContactForm />
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
  );
};

export default Contact; 