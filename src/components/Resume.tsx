  const certifications = [
    "Programming in C Language - NPTEL, IIT Kharagpur",
    "Python Programming - Samsung Innovation Campus",
    "Samsung Prism Internship Certificate"
  ];
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Award, BookOpen, Code, Users, Target } from 'lucide-react';

const Resume = () => {
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

    const section = document.getElementById('resume');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      year: "2022-2026",
      title: "B.E. Computer Science Engineering",
      institution: "Cambridge Institute of Technology, Bangalore (VTU)",
      details: "CGPA: 8.8/10",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      year: "2020-2022",
      title: "Class XII (Science)",
      institution: "BGS Gurukula PU College",
      details: "Percentage: 94%",
      icon: <Award className="h-5 w-5" />
    },
    {
      year: "2019-2020",
      title: "Class X",
      institution: "Kanaka Vidya Samashta",
      details: "Percentage: 92%",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const experience = [
    {
      period: "2024-Present",
      title: "Java Application Development Intern",
      company: "Saskan Technologies",
      details: "Backend development for Course Management System, training tracking, user role management, course assignment logic and progress monitoring features within Agile team.",
      icon: <Code className="h-5 w-5" />
    },
    {
      period: "2023-2024",
      title: "AI/ML Intern",
      company: "Samsung Prism",
      details: "Developed AI-based image deblurring models using Python and PyTorch, managed team to deliver project milestones on time, focusing on model training and testing.",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const designSkills = [
    { name: "Web Design", percentage: 85 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "Responsive Design", percentage: 90 }
  ];

  const codingSkills = [
    { name: "Java", percentage: 85 },
    { name: "Python", percentage: 80 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "C", percentage: 70 },
    { name: "AI/ML", percentage: 75 }
  ];

  const projects = [
    {
      title: "AI-Based Image Deblurring System",
      tech: "Python, PyTorch",
      description: "AI application to restore blurred images, trained on large datasets to improve image clarity and accuracy with deep learning."
    },
    {
      title: "OfferMania E-commerce Platform",
      tech: "Node.js, Express.js",
      description: "E-commerce aggregator integrating offers from sites like Flipkart."
    },
    {
      title: "ConstroTech Solution Web Application",
      tech: "React.js, Node.js",
      description: "Web application for interior design company to showcase services and engage clients."
    },
    {
      title: "Course Management System",
      tech: "Java, MySQL",
      description: "Java-based application for admin, teacher, and student roles, enabling course management and user data access."
    }
  ];


  return (
    <div id="resume" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Resume
            <div className="w-24 h-1 bg-highlight mx-auto mt-2"></div>
          </h1>
          <p className="text-gray-400 text-lg">Software Development Enthusiast</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Contact
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-highlight" />
                  <span>+91 9380102924</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-highlight" />
                  <span>suhasbs380@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-highlight" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-highlight" />
                  <span>github.com/suhasbs</span>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Education
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-highlight/30"></div>
                
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                        <div className="text-highlight font-semibold text-sm">{item.year}</div>
                        <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.institution}</p>
                        <p className="text-highlight text-sm mt-2">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Experience
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-highlight/30"></div>
                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                        <div className="text-highlight font-semibold text-sm">{item.period}</div>
                        <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Certificates
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-highlight" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Coding Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Coding Skills
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="space-y-6">
                {codingSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-highlight to-orange-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Design Skills
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-highlight to-orange-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Projects
                <div className="w-12 h-0.5 bg-highlight ml-4"></div>
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-highlight text-sm mb-2">{project.tech}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
