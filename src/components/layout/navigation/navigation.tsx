"use client";

import NavigationMenu from "./navigation-menu";
import NavigationSheet from "./navigation-sheet";
import NavigationLogo from "./navigation-logo";
import { Badge } from "@/components/ui/badge";

export function Navigation() {
  return (
    <nav className="supports-backdrop-blur:bg-background/90 border-border bg-background/40 sticky top-0 z-40 mb-4 flex h-16 w-full items-center justify-between border-b backdrop-blur-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <NavigationLogo />

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:block" />
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="h-9 px-4">
            v0.0.1-alpha
          </Badge>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
