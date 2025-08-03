import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CustomNavigationMenu(props: NavigationMenuProps) {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Blocks", href: "/blocks" },
    { name: "Templates", href: "/templates" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-2 font-bold transition-colors",
                  isActive(item.href) ? "" : "text-foreground/60",
                )}
              >
                {item.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
