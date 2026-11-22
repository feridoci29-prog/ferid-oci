import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Code2,
  Cpu,
  Layers,
  PenTool,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./portfolio-shell";
import { getSocialLinks } from "@/lib/social-links";
import { copy, paths, profiles, type Language, type Page } from "@/lib/portfolio";
import workspace from "@/assets/ferid-workspace.webp.asset.json";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Magnetic({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="magnetic"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const b = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.transform = `translate(${(e.clientX - b.x - b.width / 2) * 0.08}px, ${(e.clientY - b.y - b.height / 2) * 0.08}px)`;
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.transform = "";
      }}
    >
      {children}
    </motion.div>
  );
}

function Hero({ lang }: { lang: Language }) {
  const t = copy[lang],
    ref = useRef<HTMLElement>(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-image" style={reduced ? {} : { y }}>
        <img
          src={workspace.url}
          alt={
            lang === "en"
              ? "Futuristic software development workspace with violet and electric blue lighting"
              : "Mor ve elektrik mavisi ışıklarla aydınlatılmış fütüristik yazılım geliştirme çalışma alanı"
          }
          fetchPriority="high"
          width="1672"
          height="940"
        />
      </motion.div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <Reveal>
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            {t.independent}
          </div>
          <h1>
            <span className="hello">{t.hello}</span>
            <br />
            Ferid Oci<span className="brand-period">.</span>
          </h1>
          <div className="hero-titles">
            <p>{t.founder}</p>
            <p>{t.role}</p>
          </div>
          <p className="hero-description">{t.intro}</p>
          <div className="hero-buttons">
            <Magnetic>
              <Button variant="hero" asChild>
                <Link to={paths[lang].projects}>
                  {t.explore}
                  <ArrowUpRight />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="glass" asChild>
                <Link to={paths[lang].contact}>
                  {t.connect}
                  <ArrowUpRight />
                </Link>
              </Button>
            </Magnetic>
          </div>
          <div className="hero-location">
            <MapPin size={13} />
            {t.location}
            <span className="location-divider" />
            <span>{t.from}</span>
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom container">
        <a href="#selected-work" className="scroll-link">
          <ArrowDown size={14} />
          {t.scroll}
        </a>
        <div className="building-label">
          <span className="status-dot" />
          <span>{t.building}</span>
          <strong>Draft Wink</strong>
          <Sparkles size={13} />
        </div>
      </div>
    </section>
  );
}

