import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Miguel Galperin ⤑",
  description:
    "Portfolio de software",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/miguel_galperin",
    github: "https://github.com/MiguelGalp?tab=repositories",
    docs: "https://ui.shadcn.com",
  },
}
