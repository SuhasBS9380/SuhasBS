
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Accessible and Inclusive",
    description: "A web application focused on creating accessible and inclusive digital experiences for all users.",
    image: "https://res.cloudinary.com/ddoiavjyy/image/upload/v1745600562/WhatsApp_Image_2025-04-25_at_22.32.35_5fb4f7ce_v7zhlf.jpg",
    link: "https://github.com/SuhasBS9380/inclusive-accessio-hackthon",
    tags: ["Node.js", "React", "API", "HTML", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Image Deblurring Project",
    description: "An AI-powered solution that uses machine learning techniques to restore and enhance blurry images.",
    image: "https://res.cloudinary.com/ddoiavjyy/image/upload/v1745600606/blurry_ih1kmh.jpg",
    link: "https://github.com/SuhasBS9380/deblur",
    tags: ["TensorFlow", "Python", "AI Libraries"]
  },
  {
    id: 3,
    title: "E-Commerce Website (Offer Mania)",
    description: "A feature-rich e-commerce platform with special focus on promotional offers and user engagement.",
    image: "https://res.cloudinary.com/ddoiavjyy/image/upload/v1745600511/Screenshot_2025-04-25_222520_hdegxt.png",
    link: "https://github.com/SuhasBS9380/offermania",
    tags: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 4,
    title: "Data Visualization Project",
    description: "Interactive data visualization tools for analyzing and presenting complex datasets in an intuitive manner.",
    image: "https://res.cloudinary.com/ddoiavjyy/image/upload/v1745600561/WhatsApp_Image_2025-04-25_at_22.32.35_fde41c8c_fcmjrj.jpg",
    link: "https://www.linkedin.com/posts/suhas-b-s-01500427a_datavisualization-python-dataanalysis-activity-7159455356362915841-ZhrH?utm_source=share&utm_medium=member_android&rcm=ACoAAEP8-xEBTKYFYpPWqUDHhEkuhjKSCuOfnEs",
    tags: ["Matplotlib", "Seaborn", "Python", "Flask"]
  },
  {
    id: 5,
    title: "DSA LeetCode Solutions",
    description: "A collection of algorithmic solutions to complex programming challenges, demonstrating problem-solving skills.",
    image: "https://res.cloudinary.com/ddoiavjyy/image/upload/v1745600509/Screenshot_2025-04-25_221827_g6747n.png",
    link: "https://leetcode.com/u/Suhas_B_S/",
    tags: ["Python", "Java", "Data Structures", "Algorithms"]
  },
  {
    id: 6,
    title: "Constro Tech Interior Website",
    description: "A modern website for an interior design company with portfolio showcase and client interaction features.",
    image: "https://res.cloudinary.com/ddoiavjyy/image/upload/v1745600511/Screenshot_2025-04-25_222852_y2cjji.png",
    link: "https://github.com/SuhasBS9380/interior-vista-design",
    tags: ["Node.js", "HTML", "Render", "Hostinger", "JavaScript"]
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
            <span className="text-highlight">Projects</span>
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

        <div 
          className={cn(
            "transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative">
              <div 
                className="w-full h-[400px] rounded-xl overflow-hidden relative"
                style={{
                  backgroundImage: `url(${projects[activeIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {projects[activeIndex].title}
                    </h3>
                    <p className="text-gray-200 mb-6 max-w-md mx-auto">
                      {projects[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-6">
                  Project {activeIndex + 1}/{projects.length}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {projects[activeIndex].title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {projects[activeIndex].description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeIndex].tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={projects[activeIndex].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-highlight hover:bg-highlight-dark text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcases;
