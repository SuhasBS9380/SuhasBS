
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Lightbulb, Users } from 'lucide-react';

const skills = [
  { name: "Python", icon: "🐍", color: "#8B5CF6" },
  { name: "Java", icon: "☕", color: "#0EA5E9" },
  { name: "JavaScript", icon: "📜", color: "#F97316" },
  { name: "SQL", icon: "🗄️", color: "#9b87f5" },
  { name: "Problem Solving", icon: "🧩", color: "#D946EF" },
  { name: "Team Leadership", icon: "👥", color: "#7E69AB" },
];

const tools = [
  { name: "VS Code", icon: "💻", color: "#0EA5E9" },
  { name: "GitHub", icon: "📁", color: "#8B5CF6" },
  { name: "Lovable", icon: "🛠️", color: "#F97316" },
  { name: "AI Tools", icon: "🤖", color: "#D946EF" },
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
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                With a passion for exploring the dynamic intersection of technology and creativity, I am currently advancing my skills as a student at the Cambridge Institute of Technology, Bangalore. This institution is renowned for cultivating the next generation of tech innovators.
              </p>
              <p>
                My journey in the tech world is driven by a deep curiosity and a commitment to mastering various programming languages, including Python, Java, SQL, and JavaScript. I am particularly interested in leveraging these skills to create impactful solutions that enhance user experiences and optimize performance.
              </p>
              <p>
                I thrive in environments that challenge my problem-solving abilities and allow me to lead teams towards achieving common goals. My natural inclination for leadership and collaboration enables me to transform complex challenges into streamlined, effective solutions.
              </p>
              <p>
                As I continue to expand my knowledge and seek new opportunities, I am eager to apply my skills in innovative ways that contribute to growth and excellence. I am always open to connecting with like-minded individuals and exploring potential projects or collaborations where my expertise can add value.
              </p>
            </div>
          </div>

          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="relative w-full aspect-square rounded-full bg-black border-4 border-highlight/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-highlight/5 to-black/80"></div>
              <img 
                src="/lovable-uploads/1bd83404-309d-45b9-888b-a40c0e59b6fd.png" 
                alt="Suhas B S" 
                className="w-3/4 h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8">My Skills</h3>
          {isVisible && (
            <motion.div 
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="glass-card px-4 py-3 rounded-full flex items-center gap-2"
                  style={{ borderLeft: `3px solid ${skill.color}` }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Tools</h3>
          {isVisible && (
            <motion.div 
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {tools.map((tool, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="glass-card px-4 py-3 rounded-full flex items-center gap-2"
                  style={{ borderLeft: `3px solid ${tool.color}` }}
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="text-white font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Projects</h3>
          {isVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-highlight font-medium">10+ Projects Completed</span>
                <p className="text-gray-300">Including web applications, data analysis, and AI implementations</p>
                <p className="text-gray-400 text-sm mt-2">
                  I've built a strong foundation through numerous personal and academic projects that demonstrate my technical abilities and problem-solving skills.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
