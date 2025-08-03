import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-muted-foreground/20 text-9xl font-bold select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-foreground mb-2 text-2xl font-bold">
              Page Not Found
            </h2>
            <p className="text-muted-foreground">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It
              might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="flex items-center gap-2">
              <Link href="/">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button
              variant="outline"
              asChild
              className="flex items-center gap-2"
            >
              <Link href="/blocks">
                <Search className="h-4 w-4" />
                Browse Blocks
              </Link>
            </Button>
          </div>

          {/* Back Button */}
          <div className="pt-4">
            <Button
              variant="ghost"
              asChild
              className="text-muted-foreground hover:text-foreground flex items-center gap-2"
            >
              <Link href="javascript:history.back()">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="border-border mt-12 border-t pt-8">
          <p className="text-muted-foreground mb-4 text-sm">
            Try these pages instead:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: "/", label: "Home" },
              { href: "/blocks", label: "Blocks" },
              { href: "/components", label: "Components" },
              { href: "/templates", label: "Templates" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-2 py-1 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
