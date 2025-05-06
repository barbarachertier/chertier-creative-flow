
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <Globe className="w-4 h-4 text-pink-DEFAULT" />
      <button
        className={`text-sm px-2 py-1 rounded-md transition-all duration-300 relative ${
          language === "en" 
            ? "bg-pink-DEFAULT text-white font-medium" 
            : "hover:bg-pink-light/50"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
        {language === "en" && (
          <motion.div 
            layoutId="languageIndicator"
            className="absolute inset-0 bg-pink-DEFAULT -z-10 rounded-md"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
      <div className="h-4 w-px bg-gray-300"></div>
      <button
        className={`text-sm px-2 py-1 rounded-md transition-all duration-300 relative ${
          language === "fr" 
            ? "bg-pink-DEFAULT text-white font-medium" 
            : "hover:bg-pink-light/50"
        }`}
        onClick={() => setLanguage("fr")}
      >
        FR
        {language === "fr" && (
          <motion.div 
            layoutId="languageIndicator"
            className="absolute inset-0 bg-pink-DEFAULT -z-10 rounded-md"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
