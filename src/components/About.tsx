
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Lightbulb, Users } from 'lucide-react';

const skills = [
  { name: "Python", level: 85, icon: <Code className="w-5 h-5" />, color: "#8B5CF6" },
  { name: "Java", level: 80, icon: <Server className="w-5 h-5" />, color: "#0EA5E9" },
  { name: "JavaScript", level: 75, icon: <Cpu className="w-5 h-5" />, color: "#F97316" },
  { name: "SQL", level: 70, icon: <Database className="w-5 h-5" />, color: "#9b87f5" },
  { name: "Problem Solving", level: 90, icon: <Lightbulb className="w-5 h-5" />, color: "#D946EF" },
  { name: "Team Leadership", level: 85, icon: <Users className="w-5 h-5" />, color: "#7E69AB" },
];

const tools = [
  { name: "VS Code", icon: "💻", color: "#0EA5E9" },
  { name: "GitHub", icon: "📁", color: "#8B5CF6" },
  { name: "Lovable", icon: "🛠️", color: "#F97316" },
  { name: "AI Tools", icon: "🤖", color: "#D946EF" },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

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

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-6">Tools I Use</h4>
              {isVisible && (
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {tools.map((tool, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                      className="relative overflow-hidden"
                    >
                      <div 
                        className="glass-card p-6 rounded-xl text-white flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{
                          background: hoveredTool === tool.name 
                            ? `linear-gradient(135deg, ${tool.color}33, ${tool.color}11)`
                            : 'rgba(255, 255, 255, 0.05)',
                          borderBottom: `3px solid ${tool.color}`
                        }}
                      >
                        <div className="text-3xl mb-2 relative">
                          {tool.icon}
                          {hoveredTool === tool.name && (
                            <motion.div 
                              className="absolute inset-0 blur-md"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.6 }}
                              exit={{ opacity: 0 }}
                              style={{ background: tool.color, filter: 'blur(8px)' }}
                            />
                          )}
                        </div>
                        <div className="font-medium">{tool.name}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-2xl font-semibold text-white mb-8">My Skills</h3>
            
            {isVisible && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative overflow-hidden"
                  >
                    <div 
                      className="glass-card p-6 rounded-xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
                      style={{
                        background: hoveredSkill === skill.name 
                          ? `linear-gradient(135deg, ${skill.color}33, ${skill.color}11)`
                          : 'rgba(255, 255, 255, 0.05)',
                        borderLeft: `4px solid ${skill.color}`
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ background: `${skill.color}33` }}
                        >
                          <div style={{ color: skill.color }}>{skill.icon}</div>
                        </div>
                        <h4 className="text-white font-medium">{skill.name}</h4>
                      </div>
                      
                      <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden mb-3">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ background: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
                        >
                          {hoveredSkill === skill.name && (
                            <motion.div 
                              className="absolute inset-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              style={{ 
                                background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                                filter: 'brightness(1.2)'
                              }}
                            />
                          )}
                        </motion.div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Beginner</span>
                        <span 
                          className="font-semibold"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </span>
                        <span className="text-gray-400">Expert</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-4">Experience</h4>
              {isVisible && (
                <motion.div 
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-highlight font-medium">Fresher</span>
                    <p className="text-gray-300">10+ Projects Completed</p>
                    <p className="text-gray-400 text-sm mt-2">
                      While I'm new to the professional world, I've built a strong foundation through numerous personal and academic projects that demonstrate my technical abilities and problem-solving skills.
                    </p>
                  </div>
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
