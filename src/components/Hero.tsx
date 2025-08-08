import { useState, useEffect } from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const isMobile = useIsMobile();

  const rotatingTexts = [
    { text: "coder", color: "text-orange-500", icon: "💻" },
    { text: "developer", color: "text-blue-500", icon: "🚀" },
    { text: "creative", color: "text-green-500", icon: "🎨" },
    { text: "innovator", color: "text-purple-500", icon: "⚡" },
    { text: "problem solver", color: "text-yellow-500", icon: "🧩" },
    { text: "tech enthusiast", color: "text-pink-500", icon: "🔥" }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
  <section id="home" className="relative min-h-screen flex items-center pt-20 pb-6 overflow-hidden bg-black">
      {/* Background Image - Increased opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat opacity-40 z-0"
        style={{
          backgroundImage: `url('/lovable-uploads/1bd83404-309d-45b9-888b-a40c0e59b6fd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'center' : 'center 10%',
          backgroundRepeat: 'no-repeat',
          top: '80px' // Start below navbar
        }}
      ></div>
      
      {/* Overlay - Reduced opacity for better image visibility */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className={`w-full lg:w-1/2 space-y-8 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
            <div className="space-y-6">
              <div className="opacity-0 animate-slideUp animate-delay-100">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex items-center">
                  Hello.
                  <div className="w-3 h-3 bg-highlight rounded-full ml-4"></div>
                </h1>
              </div>
              
              <div className="opacity-0 animate-slideUp animate-delay-200">
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-highlight mr-4"></div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    I'm <span className="text-highlight">Suhas</span>
                  </h2>
                </div>
              </div>
              
              <div className="opacity-0 animate-slideUp animate-delay-300">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium">
                  Software Developer
                </h3>
              </div>
              
              <div className="opacity-0 animate-slideUp animate-delay-400 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://github.com/suhasbs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-highlight hover:bg-highlight-dark text-white rounded-lg px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    Got a project? <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                  <a 
                    href="#resume" 
                    className="border-gray-600 text-white hover:bg-gray-800 rounded-lg px-8 py-4 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    My resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hidden on smaller screens */}
          <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end opacity-0 animate-slideInRight animate-delay-300 relative z-30 hidden lg:flex`}>
            <div className="relative w-full">
              {/* Horizontal Scrolling Text Container */}
              <div className="text-center lg:text-right">
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  {rotatingTexts.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-all duration-1000 ease-in-out ${
                        index === currentTextIndex 
                          ? 'opacity-100 transform translate-x-0' 
                          : index < currentTextIndex 
                            ? 'opacity-0 transform -translate-x-full' 
                            : 'opacity-0 transform translate-x-full'
                      }`}
                    >
                      <div className="bg-black/80 p-8 rounded-xl shadow-2xl min-w-max">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono flex items-center gap-6 whitespace-nowrap">
                          <span className="text-3xl md:text-4xl lg:text-5xl animate-bounce">
                            {item.icon}
                          </span>
                          <div className="flex items-center">
                            <span className="text-white text-2xl md:text-3xl lg:text-4xl">&lt;</span>
                            <span className={`${item.color} animate-pulse font-extrabold mx-3 text-2xl md:text-3xl lg:text-4xl`}>
                              {item.text}
                            </span>
                            <span className="text-white text-2xl md:text-3xl lg:text-4xl">&gt;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Progress Dots */}
                <div className="flex justify-center lg:justify-end gap-3 mt-8">
                  {rotatingTexts.map((_, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentTextIndex 
                          ? 'bg-highlight scale-125' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Interactive Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-highlight/40 rounded-full animate-float cursor-pointer hover:bg-highlight/70 transition-all duration-300"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-500/40 rounded-full animate-float cursor-pointer hover:bg-blue-500/70 transition-all duration-300" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-5 w-12 h-12 bg-green-500/40 rounded-full animate-float cursor-pointer hover:bg-green-500/70 transition-all duration-300" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-highlight/5 to-transparent opacity-30 z-10"></div>
    </section>
    );
  };
  
  export default Hero;