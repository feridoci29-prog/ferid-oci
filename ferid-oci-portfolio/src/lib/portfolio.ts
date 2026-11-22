import { absoluteURL } from "./site";

export type Language = "en" | "tr";
export type Page = "home" | "about" | "projects" | "vision" | "contact";

export const profiles = {
  github: "https://github.com/feridoci29-prog",
  linkedin: "https://www.linkedin.com/in/feridoci/",
  dev: "https://dev.to/feridoci",
  hashnode: "https://feridoci.hashnode.dev/building-draft-wink-ferid-oci",
  peerlist: "https://peerlist.io/feridoci",
  medium: "https://medium.com/@feridoci29",
  x: "https://x.com/DraftWink",
};

export const paths = {
  en: { home: "/", about: "/about", projects: "/projects", vision: "/vision", contact: "/contact" },
  tr: {
    home: "/tr",
    about: "/tr/about",
    projects: "/tr/projects",
    vision: "/tr/vision",
    contact: "/tr/contact",
  },
} as const;

export function languageFromPath(path: string): Language {
  return path === "/tr" || path.startsWith("/tr/") ? "tr" : "en";
}

export function pageFromPath(path: string): Page {
  const part = path.split("/").filter(Boolean).at(-1);
  return part === "about" || part === "projects" || part === "vision" || part === "contact"
    ? part
    : "home";
}

