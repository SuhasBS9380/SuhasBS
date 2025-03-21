
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative flex items-center min-h-[90vh] py-4 overflow-hidden bg-black">
      {/* Subtle gradient background for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-highlight/10 opacity-80"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Image section - first on all screen sizes */}
          <div className="w-full sm:w-1/2 relative opacity-0 animate-slideInRight animate-delay-300 flex justify-center sm:justify-end order-first">
            {/* Hero image with enhanced sizing and glow effect */}
            <div className="relative w-full max-w-[250px] sm:max-w-full h-full mx-auto">
              {/* Enhanced glow behind the image */}
              <div className="absolute -inset-4 bg-highlight/20 blur-3xl rounded-full"></div>
              
              <img 
                src="/lovable-uploads/1bd83404-309d-45b9-888b-a40c0e59b6fd.png" 
                alt="Suhas B S" 
                className="relative z-10 w-full h-auto transform-gpu object-contain" 
              />
            </div>
          </div>
          
          {/* Content section - second on all screen sizes */}
          <div className={`w-full sm:w-1/2 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out mt-4 sm:mt-0 order-last`}>
            <div className="space-y-4">
              <div className="opacity-0 animate-slideUp animate-delay-100">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-highlight/10 text-highlight">
                  Hello, I'm
                </div>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl opacity-0 animate-slideUp animate-delay-200 font-montserrat">
                Suhas <span className="text-gradient">B S</span>
              </h1>
              
              <p className="text-xl text-gray-300 md:text-2xl opacity-0 animate-slideUp animate-delay-300 font-montserrat">
                Student & Technology Enthusiast
              </p>
              
              <p className="max-w-md text-gray-400 opacity-0 animate-slideUp animate-delay-400 font-montserrat">
                Exploring the intersection of technology and creativity to build innovative solutions.
              </p>
              
              <div className="pt-4 opacity-0 animate-slideUp animate-delay-500">
                <Button className="px-8 py-6 text-white rounded-full bg-highlight hover:bg-highlight-dark font-montserrat">
                  Get in touch <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add subtle animated particles or light effects */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-30 bg-gradient-to-t from-highlight/5 to-transparent"></div>
    </section>
  );
};

export default Hero;
