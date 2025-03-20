
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-black">
      {/* Subtle gradient background for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-highlight/10 opacity-80"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className={`w-full lg:w-1/2 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
            <div className="space-y-6">
              <div className="opacity-0 animate-slideUp animate-delay-100">
                <div className="inline-block px-3 py-1 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-4">
                  Hello, I'm
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight opacity-0 animate-slideUp animate-delay-200">
                Suhas <span className="text-gradient">B S</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 opacity-0 animate-slideUp animate-delay-300">
                Student & Technology Enthusiast
              </p>
              
              <p className="text-gray-400 max-w-md opacity-0 animate-slideUp animate-delay-400">
                Exploring the intersection of technology and creativity to build innovative solutions.
              </p>
              
              <div className="pt-4 opacity-0 animate-slideUp animate-delay-500">
                <Button className="bg-highlight hover:bg-highlight-dark text-white rounded-full px-8 py-6">
                  Get in touch <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 relative opacity-0 animate-slideInRight animate-delay-300 ${isMobile ? 'mt-10' : ''}`}>
            {/* Hero image with enhanced sizing and glow effect */}
            <div className="w-full h-full mx-auto relative">
              {/* Enhanced glow behind the image */}
              <div className="absolute -inset-4 bg-highlight/20 blur-3xl rounded-full"></div>
              
              <img 
                src="/lovable-uploads/1bd83404-309d-45b9-888b-a40c0e59b6fd.png" 
                alt="Suhas B S" 
                className="w-full h-auto object-contain relative z-10 scale-150 transform-gpu" 
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
