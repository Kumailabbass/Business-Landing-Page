import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            <a href="#">ModernBiz</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md">
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium block text-center py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition-all duration-300 text-center" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
