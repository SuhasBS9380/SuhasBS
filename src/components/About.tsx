
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Lightbulb, Users } from 'lucide-react';

const skills = [
  { name: "Python", level: 85, icon: <Code className="w-5 h-5" /> },
  { name: "Java", level: 80, icon: <Server className="w-5 h-5" /> },
  { name: "JavaScript", level: 75, icon: <Cpu className="w-5 h-5" /> },
  { name: "SQL", level: 70, icon: <Database className="w-5 h-5" /> },
  { name: "Problem Solving", level: 90, icon: <Lightbulb className="w-5 h-5" /> },
  { name: "Team Leadership", level: 85, icon: <Users className="w-5 h-5" /> },
];

const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "GitHub", icon: "📁" },
  { name: "Lovable", icon: "🛠️" },
  { name: "AI Tools", icon: "🤖" },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Tools I Use</h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="glass-card px-4 py-3 rounded-lg text-white flex items-center gap-2 hover:bg-highlight/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-2xl font-semibold text-white mb-8">My Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl hover:bg-highlight/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-highlight/20 text-highlight">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-medium">{skill.name}</h4>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${hoveredSkill === skill.name ? 'bg-highlight' : 'bg-gradient-to-r from-highlight to-highlight-dark'}`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Beginner</span>
                    <span className="text-sm text-gray-400 font-bold">{skill.level}%</span>
                    <span className="text-sm text-gray-400">Expert</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-4">Experience</h4>
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col space-y-2">
                  <span className="text-highlight font-medium">Fresher</span>
                  <p className="text-gray-300">10+ Projects Completed</p>
                  <p className="text-gray-400 text-sm mt-2">
                    While I'm new to the professional world, I've built a strong foundation through numerous personal and academic projects that demonstrate my technical abilities and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
