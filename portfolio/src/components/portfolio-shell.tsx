import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { socialLinks } from './social-links';
import { Button } from '@/components/ui/button';
import { copy, languageFromPath, pageFromPath, paths, type Language, type Page } from '@/lib/portfolio';

export function Brand({ project = false }: { project?: boolean }) {
  return project ? <span className="project-brand"><Sparkles aria-hidden="true" /> Draft Wink<span className="brand-period">.</span></span> : <span className="personal-brand">FERID OCI<span className="brand-period">.</span></span>;
}

function CursorLight() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 35 }), sy = useSpring(y, { stiffness: 300, damping: 35 });
  useEffect(() => {
    const media = matchMedia('(pointer: fine) and (min-width: 900px)');
    setEnabled(media.matches && !reduced);
    if (!media.matches || reduced) return;
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [reduced, x, y]);
  return enabled ? <motion.div aria-hidden="true" className="cursor-light" style={{ x: sx, y: sy }} /> : null;
}

export function PortfolioShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = languageFromPath(location.pathname), page = pageFromPath(location.pathname), t = copy[lang];
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.lang = lang;
    setOpen(false);
  }, [lang, location.pathname]);
  useEffect(() => {
    const saved = localStorage.getItem('ferid-language');
    if (saved === 'tr' && location.pathname === '/') void navigate({ to: '/tr', replace: true });
  }, []);
  function changeLanguage(next: Language) {
    localStorage.setItem('ferid-language', next);
    void navigate({ to: paths[next][page] });
  }
  const items: Page[] = ['home', 'about', 'projects', 'vision', 'contact'];
  return <>
    <a href="#main-content" className="skip-link">{lang === 'en' ? 'Skip to content' : 'İçeriğe geç'}</a>
    <header className="site-header">
      <div className="nav-inner">
        <Link to={paths[lang].home} aria-label="Ferid Oci"><Brand /></Link>
        <nav className="desktop-nav" aria-label={lang === 'en' ? 'Main navigation' : 'Ana menü'}>{items.map(key => <Link key={key} to={paths[lang][key]} className={page === key ? 'nav-link active' : 'nav-link'} aria-current={page === key ? 'page' : undefined}>{t.nav[key]}</Link>)}</nav>
        <div className="nav-actions"><div className="languages" aria-label={lang === 'en' ? 'Language' : 'Dil'}><Button variant="ghost" size="sm" className={lang === 'en' ? 'language active' : 'language'} onClick={() => changeLanguage('en')} aria-pressed={lang === 'en'}>ENG</Button><span>/</span><Button variant="ghost" size="sm" className={lang === 'tr' ? 'language active' : 'language'} onClick={() => changeLanguage('tr')} aria-pressed={lang === 'tr'}>TR</Button></div><Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={open ? t.close : t.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
      </div>
      <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} aria-label={t.menu}>{items.map(key => <Link key={key} to={paths[lang][key]} aria-current={page === key ? 'page' : undefined}>{t.nav[key]}<ArrowUpRight size={16} /></Link>)}</motion.nav>}</AnimatePresence>
    </header>
    <main id="main-content">{children}</main>
    <footer className="site-footer container"><div><Link to={paths[lang].home}><Brand /></Link><p>{t.footer}</p></div><p className="copyright">© 2026 Ferid Oci. {t.rights}</p><div className="footer-social">{socialLinks(lang).map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}: ${item.sub}`} title={item.name}><item.icon size={17}/></a>)}</div></footer>
    <CursorLight />
  </>;
}