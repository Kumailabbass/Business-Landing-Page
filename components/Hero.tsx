import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-light-text leading-tight mb-6">
          Elevate Your Business with <span className="text-primary">Modern Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          We provide cutting-edge strategies and technologies to help your business thrive in the digital age. Let's build the future, together.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request a Quote
          </a>
          <a href="#services" className="bg-gray-200 text-light-text px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
