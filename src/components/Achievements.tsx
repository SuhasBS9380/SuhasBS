import { motion } from 'framer-motion';
import { Trophy, Users, Award, Target, Star } from 'lucide-react';

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

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Achievements <span className="text-highlight">& Awards</span>
          </h2>
        </div>
        <div className="relative flex flex-col lg:flex-row gap-8">
          {/* Left Spacer for right alignment on large screens */}
          <div className="hidden lg:block lg:w-1/12"></div>
          {/* Achievements Cards */}
          <div className="relative w-full lg:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: achievement.delay,
                  type: "spring",
                  stiffness: 100
                }}
                className={`group relative ${index % 2 === 1 ? 'md:mt-12' : ''}`}
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-highlight/30 rounded-2xl p-8 hover:border-highlight/60 transition-all duration-500 hover:scale-105 shadow-xl">
                  {/* Orange gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-highlight to-orange-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold text-white group-hover:text-highlight transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-highlight font-semibold text-base">
                        {achievement.subtitle}
                      </p>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-highlight rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-highlight/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right Spacer for margin on large screens */}
          <div className="hidden lg:block lg:w-1/12"></div>
        </div>
        {/* Bottom decorative element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-highlight">
            <Star className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-medium">Excellence in Every Endeavor</span>
            <Star className="h-5 w-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
