import { Github, Linkedin, Globe2, PenLine, BookOpen, UserRound, Newspaper } from 'lucide-react';
import { copy, profiles, type Language } from '@/lib/portfolio';

export function socialLinks(lang: Language) {
  const t = copy[lang];
  return [
    { name: 'GitHub', sub: t.githubText, url: profiles.github, icon: Github },
    { name: 'LinkedIn', sub: t.linkedinText, url: profiles.linkedin, icon: Linkedin },
    { name: 'DEV', sub: t.devText, url: profiles.dev, icon: PenLine },
    { name: 'Hashnode', sub: t.hashnodeText, url: profiles.hashnode, icon: BookOpen },
    { name: 'Peerlist', sub: t.peerlistText, url: profiles.peerlist, icon: UserRound },
    { name: 'Medium', sub: t.mediumText, url: profiles.medium, icon: Newspaper },
    { name: 'Draft Wink on X', sub: t.xText, url: profiles.x, icon: Globe2 },
  ];
}