
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "Today is challenging, and tomorrow may be even tougher, but success awaits the day after. While many may choose to give up by tomorrow evening, I am determined to persevere and reach that success.",
    author: "Suhas B S",
    position: "Personal Philosophy"
  },
  {
    id: 2,
    quote: "When something is important enough, you do it even if the odds are not in your favour.",
    author: "Elon Musk",
    position: "CEO, Tesla & SpaceX"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Kind <span className="text-gradient">Words</span>
          </h2>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            <div className="text-4xl text-highlight mb-6">"</div>
            
            <div className="min-h-[160px] flex flex-col justify-center">
              <p className="text-lg md:text-xl text-white mb-8 italic">
                {testimonials[activeIndex].quote}
              </p>
              
              <div>
                <p className="font-medium text-white">{testimonials[activeIndex].author}</p>
                <p className="text-gray-400">{testimonials[activeIndex].position}</p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