export const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      vision: "Vision",
      contact: "Contact",
    },
    location: "BASED IN AZERBAIJAN",
    independent: "INDEPENDENT BY DESIGN",
    founder: "Founder of Draft Wink.",
    hello: "Hi, I’m",
    role: "Young Entrepreneur & Web Developer.",
    intro:
      "I’m an independent entrepreneur and web developer building Draft Wink, an AI-powered platform designed to make creating websites and applications more accessible.",
    explore: "Explore My Work",
    connect: "Connect With Me",
    scroll: "SCROLL TO EXPLORE",
    journey: "THE JOURNEY STARTS WITH AN IDEA",
    building: "Currently building",
    status: "In Development",
    from: "From Azerbaijan. For the world.",
    selected: "01 / SELECTED WORK",
    projectHeading: "An idea. A vision. Draft Wink.",
    projectLead: "Building a more accessible way to bring ideas to life.",
    category: "AI WEBSITE & APP BUILDER",
    projectDescription:
      "Draft Wink is an AI-powered website and application creation platform I’m independently developing. The goal is simple: make the journey from an idea to a digital product more accessible.",
    projectNote: "An independent project. No external funding. Built with intention.",
    projectAction: "Discover Draft Wink",
    concept: "PRODUCT CONCEPT · NOT A LIVE APPLICATION",
    follow: "Follow the journey",
    visionLabel: "02 / LOOKING AHEAD",
    visionHeading: "Small beginnings. Big ambitions.",
    visionIntro: "A long-term vision, built one meaningful step at a time.",
    phases: [
      {
        label: "NOW",
        title: "Building Draft Wink",
        text: "Independently developing the foundation of an AI-powered creation platform.",
      },
      {
        label: "NEXT",
        title: "The first launch",
        text: "Working toward a first usable version and learning from real-world feedback.",
      },
      {
        label: "2028 GOAL",
        title: "Beyond borders",
        text: "The ambition: grow Draft Wink internationally and reach new communities.",
      },
      {
        label: "LONG TERM",
        title: "A technology company",
        text: "Aiming to establish a technology company in the United States.",
      },
    ],
    aboutLabel: "THE PERSON BEHIND THE PROJECT",
    aboutHeading: "Curiosity meets commitment.",
    aboutIntro:
      "I’m Ferid Oci, a young entrepreneur and web developer from Azerbaijan. I’m drawn to the space where technology, thoughtful design, and entrepreneurship come together.",
    aboutBody:
      "Today, that curiosity takes shape through Draft Wink. I’m building it independently, without external funding or a team — learning, experimenting, and developing the product one step at a time.",
    aboutEnd:
      "I believe useful software starts with understanding people. My focus is on creating digital experiences that make complex possibilities feel more accessible.",
    interests: "SKILLS & INTERESTS",
    interestsHeading: "Always building. Always learning.",
    skills: [
      "Web Development",
      "Artificial Intelligence",
      "SaaS Development",
      "UI/UX Design",
      "Digital Entrepreneurship",
    ],
    contactLabel: "LET’S CONNECT",
    contactHeading: "Good things start\nwith a conversation.",
    contactIntro:
      "Interested in the journey, technology, or exchanging ideas? Find me on GitHub and LinkedIn, or follow Draft Wink as it takes shape.",
    githubText: "Code & development",
    linkedinText: "Professional connections",
    devText: "Developer articles",
    hashnodeText: "Building Draft Wink",
    peerlistText: "Professional profile",
    mediumText: "Writing & ideas",
    xText: "Draft Wink updates",
    footer: "Built with intention. Looking forward.",
    rights: "All rights reserved.",
    menu: "Open navigation",
    close: "Close navigation",
    futureNote: "A roadmap of intentions — not completed milestones.",
    back: "Back to home",
    aboutAction: "More about me",
    independentLabel: "Independent founder",
    visionAction: "Explore my vision",
    meta: {
      home: [
        "Ferid Oci | Founder of Draft Wink",
        "Ferid Oci is a young entrepreneur and web developer from Azerbaijan and the founder of Draft Wink, an AI-powered website and application creation platform currently in development.",
      ],
      about: [
        "About Ferid Oci | Independent Entrepreneur from Azerbaijan",
        "Meet Ferid Oci, a young independent entrepreneur and web developer from Azerbaijan, interested in AI, software products and entrepreneurship.",
      ],
      projects: [
        "Draft Wink by Ferid Oci | AI Website & App Builder in Development",
        "Explore Draft Wink, an AI-powered website and application creation platform being independently developed by Ferid Oci.",
      ],
      vision: [
        "Ferid Oci’s Vision | Draft Wink & Goals for 2028",
        "Discover Ferid Oci’s goals: launching Draft Wink, international growth by 2028 and a long-term technology company vision.",
      ],
      contact: [
        "Connect With Ferid Oci | GitHub, LinkedIn & Draft Wink",
        "Connect with Ferid Oci on GitHub and LinkedIn, and follow the development of Draft Wink on X.",
      ],
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      projects: "Projeler",
      vision: "Vizyon",
      contact: "İletişim",
    },
    location: "AZERBAYCAN’DAN",
    independent: "BAĞIMSIZ BİR YOLCULUK",
    founder: "Draft Wink’in kurucusu.",
    hello: "Merhaba, ben",
    role: "Genç Girişimci & Web Geliştirici.",
    intro:
      "Web sitesi ve uygulama oluşturmayı daha erişilebilir kılmak için tasarlanan yapay zekâ destekli Draft Wink platformunu geliştiren bağımsız bir girişimci ve web geliştiriciyim.",
    explore: "Projelerimi Keşfet",
    connect: "Benimle İletişime Geç",
    scroll: "KEŞFETMEK İÇİN KAYDIR",
    journey: "YOLCULUK BİR FİKİRLE BAŞLAR",
    building: "Şu anda geliştiriyorum",
    status: "Geliştirme Aşamasında",
    from: "Azerbaycan’dan. Dünya için.",
    selected: "01 / ÖNE ÇIKAN PROJE",
    projectHeading: "Bir fikir. Bir vizyon. Draft Wink.",
    projectLead: "Fikirleri hayata geçirmenin daha erişilebilir bir yolunu inşa ediyorum.",
    category: "YAPAY ZEKÂ İLE WEB SİTESİ & UYGULAMA",
    projectDescription:
      "Draft Wink, bağımsız olarak geliştirdiğim yapay zekâ destekli bir web sitesi ve uygulama oluşturma platformu. Amaç basit: bir fikirden dijital bir ürüne uzanan yolculuğu daha erişilebilir kılmak.",
    projectNote: "Bağımsız bir proje. Dış finansman olmadan. Kararlılıkla geliştiriliyor.",
    projectAction: "Draft Wink’i Keşfet",
    concept: "ÜRÜN KONSEPTİ · CANLI BİR UYGULAMA DEĞİL",
    follow: "Yolculuğu takip et",
    visionLabel: "02 / GELECEĞE BAKIŞ",
    visionHeading: "Küçük başlangıçlar. Büyük hedefler.",
    visionIntro: "Her anlamlı adımla şekillenen uzun vadeli bir vizyon.",
    phases: [
      {
        label: "ŞİMDİ",
        title: "Draft Wink’i geliştirmek",
        text: "Yapay zekâ destekli oluşturma platformunun temelini bağımsız olarak geliştiriyorum.",
      },
      {
        label: "SIRADAKİ",
        title: "İlk sürümü yayınlamak",
        text: "İlk kullanılabilir sürüme ulaşmak ve gerçek kullanıcı geri bildirimlerinden öğrenmek.",
      },
      {
        label: "2028 HEDEFİ",
        title: "Sınırların ötesine",
        text: "Hedef: Draft Wink’i uluslararası ölçekte büyütmek ve yeni topluluklara ulaşmak.",
      },
      {
        label: "UZUN VADE",
        title: "Bir teknoloji şirketi",
        text: "Amerika Birleşik Devletleri’nde bir teknoloji şirketi kurmayı hedefliyorum.",
      },
    ],
    aboutLabel: "PROJENİN ARKASINDAKİ KİŞİ",
    aboutHeading: "Merak ve kararlılık bir arada.",
    aboutIntro:
      "Ben Ferid Oci, Azerbaycan’dan genç bir girişimci ve web geliştiriciyim. Teknoloji, özenli tasarım ve girişimciliğin kesiştiği alan ilgimi çekiyor.",
    aboutBody:
      "Bugün bu merak Draft Wink ile şekilleniyor. Dış finansman veya bir ekip olmadan, bağımsız olarak geliştiriyorum — her adımda öğreniyor, deniyor ve ürünü ilerletiyorum.",
    aboutEnd:
      "Faydalı yazılımın insanları anlamakla başladığına inanıyorum. Odağım, karmaşık olasılıkları daha erişilebilir hâle getiren dijital deneyimler oluşturmak.",
    interests: "BECERİLER & İLGİ ALANLARI",
    interestsHeading: "Daima üretmek. Daima öğrenmek.",
    skills: [
      "Web Geliştirme",
      "Yapay Zekâ",
      "SaaS Geliştirme",
      "UI/UX Tasarımı",
      "Dijital Girişimcilik",
    ],
    contactLabel: "İLETİŞİME GEÇELİM",
    contactHeading: "Güzel şeyler\nbir sohbetle başlar.",
    contactIntro:
      "Yolculuk, teknoloji veya fikir alışverişi ilginizi çekiyor mu? Bana GitHub ve LinkedIn üzerinden ulaşabilir ya da Draft Wink’in gelişimini takip edebilirsiniz.",
    githubText: "Kod & geliştirme",
    linkedinText: "Profesyonel bağlantılar",
    devText: "Geliştirici yazıları",
    hashnodeText: "Draft Wink’i geliştirmek",
    peerlistText: "Profesyonel profil",
    mediumText: "Yazılar & fikirler",
    xText: "Draft Wink güncellemeleri",
    footer: "Kararlılıkla inşa edildi. Geleceğe bakıyor.",
    rights: "Tüm hakları saklıdır.",
    menu: "Menüyü aç",
    close: "Menüyü kapat",
    futureNote: "Tamamlanmış başarılar değil, hedeflerden oluşan bir yol haritası.",
    back: "Ana sayfaya dön",
    aboutAction: "Beni daha yakından tanıyın",
    independentLabel: "Bağımsız kurucu",
    visionAction: "Vizyonumu keşfet",
    meta: {
      home: [
        "Ferid Oci | Draft Wink Kurucusu",
        "Azerbaycanlı genç girişimci ve web geliştirici Ferid Oci, yapay zekâ destekli web sitesi ve uygulama oluşturma platformu Draft Wink’i bağımsız olarak geliştiriyor.",
      ],
      about: [
        "Ferid Oci Hakkında | Azerbaycan’dan Bağımsız Girişimci",
        "Yapay zekâ, yazılım ürünleri ve girişimciliğe ilgi duyan Azerbaycanlı genç bağımsız girişimci ve web geliştirici Ferid Oci’yi tanıyın.",
      ],
      projects: [
        "Ferid Oci’nin Projesi Draft Wink | Geliştirme Aşamasında",
        "Ferid Oci’nin bağımsız olarak geliştirdiği yapay zekâ destekli web sitesi ve uygulama oluşturma platformu Draft Wink’i keşfedin.",
      ],
      vision: [
        "Ferid Oci’nin Vizyonu | Draft Wink & 2028 Hedefleri",
        "Ferid Oci’nin Draft Wink’i yayınlama, 2028’e kadar uluslararası büyüme ve uzun vadeli teknoloji şirketi hedeflerini keşfedin.",
      ],
      contact: [
        "Ferid Oci ile İletişim | GitHub, LinkedIn & Draft Wink",
        "Ferid Oci ile GitHub ve LinkedIn üzerinden bağlantı kurun; Draft Wink’in gelişimini X’te takip edin.",
      ],
    },
  },
};

