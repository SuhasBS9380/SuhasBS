
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="font-bold text-xl text-white">
              Suhas<span className="text-highlight"> B S</span>
            </a>
            <p className="text-gray-400 mt-2">Student & Technology Enthusiast</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Suhas B S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