function Overview({ lang }: { lang: Language }) {
  const t = copy[lang];
  const cards = [
    { title: t.skills[0], text: t.overviewCards[0] },
    { title: t.skills[1], text: t.overviewCards[1] },
    { title: t.skills[2], text: t.overviewCards[2] },
  ];
  return (
    <section id="about" className="section home-overview container">
      <Reveal>
        <p className="eyebrow">{t.aboutLabel}</p>
        <h2>{t.overviewHeading}</h2>
        <p className="overview-intro">{t.aboutIntro}</p>
      </Reveal>
      <div className="overview-cards">
        {cards.map((card, index) => (
          <Reveal key={card.title} className="overview-card" delay={index * 0.07}>
            <span className="overview-index">0{index + 1}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Project({ lang, full = false }: { lang: Language; full?: boolean }) {
  const t = copy[lang];
  return (
    <section id="selected-work" className="section project-section container">
      <Reveal>
        <div className="section-top">
          <div>
            <p className="eyebrow">{t.selected}</p>
            <h2>{t.projectHeading}</h2>
          </div>
          {!full && (
            <Link className="text-link" to={paths[lang].projects}>
              {t.projectAction}
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </Reveal>
      <Reveal className="project-feature">
        <div className="project-copy">
          <span className="status-badge">
            <span className="status-dot" />
            {t.status}
          </span>
          <Brand project />
          <p className="eyebrow project-category">{t.category}</p>
          <p>{t.projectDescription}</p>
          <div className="project-tags">
            <span>AI</span>
            <span>Web</span>
            <span>Apps</span>
          </div>
          <Button variant="glass" asChild>
            {full ? (
              <a href={profiles.x} target="_blank" rel="noopener noreferrer">
                {t.follow}
                <ArrowUpRight />
              </a>
            ) : (
              <Link to={paths[lang].projects}>
                {t.projectAction}
                <ArrowUpRight />
              </Link>
            )}
          </Button>
        </div>
        <div className="project-visual">
          <img
            src={workspace.url}
            alt={
              lang === "en"
                ? "Illustrative concept workspace for the Draft Wink creation platform"
                : "Draft Wink oluşturma platformu için temsili çalışma alanı konsepti"
            }
            loading="lazy"
            width="1672"
            height="940"
          />
          <div className="preview-label">
            <Sparkles size={12} />
            {t.concept}
          </div>
        </div>
      </Reveal>
      <p className="project-footnote">
        <Code2 size={13} />
        {t.projectNote}
      </p>
    </section>
  );
}

function Vision({ lang, full = false }: { lang: Language; full?: boolean }) {
  const t = copy[lang];
  return (
    <section className="section vision-section container">
      <Reveal>
        <p className="eyebrow">{t.visionLabel}</p>
        <div className="section-top">
          <h2>{t.visionHeading}</h2>
          {!full && (
            <Link className="text-link" to={paths[lang].vision}>
              {t.visionAction}
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
        <p className="section-description">{t.visionIntro}</p>
      </Reveal>
      <div className="timeline">
        {t.phases.map((phase, i) => (
          <Reveal
            key={phase.label}
            delay={i * 0.08}
            className={i === 0 ? "timeline-item current" : "timeline-item"}
          >
            <span className="timeline-point" />
            <p className="eyebrow">{phase.label}</p>
            <h3>{phase.title}</h3>
            <p>{phase.text}</p>
          </Reveal>
        ))}
      </div>
      <p className="vision-note">{t.futureNote}</p>
    </section>
  );
}

function Skills({ lang }: { lang: Language }) {
  const t = copy[lang],
    icons = [Code2, Cpu, Layers, PenTool, Rocket];
  return (
    <section className="section skills-section container">
      <Reveal>
        <p className="eyebrow">{t.interests}</p>
        <h2>{t.interestsHeading}</h2>
      </Reveal>
      <div className="skills-list">
        {t.skills.map((skill, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <Reveal key={skill} className="skill" delay={index * 0.06}>
              <Icon size={22} />
              <h3>{skill}</h3>
              <span>0{index + 1}</span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function About({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <>
      <section className="page-intro container">
        <Reveal>
          <p className="eyebrow">{t.aboutLabel}</p>
          <h1>{t.aboutHeading}</h1>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-signature">
            <span className="monogram">
              fo<span>.</span>
            </span>
            <h2>Ferid Oci</h2>
            <p>{t.independentLabel}</p>
            <span className="about-location">
              <MapPin size={14} />
              Azerbaijan
            </span>
          </Reveal>
          <Reveal className="about-prose" delay={0.1}>
            <p className="lead">{t.aboutIntro}</p>
            <p>{t.aboutBody}</p>
            <p>{t.aboutEnd}</p>
            <Button variant="hero" asChild>
              <Link to={paths[lang].projects}>
                {t.explore}
                <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
      <Skills lang={lang} />
    </>
  );
}

function Contact({ lang, compact = false }: { lang: Language; compact?: boolean }) {
  const t = copy[lang];
  return (
    <section
      className={
        compact ? "section contact-section container" : "page-intro contact-section container"
      }
    >
      <Reveal>
        <p className="eyebrow">{t.contactLabel}</p>
        {compact ? (
          <h2 className="contact-heading">{t.contactHeading}</h2>
        ) : (
          <h1 className="contact-heading">{t.contactHeading}</h1>
        )}
        <p className="contact-intro">{t.contactIntro}</p>
      </Reveal>
      <div className="contact-links">
        {getSocialLinks(lang).map((item, i) => (
          <Reveal key={item.name} delay={i * 0.07}>
            <Button variant="social" asChild>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name}: ${item.description}`}
              >
                <item.icon size={24} aria-hidden="true" />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.description}</small>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PortfolioPage({ page, language: lang }: { page: Page; language: Language }) {
  return (
    <motion.div
      key={`${page}-${lang}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {page === "home" && (
        <>
          <Hero lang={lang} />
          <Overview lang={lang} />
          <Project lang={lang} />
          <Vision lang={lang} />
          <Contact lang={lang} compact />
        </>
      )}
      {page === "about" && <About lang={lang} />}
      {page === "projects" && (
        <>
          <section className="page-intro container project-page-intro">
            <Reveal>
              <p className="eyebrow">{t.nav.projects}</p>
              <h1>{t.projectLead}</h1>
            </Reveal>
          </section>
          <Project lang={lang} full />
          <Skills lang={lang} />
        </>
      )}
      {page === "vision" && (
        <>
          <section className="page-intro container vision-page-intro">
            <Reveal>
              <p className="eyebrow">VISION 2028</p>
              <h1>{t.visionHeading}</h1>
              <p className="lead">{t.visionIntro}</p>
            </Reveal>
          </section>
          <Vision lang={lang} full />
          <Contact lang={lang} compact />
        </>
      )}
      {page === "contact" && <Contact lang={lang} />}
    </motion.div>
  );
}
