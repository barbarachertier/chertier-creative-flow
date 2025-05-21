import { Project } from "./types";

export const projectsData = (language: string): Project[] => [
  /* ───────────── BIG PROJECTS ───────────── */
  {
    id: "doomli-van",
    category: "bigprojects",
    title: language === "en" ? "Doomli Van Design" : "Habillage Van Doomli",
    description:
      language === "en"
        ? "More than rolling advertising, this wrap turns the van into Doomli’s travelling workspace—the place where every dog-grooming session actually happens. I managed the full pipeline: hand-sketch concepts, vector refinement, and a life-size Photoshop mock-up to test colour flow around doors and panels. Playful paw prints and crisp lettering make the service instantly clear even at street speed, while interior decals align with the exterior so clients step into a fully branded salon on wheels. Since the company has pivoted to online dog-grooming courses, the visual identity I created still anchors their new training platform—proof that strong art direction outlives its original format."
        : "Bien plus qu’un support publicitaire, ce covering transforme le van en véritable salon itinérant : c’est à l’intérieur même de ce véhicule que se déroulent les séances de toilettage. J’ai piloté l’ensemble du processus : croquis à la main, vectorisation, puis mock-up grandeur nature sous Photoshop pour valider l’enchaînement des couleurs sur portes et panneaux. Motifs de pattes ludiques et typographie lisible expliquent instantanément le service, tandis que les décors intérieurs prolongent l’expérience de marque dès que le client entre. Depuis que Doomli s’est réorienté vers la formation en ligne au toilettage, la direction artistique que j’ai conçue reste le socle visuel de la nouvelle plateforme—preuve qu’une identité forte dépasse son support d’origine.",
    images: [
      "FINAL MOCKUP.png",
      "arriere_van.png",
      "arrieredoomli.jpeg",
      "vanfinalreel.jpg"
    ],
    video: true,
    videoSrc: "transitiondoomli.mp4",
    tools: ["Photoshop", "Illustrator", "Procreate", "Canva"]
  },
  {
    id: "doomli-banner",
    category: "bigprojects",
    title: language === "en" ? "Office Banner" : "Banderole Bureaux",
    description:
      language === "en"
        ? "To mark the opening of Doomli’s first office, I produced a large-format banner designed to stop passers-by in their tracks. I first built a full Photoshop mock-up featuring our wrapped van and a smartphone screen—so the entire customer journey, from booking on the app to grooming in the van, was visualised in one scene. The final artwork blends vivid, high-contrast colours in Photoshop with rapid layout tweaks in Canva, ensuring the headline pops and the paw-print motifs guide the eye without overwhelming it. Tight deadlines meant overnight print-spec checks and precise colour proofing at a two-metre scale—proof that strong brand visuals can leap smoothly from screen to storefront."
        : "Pour l’inauguration du premier bureau Doomli, j’ai réalisé une banderole grand format pensée pour capter immédiatement l’attention. J’ai d’abord créé sous Photoshop un mock-up complet réunissant notre van habillé et un écran de téléphone, afin d’illustrer en une seule image le parcours client : réservation sur l’appli, toilettage dans le van. L’artwork final combine des couleurs vives à fort contraste dans Photoshop et un ajustement rapide de la mise en page sous Canva, de sorte que le titre accroche l’œil tandis que les motifs de pattes orientent le regard sans surcharge. Les délais serrés ont exigé une validation nocturne des spécifications d’impression et un calibrage précis des couleurs sur plus de deux mètres : la preuve qu’une identité forte passe sans accroc du digital à la vitrine physique.",
    images: ["photo téléphone final.png", "bannieredoomli.png"],
    tools: ["Photoshop", "Canva"]
  },

  /* ───────────── LOGOS ───────────── */
  {
    id: "logo-patisserie",
    category: "logo",
    title: language === "en" ? "Bakery App Logo" : "Logo Appli Pâtisserie",
    description:
      language === "en"
        ? "A pastel, playful mark designed for a bakery-finder mobile app. The icon fuses a location pin with a piping-bag silhouette, instantly signalling “find sweet treats nearby.” Soft hues and rounded letterforms strike a balance between child-like charm and upscale patisserie aesthetics."
        : "Un logo pastel et ludique pour une appli qui repère les meilleures pâtisseries. L’icône mélange le « pin » de géolocalisation et une poche à douille, symbole évident de gourmandise. Les teintes douces et les courbes arrondies créent un pont entre l’esprit enfantin et l’élégance d’une pâtisserie haut de gamme.",
    images: ["logo (1).png"],
    tools: ["Illustrator"]
  },
  {
    id: "logo-echos2pros",
    category: "logo",
    title:
      language === "en"
        ? "Échos2Pros Anniversary Logo"
        : "Logo Anniversaire Échos2Pros",
    description:
      language === "en"
        ? "Designed to celebrate two decades of Échos2Pros, this mark intertwines the digits “2” and “0” to echo the magazine’s title while fusing retro and future cues. Chunky, slightly vintage letterforms nod to the publication’s print heritage, while crisp geometric cuts and a vibrant three-colour palette push the look forward—symbolising the next 20 years of innovation. The blend of past and future strikes a festive yet professional balance, perfect for an editorial milestone."
        : "Conçu pour fêter les 20 ans d’Échos2Pros, ce logo entremêle les chiffres « 2 » et « 0 » pour rappeler le titre du magazine tout en mariant influences rétro et futuristes. Les pleins généreux à la touche vintage évoquent l’héritage papier, tandis que des coupes géométriques nettes et une palette de trois couleurs vibrantes projettent l’identité dans les 20 prochaines années. Ce dialogue entre passé et avenir crée un équilibre à la fois festif et professionnel, idéal pour marquer cette étape éditoriale.",
    images: ["logo (2).png"],
    tools: ["Illustrator"]
  },
  {
    id: "logo-la-grappe",
    category: "logo",
    title:
      language === "en" ? "La Grappe Band Logo" : "Logo Groupe La Grappe",
    description:
      language === "en"
        ? "A single logo developed in two complementary variants for a Montpellier bar-scene band. Both versions keep the same hand-drawn grape cluster at their core, but one is a bold badge for stage backdrops while the other is a lighter, linear emblem for merch and social media. Sketched in Procreate and polished in Illustrator, the pair gives the group flexible branding without losing their playful, off-beat vibe."
        : "Un logo unique décliné en deux variantes complémentaires pour un groupe qui anime la scène des bars montpelliérains. Les deux versions conservent la même grappe stylisée dessinée à la main ; l’une, plus massive, sert de badge pour les fonds de scène, l’autre, plus fine, s’adapte au merchandising et aux réseaux sociaux. Esquissé sur Procreate puis vectorisé dans Illustrator, ce duo offre une identité modulable tout en préservant l’esprit décalé et convivial du groupe.",
    images: ["Logo la grappe.png", "Logo la grappe_2.png"],
    tools: ["Procreate", "Illustrator", "Canva"]
  },

  /* ───────────── MAGAZINE ───────────── */
  {
    id: "echos2pros-magazine",
    category: "magazine",
    title: language === "en" ? "Échos2Pros Magazine" : "Magazine Échos2Pros",
    description:
      language === "en"
        ? `For the 20th-anniversary edition of Échos2Pros—a 100-page magazine by the Master Infocom at Paul Valéry University—our three-designer team delivered a full editorial revamp. Initially in charge of original sections (games, photo spreads, thematic dossiers), I soon handled layout, illustrations, infographics, printer liaison, and faculty approvals. Balancing the project with my work-study job, weekend shifts, finals and thesis deadlines required razor-sharp organization. Using InDesign, Illustrator, Photoshop and Procreate, we produced a vibrant, cohesive publication celebrating two decades of journalistic exploration.`
        : `Pour les 20 ans d’Échos2Pros—magazine de plus de 100 pages du Master Infocom de l’Université Paul Valéry—notre trio de graphistes a réalisé une refonte complète. Chargée d’abord des pages originales (jeux, photos, dossiers), j’ai rapidement pris en main la mise en page, les illustrations, les infographies, le contact imprimeur et les validations pédagogiques. Conjuguant ce chantier avec mon alternance, mes week-ends de travail, mes partiels et mon mémoire, j’ai dû m’organiser au millimètre. Grâce à InDesign, Illustrator, Photoshop et Procreate, nous avons livré une publication dynamique et cohérente, digne de deux décennies de réflexions en communication.`,
    images: ["échos2pros.png"],
    link: "https://www.calameo.com/read/0073678434477e5d4c24f",
    tools: ["InDesign", "Photoshop", "Illustrator", "Procreate"]
  },

  /* ───────────── VIDEOS ───────────── */
  {
    id: "storvix-video",
    category: "video",
    title:
      language === "en" ? "Storvix Corporate Video" : "Vidéo Corporate Storvix",
    description:
      language === "en"
        ? `For Storvix (storvix.eu), we fine-tuned every line of script, storyboard and animation to keep pace with an ever-evolving roadmap—professional yet approachable, informative without overload. I animated data-driven graphics in After Effects and Alight Motion, then refined pacing in Premiere Pro and CapCut. I also recorded the voice-over myself in a non-native language, adding warmth and authenticity no synthetic voice could match.`
        : `Pour Storvix (storvix.eu), nous avons peaufiné chaque phrase du script, chaque storyboard et chaque animation afin de suivre une roadmap en constante évolution—professionnel tout en restant accessible, riche sans être indigeste. J’ai animé les infographies sous After Effects et Alight Motion, puis ajusté le rythme dans Premiere Pro et CapCut. J’ai également enregistré moi-même la voix-off dans une langue étrangère, apportant une authenticité qu’aucune voix synthétique ne peut égaler.`,
    images: ["storvixcover.jpg"],
    video: true,
    videoSrc: "APRIL 2025 STORViX.mp4",
    tools: ["After Effects", "Alight Motion", "Premiere Pro", "CapCut"]
  },
  
  {
    id: "racontr",
    category: "video",
    title:
      language === "en"
        ? "Interactive Documentary – Dancing with Silence"
        : "Documentaire interactif – Danser avec le silence",
    description:
      language === "en"
        ? `We set out to create an immersive webdoc for an association of deaf and hard-of-hearing dancers. I led the technical build in Racontr, storyboarding with the design and video teams, then translating sketches into interactive chapters, animated overlays and ambient soundscapes. Despite Racontr’s limits, we delivered fluid navigation and poetic pacing—and the project won first prize in competition.`
        : `Nous avons voulu créer un webdoc immersif pour une association de danseurs sourds et malentendants. J’ai assuré la réalisation technique sous Racontr, du storyboard avec les équipes graphisme et vidéo jusqu’à l’intégration des chapitres interactifs, animations et ambiances sonores. Malgré les contraintes de l’outil, nous avons obtenu une navigation fluide et un rythme poétique, et le projet a remporté le premier prix au concours.`,
    images: [
      "racontr (1).jpg",
      "racontr (2).jpg",
      "racontr (3).jpg",
      "racontr (1).PNG",
      "racontr (2).png",
      "racontr (3).png",
      "racontr (4).png"
    ],
    tools: ["Racontr"],
    link: "https://app.racontr.com/projects/une-etoile-sans-son/"
  },
  {
    id: "doomli-video",
    category: "video",
    title: language === "en" ? "Doomli Promo Video" : "Vidéo Promo Doomli",
    description:
      language === "en"
        ? "This simple intro video kicked off Doomli’s social-media presence. Made in Canva and CapCut, it explains who we are and sets the style for later UGC and tutorial posts."
        : "Cette vidéo d’introduction a marqué le lancement des réseaux sociaux de Doomli. Conçue avec Canva et montée sous CapCut, elle présente l’entreprise et fixe la ligne graphique des futurs contenus UGC et tutoriels.",
    images: ["logodoomli.png"],
    video: true,
    videoSrc: "Doomli.mp4",
    tools: ["Canva", "CapCut"]
  },

  /* ───────────── PRINT ───────────── */
  {
    id: "plantnet-poster",
    category: "print",
    title: language === "en" ? "PlantNet Poster" : "Affiche PlantNet",
    description:
      language === "en"
        ? "This eye-catching poster was created to promote PlantNet, a citizen-science app for plant identification. The design features a stylized globe-tree motif in bold green and earth tones, clear calls to action inviting users to snap photos of local flora, and concise data points on community engagement. Layout and vector work were done in Adobe Illustrator, with photo retouching in Photoshop."
        : "Cette affiche accrocheuse a été conçue pour promouvoir PlantNet, une application de science participative dédiée à l’identification des plantes. Le visuel combine un motif globe-arbre stylisé aux tons verts et terreux, des appels à l’action invitant à photographier la flore locale, et des données clés sur l’engagement citoyen. Mise en page et illustrations vectorielles sous Adobe Illustrator, retouches photo sous Photoshop.",
    images: ["print (1).jpg"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Procreate"]
  },
  {
    id: "5etoiles-visiting-card",
    category: "print",
    title:
      language === "en" ? "5 Etoiles Business Card" : "Carte de visite 5 Etoiles",
    description:
      language === "en"
        ? "These elegant business cards were designed for 5 Etoiles, a luxury glamping and retreat brand. The front features a minimalist gold line-art rendering of a Nordic bath cabin framed by palm trees on a deep navy background. On the reverse, contact details are laid out with matching gold icons and refined typography. Artwork and layout were produced in Adobe Illustrator and assembled in InDesign."
        : "Ces cartes de visite élégantes ont été pensées pour 5 Etoiles, marque de glamping et retraites de luxe. Le recto présente une illustration en lignes dorées d’un bain nordique entouré de palmiers sur fond bleu nuit. Au verso, les coordonnées s’affichent via des icônes dorées et une typographie soignée. Création des illustrations sous Adobe Illustrator, mise en page finale sous InDesign.",
    images: ["print2-1.png", "print (2).png", "print (3).png"],
    tools: ["Adobe Illustrator"]
  },
  {
    id: "doomli-flyer",
    category: "print",
    title: language === "en" ? "Doomli Flyer" : "Flyer Doomli",
    description:
      language === "en"
        ? "This vibrant one-page flyer introduces Doomli, a mobile dog-grooming service that operates while you run errands. Featuring a happy Pomeranian photo and bright orange graphic elements, the layout highlights 24/7 online booking, nearby drop-off points at favorite shops, and valuable free time. A prominent QR code drives immediate engagement. Designed in Canva and refined in Adobe Illustrator."
        : "Ce flyer dynamique d’une page présente Doomli, service de toilettage canin mobile pendant vos courses. Illustré par un spitz nain souriant et des éléments graphiques orange, il met en avant la réservation en ligne 24h/7, les points de dépôt proches de vos commerces favoris et le gain de temps. Un QR code incite à l’action immédiate. Conception sous Canva, retouches sous Adobe Illustrator.",
    images: ["print (5).png"],
    tools: ["Canva"]
  },
  {
    id: "communicants-interview-illustration",
    category: "print",
    title:
      language === "en"
        ? "Communicators Interview Illustration"
        : "Illustration d’entretien de communicants",
    description:
      language === "en"
        ? "This humorous editorial illustration imagines a 2043 job interview for communications professionals. It depicts a weary recruiter overwhelmed by an influencer candidate demanding product placements, gifted travels, and personal perks. The hand-drawn line art is blended with digital coloring to create a satirical look. Sketching and coloring were done in Procreate, with final compositing in Photoshop."
        : "Cette illustration éditoriale humoristique imagine un entretien d’embauche en 2043 pour des communicants. On y voit un recruteur épuisé face à une candidate influenceuse réclamant placements de produits, voyages offerts et avantages personnels. Le trait dessiné à la main est associé à une colorisation numérique pour un rendu satirique. Esquisses et colorisation sous Procreate, compositions finales sous Photoshop.",
    images: ["print (6).png"],
    tools: ["Procreate"]
  },

  /* ───────────── UX ───────────── */
  {
    id: "doomli-linkedin-booking",
    category: "social",
    title:
      language === "en"
        ? "Doomli LinkedIn Booking Announcement"
        : "Annonce LinkedIn Réservations Doomli",
    description:
      language === "en"
        ? "This LinkedIn announcement highlights the opening of online reservations for Doomli, our mobile dog-grooming service. The visual features founder Pierre holding a smartphone displaying the booking interface, set against the signature orange Doomli van. A bold headline “Les réservations sont ouvertes !” ensures immediate impact. Photography captured on iPhone, color-graded in Lightroom Mobile, and laid out in Canva."
        : "Cette annonce LinkedIn met en avant l’ouverture des réservations en ligne pour Doomli, notre service mobile de toilettage canin. Le visuel montre le fondateur Pierre brandissant un smartphone affichant l’interface de réservation, devant le van orange emblématique. Le titre « Les réservations sont ouvertes ! » capte instantanément l’attention. Photo prise sur iPhone, étalonnage sous Lightroom Mobile, mise en page sur Canva.",
    images: ["social media (1).png"],
    tools: ["iPhone Camera", "Lightroom Mobile", "Canva"]
  },
    /* ───────────── UX DESIGN ───────────── */
{
  id: "arc-ux",
  category: "ux",
  title:
    language === "en"
      ? "ARC – French-Series Matchmaking Prototype"
      : "ARC – Prototype de rencontre autour des séries françaises",
  description:
    language === "en"
      ? "ARC was our first hands-on project with Adobe XD and basic app-planning workflows. Inspired by Tinder’s swipe, the prototype lets French-series fans meet people who like the same shows. I built the component states, transitions and developer hand-off, and co-designed the neon ARC logo. A concise case-study PDF (research notes, wireframes, clickable screens) is displayed inline so visitors can leaf through it without leaving the site."
      : "ARC fut notre première prise en main d’Adobe XD et des fondamentaux de la conception d’application. Inspiré du swipe de Tinder, le prototype met en relation des fans de séries françaises aux goûts similaires. J’ai géré la logique des parcours, les transitions et la remise dev, et co-créé le logo néon d’ARC. Un PDF synthétique (recherche, wireframes, écrans interactifs) s’affiche directement dans une visionneuse intégrée, sans quitter le site.",
  images: ["UX.png"],
  /* 🔥 Lien direct vers le PDF : il peut être dans /public/projects/ ou ailleurs.
     Adapte le chemin selon ton build : ici on suppose /projects/ comme pour les images. */
  link: "projects/Copie de Dossier CCU - Application ARC.pdf",
  tools: ["Adobe XD", "Illustrator", "Photoshop"]
},

/* ───────────── STRATÉGIE ───────────── */
{
  id: "storvix-story-onepager",
  category: "strategy",
  title:
    language === "en"
      ? "Storvix Product One-Pager"
      : "Storvix Présentation & Produit",
  description:
    language === "en"
      ? "A concise story-telling sheet used by the sales team at trade shows. The A4 layout recalls DNA strands to echo Storvix’ bio-inspired tech, maps the 2017-2023 milestones, and distils the value props of AiRE IntelligentFiler in five dashed ‘pill’ blocks. I designed the infographic in Figma, then finalised print specs in InDesign for a 300 g/m² satin finish."
      : "Un one-pager A4 remis sur salon : narration des origines suédoises de Storvix, frise 2017-2023 en bulles turquoise et arguments clés d’AiRE IntelligentFiler déclinés en cinq « pills » pointillés. Conçu sous Figma puis finalisé dans InDesign pour un couchage satiné 300 g/m².",
  images: ["print (10).png"],
  tools: ["Figma", "Adobe InDesign", "Illustrator"]
},
{
  id: "storvix-graphic-chart",
  category: "strategy",
  title:
    language === "en"
      ? "Storvix – Mini Brand-Guidelines Chart"
      : "Storvix – Mini charte graphique",
  description:
    language === "en"
      ? "A keynote slide summarising the brand fundamentals: logo safe-zones, four-color palette (HEX 06272b, 22c1d4, f8485e, eeeeee), DNA-wave textures and Montserrat font stack. Built for quick onboarding of new resellers; the slide sits at the top of a longer PDF style-guide."
      : "Diapositive de synthèse : zones de protection logo, palette quadri/HEX (06272b – 22c1d4 – f8485e – eeeeee), textures fil-d’ADN et stack Montserrat. Sert d’onboarding express aux revendeurs ; ouvre une charte PDF complète.",
  images: ["chartstorvix.png"],
  tools: ["Figma", "Keynote"]
},
{
  id: "orco-strategy-report",
  category: "strategy",
  title:
    language === "en"
      ? "ORCO-23 – Event Strategy & Team Report"
      : "ORCO-23 – Dossier stratégie & bilan d’équipe",
  description:
    language === "en"
      ? "85-page retrospective on the 20-year anniversary of ORCO (Observatoire Régional de la Communication des Organisations). The report documents partner outreach, mailing flows, budget sheet, individual retrospectives and KPI dashboard for the 12 May 2023 conference in Montpellier."
      : "Rétrospective de 85 pages sur les 20 ans d’ORCO : prospection partenaires, logigrammes de mailings, budget détaillé, bilans individuels et tableau de bord KPI pour la journée du 12 mai 2023 à Montpellier.",
  /** ——— NOUVEAU ——— **/
  images: ["ORCO.png"],                // ➜ /public/projects/ORCO.png
  link: "ORCO.pdf",           // ➜ /public/projects/ORCO.pdf
  tools: ["InDesign", "Google Workspace"]
},
{
  id: "cemater-audit",
  category: "strategy",
  title:
    language === "en"
      ? "Cemater – Digital Visibility Audit & Inbound Plan"
      : "Cemater – Audit de visibilité & plan inbound",
  description:
    language === "en"
      ? "A 55-page consulting report for Cemater, the Occitan renewable-energy cluster. Part 1 benchmarks SEO and press coverage; Part 2 crafts three personas; Part 3 delivers an inbound funnel with content calendar and KPI grid. Produced in a six-student task-force, I led the LinkedIn analytics and designed the persona boards."
      : "Rapport de 55 pages pour Cemater, cluster occitan des ENR. Partie 1 : audit SEO & presse ; Partie 2 : trois personas ; Partie 3 : tunnel inbound, calendrier éditorial, grille KPI. J’ai piloté l’analyse LinkedIn et la mise en page des personas.",
  /** ——— NOUVEAU ——— **/
  images: ["marketingdossier.png"],     // ➜ /public/projects/marketingdossier.png
  link: "marketingdossier.pdf",
  tools: ["Google Slides", "Semrush", "Canva"]
},
{
  id: "baba-brandbook",
  category: "strategy",
  title:
    language === "en"
      ? "Baba où Rhum – App Style-Guide & Storyboard"
      : "Baba où Rhum – Charte graphique & storyboard",
  description:
    language === "en"
      ? "Full brandbook for a geolocated pastry app: logo built from a piping-bag pin, pastel palette hierarchy, Poppins/Mostra/Montserrat stack, CTA colour system and 28-frame UI storyboard. The PDF also lists UX caveats and component constraints spotted during the first Adobe XD sprint."
      : "Brandbook complet d’une appli pâtisserie géolocalisée : logo poche à douille, hiérarchie de pastels, trio Poppins/Mostra/Montserrat, système chromatique de CTA et storyboard UI en 28 vues. Le PDF liste aussi les limites UX repérées lors du premier sprint Adobe XD.",
  /** ——— NOUVEAU ——— **/
  images: ["charteapplipatisserie.png"], // ➜ /public/projects/charteapplipatisserie.png
  link: "charteapplipatisserie.pdf",
  tools: ["Illustrator", "Adobe XD", "Photoshop"]
},
{
  id: "3singes-ad-plan",
  category: "strategy",
  title:
    language === "en"
      ? "Les 3 Singes – Advertising & Social Plan"
      : "Les 3 Singes – Dossier publicité & social",
  description:
    language === "en"
      ? "University brief for a Montpellier pub: SWOT, competitor map, budget sheet, KPI table, creative brief and copy-strategy. Includes benchmark of local bars and mock-ups for Instagram stories. I authored the social KPI dashboard and designed the ‘See-No-Evil’ mascot stickers."
      : "Brief universitaire pour le pub montpelliérain : SWOT, cartographie concurrentielle, budget, KPI, brief créatif et copy-strategy. Contient un benchmark des bars voisins et des maquettes de stories Instagram. J’ai réalisé le tableau KPI social et les stickers mascotte « See-No-Evil ».",
  /** ——— NOUVEAU ——— **/
  images: ["les3singes.png"],           // ➜ /public/projects/les3singes.png
  link: "dossier final pub.pdf",
  tools: ["PowerPoint", "Illustrator"]
}

];
