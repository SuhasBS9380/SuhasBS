
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
    <section id="home" className="relative min-h-[80vh] flex items-center pt-16 xs:pt-20 pb-6 overflow-hidden bg-black">
      {/* Subtle gradient background for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-highlight/10 opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-8 xs:flex-row">
          <div className={`order-last xs:order-first xs:w-1/2 w-full mt-4 xs:mt-0 text-center xs:text-left ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
            <div className="space-y-4 sm:space-y-6">
              <div className="opacity-0 animate-slideUp animate-delay-100">
                <div className="inline-block px-3 py-1 rounded-full bg-highlight/10 text-highlight text-sm font-poppins">
                  Hello, I'm
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight opacity-0 animate-slideUp animate-delay-200">
                <span className="font-dancing-script">Suhas</span> <span className="font-dancing-script text-gradient">B S</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-montserrat opacity-0 animate-slideUp animate-delay-300">
                Student & Technology Enthusiast
              </p>
              
              <p className="text-sm sm:text-base text-gray-400 max-w-md font-poppins opacity-0 animate-slideUp animate-delay-400">
                Exploring the intersection of technology and creativity to build innovative solutions.
              </p>
              
              <div className="pt-4 opacity-0 animate-slideUp animate-delay-500">
                <Button className="bg-highlight hover:bg-highlight-dark text-white rounded-full px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-poppins transition-all duration-300 transform hover:scale-105">
                  Get in touch <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`order-first xs:order-last xs:w-1/2 w-full mb-4 xs:mb-0 opacity-0 animate-slideInRight animate-delay-300`}>
            {/* Hero image with enhanced sizing and glow effect */}
            <div className="w-full max-w-xs sm:max-w-md mx-auto xs:mx-0 xs:ml-auto relative">
              {/* Enhanced glow behind the image */}
              <div className="absolute -inset-4 bg-highlight/20 blur-3xl rounded-full"></div>
              
              <img 
                src="/lovable-uploads/1bd83404-309d-45b9-888b-a40c0e59b6fd.png" 
                alt="Suhas B S" 
                className="w-full h-auto object-contain relative z-10 transform-gpu scale-100 sm:scale-125 lg:scale-150" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add subtle animated particles or light effects */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-highlight/5 to-transparent opacity-30"></div>
    </section>
  );
};

export default Hero;
