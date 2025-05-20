import { useState, useEffect, useRef, useMemo } from "react";
import {
  Award,
  Globe,
  Code,
  BarChart,
  Palette,
  Video,
  MessageSquare,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Progress } from "./ui/progress";

interface Skill {
  id: number;
  name: string;
  proficiency: number;
  category: string;
  icon: React.ReactNode;
  description: string;
}

const SkillsSection = () => {
  const { t, language } = useLanguage();

  /* ──────────────────────────────
     STATE
  ────────────────────────────── */
  const [selectedCategory, setSelectedCategory] = useState<"all" | string>(
    "all"
  );
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(
    () => new Set()
  );

  // Salviamo tutti i timeout così possiamo cancellarli
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ──────────────────────────────
     DATI (ricreati a ogni render per cambiare lingua)
  ────────────────────────────── */
  const skills: Skill[] = [
    {
      id: 1,
      name: "Teamwork",
      proficiency: 100,
      category: "teamwork",
      icon: <Users className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "Je m'épanouis dans les environnements collaboratifs, où l'échange d'idées et le soutien mutuel créent de belles choses."
          : "I thrive in collaborative environments, where sharing ideas and supporting others creates meaningful outcomes.",
    },
    {
      id: 2,
      name: "Social Media Management",
      proficiency: 90,
      category: "social",
      icon: <MessageSquare className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "De la stratégie à la création de contenu, je sais comment faire rayonner une marque sur les réseaux avec authenticité."
          : "From strategy to content creation, I know how to make brands shine online through genuine and engaging social campaigns.",
    },
    {
      id: 3,
      name: "Data Analysis",
      proficiency: 65,
      category: "data",
      icon: <BarChart className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "Curieuse et analytique, j'aime transformer les données en idées utiles pour mieux communiquer."
          : "I'm curious and analytical. I enjoy translating numbers into insights that support smart communication decisions.",
    },
    {
      id: 4,
      name: "Visual Creation",
      proficiency: 80,
      category: "visual",
      icon: <Palette className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "Le design, c'est mon terrain de jeu. J’aime créer des visuels chaleureux, modernes et pleins de sens."
          : "Design is where I express my creativity. I bring ideas to life through visuals that feel warm, modern, and thoughtful.",
    },
    {
      id: 5,
      name: "Video Creation",
      proficiency: 80,
      category: "video",
      icon: <Video className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "J'adore raconter des histoires en mouvement. Je monte mes vidéos avec émotion, rythme et toujours une petite touche élégante."
          : "I love telling stories through motion. I edit with emotion, rhythm, and always a touch of elegance.",
    },
    {
      id: 6,
      name: "SEO",
      proficiency: 70,
      category: "seo",
      icon: <Globe className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "Comprendre comment le contenu vit sur le web, c'est essentiel. J’optimise toujours avec clarté et intention."
          : "Understanding how content lives and thrives online is part of my mindset. I optimize with intention and clarity.",
    },
    {
      id: 7,
      name: "Content Writing",
      proficiency: 80,
      category: "writing",
      icon: <Code className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "Les mots sont mon terrain d’expression. J’écris avec sincérité, justesse, et toujours en pensant à la personne qui lit."
          : "Words are my playground. I write with heart, purpose, and always keep the reader in mind.",
    },
    {
      id: 8,
      name: "Adobe Creative Suite",
      proficiency: 85,
      category: "tools",
      icon: <Palette className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "De Photoshop à After Effects, la suite Adobe me permet de transformer chaque idée créative en résultat concret."
          : "From Photoshop to After Effects, Adobe tools help me shape every creative idea I have with precision.",
    },
    {
      id: 9,
      name: "Marketing Strategy",
      proficiency: 75,
      category: "marketing",
      icon: <Award className="w-5 h-5 text-pink-dark" />,
      description:
        language === "fr"
          ? "Derrière chaque belle campagne, il y a une stratégie. J’aime créer des plans qui relient créativité et efficacité."
          : "Behind every beautiful campaign, there’s a strategy. I craft plans that align creativity with impact.",
    },
  ];

  /* ──────────────────────────────
     SKILL VISIBILI
  ────────────────────────────── */
  const visibleSkills = useMemo(
    () =>
      (selectedCategory === "all"
        ? skills
        : skills.filter((s) => s.category === selectedCategory)
      ).filter(Boolean),
    [selectedCategory, language] // language fa rigenerare le description
  );

  /* ──────────────────────────────
     IntersectionObserver
  ────────────────────────────── */
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ──────────────────────────────
     Animazione progress bar
  ────────────────────────────── */
  useEffect(() => {
    if (!isVisible || visibleSkills.length === 0) return;

    // reset
    setAnimatedSkills(new Set());
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    visibleSkills.forEach((skill, idx) => {
      const timeout = setTimeout(() => {
        setAnimatedSkills((prev) => {
          const next = new Set(prev);
          if (skill?.id !== undefined) next.add(skill.id);
          return next;
        });
      }, 200 + idx * 200);

      timeoutsRef.current.push(timeout);
    });

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [isVisible, visibleSkills]);

  /* ──────────────────────────────
     Blocco scroll quando modale aperto
  ────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = selectedSkill ? "hidden" : "auto";

    // cleanup: ripristina sempre lo scroll
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedSkill]);

  /* ──────────────────────────────
     RENDER
  ────────────────────────────── */
  return (
    <section id="skills" className="py-20 bg-beige-light">
      <div ref={sectionRef} className="section-container">
        {/* HEADER */}
        <span
          className={`text-pink-dark font-medium block transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("skills.subtitle")}
        </span>

        <h2
          className={`section-title mt-2 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("skills.title")}
        </h2>

        {/* GRIGLIA SKILL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {visibleSkills.map((skill, idx) => {
            if (!skill) return null;

            const delayMs = 200 + idx * 100;
            const isAnimated = animatedSkills.has(skill.id);

            return (
              <div
                key={skill.id}
                className={`bg-offwhite rounded-lg p-6 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delayMs}ms` }}
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-pink-light w-10 h-10 rounded-full flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium cursor-pointer">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium">
                    {skill.proficiency}%
                  </span>
                </div>

                <Progress
                  value={isAnimated ? skill.proficiency : 0}
                  className="h-2 bg-beige-light"
                />
              </div>
            );
          })}
        </div>

        {/* MODALE */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white max-w-md p-6 rounded-xl shadow-lg text-center relative">
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl"
              >
                ×
              </button>

              <div className="mb-4">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                  {selectedSkill.icon}
                </div>
                <h3 className="text-xl font-bold text-pink-dark mb-2">
                  {selectedSkill.name}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
