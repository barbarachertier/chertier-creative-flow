import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
    >
      <Globe className="w-5 h-5 text-pink-200" />
      {languages.map(({ code, label }) => (
        <motion.button
          key={code}
          onClick={() => setLanguage(code as Language)}
          className={`relative text-sm px-3 py-1 transition-colors duration-300 focus:outline-none
            ${language === code
              ? 'text-pink-200 font-bold'
              : 'text-gray-600 hover:text-pink-300'
            }`}
          whileTap={{ scale: 0.9 }}
        >
          {label}
          {language === code && (
            <motion.span
              layoutId="languageIndicator"
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-6 bg-pink-200 rounded-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
