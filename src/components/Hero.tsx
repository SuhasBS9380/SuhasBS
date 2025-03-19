
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
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
          
          <div className="relative lg:justify-self-end opacity-0 animate-slideInRight animate-delay-300">
            <div className="w-full h-full max-w-md mx-auto">
              <img 
                src="/lovable-uploads/2bcec9e6-c7b9-458a-a6b6-0f903354dd27.png" 
                alt="Suhas B S" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
