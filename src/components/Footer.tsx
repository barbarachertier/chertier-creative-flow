
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-green-DEFAULT/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Barbara Chertier. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-['Dancing_Script'] text-2xl text-primary">Barbara Chertier</span>
            <div className="h-6 border-l border-muted hidden md:block"></div>
            <div className="flex gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
