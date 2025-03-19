
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product catalog, and payment integration.",
    image: "https://placehold.co/600x400/111111/FFFFFF?text=E-Commerce+Platform",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "https://placehold.co/600x400/111111/FFFFFF?text=Data+Dashboard",
    tags: ["Python", "D3.js", "SQL"]
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    description: "Intelligent conversational agent built to assist users with common queries and tasks.",
    image: "https://placehold.co/600x400/111111/FFFFFF?text=AI+Chatbot",
    tags: ["Python", "TensorFlow", "NLP"]
  }
];

const Showcases = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('showcases');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcases" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-gradient">Showcases</span>
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevProject}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextProject}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div>
            <div className="glass-card p-2 rounded-xl overflow-hidden">
              <img 
                src={projects[activeIndex].image} 
                alt={projects[activeIndex].title} 
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-highlight/10 text-highlight text-sm font-medium">
                Project {activeIndex + 1}/{projects.length}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {projects[activeIndex].title}
              </h3>
              
              <p className="text-gray-300">
                {projects[activeIndex].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcases;
