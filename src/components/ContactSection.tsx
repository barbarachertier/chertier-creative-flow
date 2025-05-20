import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-pink-light/30">
      <div ref={sectionRef} className="section-container">
        <span
          className={`text-pink-dark font-medium block transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('contact.subtitle')}
        </span>
        <h2
          className={`section-title mt-2 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('contact.title')}
        </h2>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-6">
            {t('contact.intro') && (
              <p className="text-muted-foreground">{t('contact.intro')}</p>
            )}

            <div className="space-y-4 mt-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.location')}</h3>
                  <p className="text-muted-foreground">
                    28 chemin de la renga, 34550 Bessan, France
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:barbarachertier1@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    barbarachertier1@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">
                    {language === 'en' ? 'Phone' : 'Téléphone'}
                  </h3>
                  <a
                    href="tel:+33745226707"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +33 7 45 22 67 07
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/barbara-chertier/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-pink-light hover:bg-pink-DEFAULT transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <div>
                  <h3 className="font-medium">
                    {language === 'en' ? 'Linkedin' : 'Linkedin'}
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/barbara-chertier/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    https://www.linkedin.com/in/barbara-chertier/
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