export function portfolioHead(page: Page, language: Language) {
  const [title, description] = copy[language].meta[page];
  return {
    meta: [
      { title: title ?? "Ferid Oci" },
      { name: "description", content: description ?? "Ferid Oci — Draft Wink" },
      { property: "og:title", content: title ?? "Ferid Oci" },
      { property: "og:description", content: description ?? "Ferid Oci — Draft Wink" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteURL(paths[language][page]) },
      { property: "og:locale", content: language === "tr" ? "tr_TR" : "en_US" },
      { property: "og:image", content: absoluteURL("/images/ferid-workspace.webp") },
      {
        property: "og:image:alt",
        content:
          language === "en"
            ? "Ferid Oci's portfolio with a violet-lit creative workspace"
            : "Ferid Oci’nin mor ışıklı yaratıcı çalışma alanı",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title ?? "Ferid Oci" },
      { name: "twitter:description", content: description ?? "Ferid Oci — Draft Wink" },
      { name: "twitter:image", content: absoluteURL("/images/ferid-workspace.webp") },
    ],
    links: [
      { rel: "canonical", href: absoluteURL(paths[language][page]) },
      { rel: "alternate", hrefLang: "en", href: absoluteURL(paths.en[page]) },
      { rel: "alternate", hrefLang: "tr", href: absoluteURL(paths.tr[page]) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteURL(paths.en[page]) },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          inLanguage: language,
          url: absoluteURL(paths[language][page]),
          name: title,
          mainEntity: {
            "@type": "Person",
            "@id": `${absoluteURL("/")}#person`,
            url: absoluteURL("/"),
            name: "Ferid Oci",
            jobTitle: "Founder of Draft Wink | Young Entrepreneur & Web Developer",
            homeLocation: { "@type": "Country", name: "Azerbaijan" },
            sameAs: [
              profiles.github,
              profiles.linkedin,
              profiles.dev,
              profiles.hashnode,
              profiles.peerlist,
              profiles.medium,
            ],
            knowsAbout: [
              "Web development",
              "Artificial intelligence",
              "SaaS development",
              "UI/UX design",
              "Entrepreneurship",
            ],
            subjectOf: {
              "@type": "CreativeWork",
              name: "Draft Wink",
              description:
                "An AI-powered website and application creation platform currently in development by Ferid Oci.",
              creativeWorkStatus: "In development",
              sameAs: profiles.x,
            },
          },
        }),
      },
    ],
  };
}
