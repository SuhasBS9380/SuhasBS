
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
    url: 'https://github.com/SuhasBS9380',
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
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-montserrat">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className={cn(
          "grid grid-cols-1 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all"
                  aria-label={link.ariaLabel}
                >
                  <div className="flex items-center space-x-3">
                    {link.icon}
                    <span className="text-white font-montserrat">{link.name}</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-500" />
                </a>
              ))}
            </div>

            <div className="my-8 border-t border-gray-800"></div>

            <a 
              href="mailto:suhasbs229@gmail.com"
              className="flex items-center justify-center space-x-2 bg-highlight hover:bg-highlight-dark text-white rounded-lg px-6 py-4 transition-all w-full font-montserrat"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
