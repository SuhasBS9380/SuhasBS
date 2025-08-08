
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#showcases' },
    { name: 'Achievements', href: '#achievements' },
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
        scrolled ? "bg-black/90 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-bold text-2xl text-white">
            <span className="font-montserrat">Suhas</span><span className="text-highlight font-poppins"> B S</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-all duration-300 text-sm font-medium relative group px-3 py-2 rounded-lg",
                  item.name === 'Home' ? "text-white bg-highlight/20" : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Enhanced Design */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-start pt-20 items-center transition-all duration-500 ease-in-out md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button at the top */}
        <button 
          className="absolute top-4 right-4 text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        
        <div className="flex flex-col items-center space-y-8 py-8 w-full">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-2xl font-medium hover:text-highlight transition-all duration-300 relative group"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-highlight rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-highlight rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-highlight rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
