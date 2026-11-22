import {
  BookOpen,
  Github,
  Globe2,
  Linkedin,
  Newspaper,
  PenLine,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { copy, profiles, type Language } from "./portfolio";

type SocialLink = {
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
};

export function getSocialLinks(language: Language): SocialLink[] {
  const labels = copy[language];

  return [
    { name: "GitHub", description: labels.githubText, url: profiles.github, icon: Github },
    { name: "LinkedIn", description: labels.linkedinText, url: profiles.linkedin, icon: Linkedin },
    { name: "DEV Community", description: labels.devText, url: profiles.dev, icon: PenLine },
    { name: "Hashnode", description: labels.hashnodeText, url: profiles.hashnode, icon: BookOpen },
    { name: "Peerlist", description: labels.peerlistText, url: profiles.peerlist, icon: UserRound },
    { name: "Medium", description: labels.mediumText, url: profiles.medium, icon: Newspaper },
    { name: "Draft Wink on X", description: labels.xText, url: profiles.x, icon: Globe2 },
  ];
}
