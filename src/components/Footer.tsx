
import { cn } from '@/lib/utils';
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-pink-light/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Barbara Chertier. {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-['Dancing_Script'] text-2xl text-primary">Barbara Chertier</span>
            <div className="h-6 border-l border-muted hidden md:block"></div>
            <div className="flex gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-pink-dark transition-colors">{t('nav.about')}</a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-pink-dark transition-colors">{t('nav.portfolio')}</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-pink-dark transition-colors">{t('nav.contact')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
