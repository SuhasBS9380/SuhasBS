
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Monitor, Cloud, Code, Trophy, Award, Users, Target, Star } from 'lucide-react';

const services = [
  {
    title: "Website Development",
    description: "Creating responsive and modern web applications",
    icon: <Monitor className="h-8 w-8 text-highlight" />
  },
  {
    title: "Website Hosting",
    description: "Deploying and maintaining web applications",
    icon: <Cloud className="h-8 w-8 text-highlight" />
  },
  {
    title: "Complex Web Application Development",
    description: "Building robust and scalable web applications",
    icon: <Code className="h-8 w-8 text-highlight" />
  }
];

const stats = [
  { number: "10+", label: "Completed Projects" },
  { number: "2+", label: "Internship Experience" }
];

const achievements = [
  {
    title: "100+ LeetCode Problems",
    subtitle: "Algorithmic Excellence",
    description: "Enhanced problem-solving skills",
    icon: <Trophy className="h-8 w-8" />,
    delay: 0
  },
  {
    title: "Team Leadership",
    subtitle: "Samsung Prism Internship",
    description: "Managed team achieving project goals",
    icon: <Users className="h-8 w-8" />,
    delay: 0.2
  },
  {
    title: "Hackathon Participant",
    subtitle: "Multiple Events",
    description: "Rapid development experience",
    icon: <Award className="h-8 w-8" />,
    delay: 0.4
  },
  {
    title: "Academic Excellence",
    subtitle: "94% Class XII",
    description: "Strong academic foundation",
    icon: <Target className="h-8 w-8" />,
    delay: 0.6
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-highlight">me</span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 items-start">
          <div className={cn(
            "w-full lg:w-3/5 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="space-y-6 text-gray-300">
              <p>
                With a passion for exploring the dynamic intersection of technology and creativity, I am currently advancing my skills as a student at the Cambridge Institute of Technology, Bangalore. This institution is renowned for cultivating the next generation of tech innovators.
              </p>
              <p>
                My journey in the tech world is driven by a deep curiosity and a commitment to mastering various programming languages, including Python, Java, SQL, and JavaScript. I am particularly interested in leveraging these skills to create impactful solutions that enhance user experiences and optimize performance.
              </p>
              <p>
                I thrive in environments that challenge my problem-solving abilities and allow me to lead teams towards achieving common goals. My natural inclination for leadership and collaboration enables me to transform complex challenges into streamlined, effective solutions.
              </p>
            </div>

            {/* Services Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white mb-8">Services</h3>
              {isVisible && (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {services.map((service, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="service-card"
                    >
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

          </div>

          <div className={cn(
            "w-full lg:w-2/5 transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="relative w-full max-w-[300px] mx-auto aspect-square rounded-full bg-black border-4 border-highlight/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-highlight/5 to-black/80"></div>
              <img 
                src="/lovable-uploads/1bd83404-309d-45b9-888b-a40c0e59b6fd.png" 
                alt="Suhas B S" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            {/* Stats Section */}
            <div className="mt-12">
              {isVisible && (
                <motion.div 
                  className="grid grid-cols-2 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="stat-card"
                    >
                      <div className="text-3xl font-bold text-highlight mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
