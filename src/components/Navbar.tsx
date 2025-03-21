
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Showcases', href: '#showcases' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-3",
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-bold text-xl text-white">
            Suhas<span className="text-highlight"> B S</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col justify-start pt-20 items-center overflow-y-auto transition-all duration-500 ease-in-out md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button at the top */}
        <button 
          className="absolute top-4 right-4 text-white p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        
        <div className="flex flex-col items-center space-y-8 py-8 w-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-2xl font-medium hover:text-highlight transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
