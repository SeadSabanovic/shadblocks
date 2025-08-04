export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Blocks", href: "/blocks" },
  { name: "Templates", href: "/templates" },
  { name: "About", href: "/about" },
] as const;

export type NavigationLink = (typeof NAVIGATION_LINKS)[number];
