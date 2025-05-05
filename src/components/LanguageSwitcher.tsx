
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        className={`text-sm px-2 py-1 rounded-md transition-colors ${
          language === "en" 
            ? "bg-pink-DEFAULT text-white font-medium" 
            : "hover:bg-pink-light/50"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <div className="h-4 w-px bg-gray-300"></div>
      <button
        className={`text-sm px-2 py-1 rounded-md transition-colors ${
          language === "fr" 
            ? "bg-pink-DEFAULT text-white font-medium" 
            : "hover:bg-pink-light/50"
        }`}
        onClick={() => setLanguage("fr")}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
