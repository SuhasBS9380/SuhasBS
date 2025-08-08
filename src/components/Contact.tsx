import { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Github 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/suhas-b-s-01500427a',
    icon: <Linkedin className="h-5 w-5" />,
    ariaLabel: 'LinkedIn Profile'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/suhas_rock_1/',
    icon: <Instagram className="h-5 w-5" />,
    ariaLabel: 'Instagram Profile'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/suhasbs',
    icon: <Github className="h-5 w-5" />,
    ariaLabel: 'GitHub Profile'
  }
];

const Contact = () => {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get in <span className="text-highlight">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className={cn(
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="max-w-4xl mx-auto">
            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-highlight/50 hover:bg-gray-800/50 transition-all duration-300"
                  aria-label={link.ariaLabel}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-highlight group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className="text-white font-medium">{link.name}</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-highlight transition-colors" />
                </a>
              ))}
            </div>

            {/* Email Section */}
            <div className="text-center">
              <div className="inline-block">
                <a 
                  href="mailto:suhasbs229@gmail.com"
                  className="inline-flex items-center space-x-3 bg-highlight hover:bg-highlight-dark text-white rounded-lg px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
