
import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-pink-light/30">
      <div 
        ref={sectionRef}
        className="section-container"
      >
        <span className={`text-pink-dark font-medium block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Get in Touch</span>
        <h2 className={`section-title mt-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSubmitted ? (
                <div className="bg-pink-light/50 border border-pink-DEFAULT p-4 rounded-lg text-center">
                  <p className="font-medium text-primary">Thank you for your message!</p>
                  <p className="text-sm text-muted-foreground mt-1">I'll be in touch with you shortly.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-offwhite border border-beige-dark/20 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-DEFAULT"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-offwhite border border-beige-dark/20 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-DEFAULT"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-offwhite border border-beige-dark/20 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-DEFAULT"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full py-3 rounded-md transition-all font-medium",
                        isSubmitting 
                          ? "bg-pink-light text-primary/70 cursor-not-allowed" 
                          : "bg-pink-DEFAULT hover:bg-pink-dark text-offwhite"
                      )}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
          
          {/* Contact Details */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                I'm always interested in new projects and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mt-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center mt-1">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18"
                      height="18"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Bessan, France</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:barbara@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      barbara@example.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+33600000000" className="text-muted-foreground hover:text-primary transition-colors">
                      +33 6 00 00 00 00
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-medium mb-3">Connect with me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-pink-light hover:bg-pink-DEFAULT transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a 
                    href="https://instagram.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-pink-light hover:bg-pink-DEFAULT transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
