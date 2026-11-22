import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSocialLinks } from "@/lib/social-links";
import { copy, pageFromPath, paths, type Language, type Page } from "@/lib/portfolio";

export function Brand({ project = false }: { project?: boolean }) {
  return project ? (
    <span className="project-brand">
      <Sparkles aria-hidden="true" /> Draft Wink<span className="brand-period">.</span>
    </span>
  ) : (
    <span className="personal-brand">
      FERID OCI<span className="brand-period">.</span>
    </span>
  );
}

function AmbientInteraction() {
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--pointer-x", "50vw");
    root.style.setProperty("--pointer-y", "42vh");
    if (reduced) return;

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight * 0.42;
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${pointerX}px`);
        root.style.setProperty("--pointer-y", `${pointerY}px`);
        frame = 0;
      });
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return null;
}

function CursorLight() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 35 }),
    sy = useSpring(y, { stiffness: 300, damping: 35 });
  useEffect(() => {
    const media = matchMedia("(pointer: fine)");
    setEnabled(media.matches && !reduced);
    if (!media.matches || reduced) return;
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, x, y]);
  return enabled ? (
    <motion.div aria-hidden="true" className="cursor-light" style={{ x: sx, y: sy }} />
  ) : null;
}

const sparkPalette = [
  "var(--effect-cyan)",
  "var(--effect-violet)",
  "var(--effect-pink)",
  "var(--effect-mint)",
];

type MouseTrailPoint = { id: number; x: number; y: number; color: string };

function MouseTrail() {
  const reduced = useReducedMotion();
  const [points, setPoints] = useState<MouseTrailPoint[]>([]);

  useEffect(() => {
    if (reduced) return;
    let nextId = 0;
    let lastX: number | null = null;
    let lastY: number | null = null;
    const handleMouseMove = (event: MouseEvent) => {
      if (
        lastX !== null &&
        lastY !== null &&
        Math.hypot(event.clientX - lastX, event.clientY - lastY) < 18
      ) {
        return;
      }
      lastX = event.clientX;
      lastY = event.clientY;
      const id = ++nextId;
      setPoints((current) => [
        ...current.slice(-11),
        {
          id,
          x: event.clientX,
          y: event.clientY,
          color: sparkPalette[(id - 1) % sparkPalette.length],
        },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduced]);

  return (
    <div className="mouse-trails" aria-hidden="true">
      {points.map((point) => (
        <span
          key={point.id}
          className="mouse-trail"
          style={{ left: point.x, top: point.y, "--trail-color": point.color } as CSSProperties}
          onAnimationEnd={() =>
            setPoints((current) => current.filter((item) => item.id !== point.id))
          }
        />
      ))}
    </div>
  );
}

type ClickBurst = { id: number; x: number; y: number; color: string };

function ClickSparks() {
  const reduced = useReducedMotion();
  const [bursts, setBursts] = useState<ClickBurst[]>([]);

  useEffect(() => {
    if (reduced) return;
    let nextId = 0;
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const bounds = target?.getBoundingClientRect();
      const x = event.detail === 0 && bounds ? bounds.left + bounds.width / 2 : event.clientX;
      const y = event.detail === 0 && bounds ? bounds.top + bounds.height / 2 : event.clientY;
      const burst = {
        id: ++nextId,
        x,
        y,
        color: sparkPalette[Math.floor(Math.random() * sparkPalette.length)],
      };
      setBursts((current) => [...current.slice(-4), burst]);
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, [reduced]);

  return (
    <div className="click-sparks" aria-hidden="true">
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="click-spark"
          style={{ left: burst.x, top: burst.y, "--spark-color": burst.color } as CSSProperties}
          onAnimationEnd={(event) => {
            if (event.target !== event.currentTarget) return;
            setBursts((current) => current.filter((item) => item.id !== burst.id));
          }}
        >
          {Array.from({ length: 8 }, (_, index) => (
            <i
              key={index}
              className="click-spark__particle"
              style={{ "--spark-angle": `${index * 45}deg` } as CSSProperties}
            />
          ))}
        </span>
      ))}
    </div>
  );
}

export function PortfolioShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const lang: Language = "en";
  const page = pageFromPath(location.pathname);
  const t = copy.en;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.lang = "en";
    setOpen(false);
  }, [location.pathname]);
  const items: Page[] = ["home", "about", "projects", "vision", "contact"];
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-inner">
          <Link to={paths[lang].home} aria-label="Ferid Oci">
            <Brand />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {items.map((key) => (
              <Link
                key={key}
                to={paths[lang][key]}
                className={page === key ? "nav-link active" : "nav-link"}
                aria-current={page === key ? "page" : undefined}
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <Button
              className="mobile-menu-button"
              variant="ghost"
              size="icon"
              aria-label={open ? t.close : t.menu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              aria-label={t.menu}
            >
              {items.map((key) => (
                <Link
                  key={key}
                  to={paths[lang][key]}
                  aria-current={page === key ? "page" : undefined}
                >
                  {t.nav[key]}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer container">
        <div>
          <Link to={paths[lang].home}>
            <Brand />
          </Link>
          <p>{t.footer}</p>
        </div>
        <p className="copyright">© 2026 Ferid Oci. {t.rights}</p>
        <div className="footer-social">
          {getSocialLinks(lang).map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
            >
              <item.icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </footer>
      <AmbientInteraction />
      <MouseTrail />
      <ClickSparks />
      <CursorLight />
    </>
  );
}
