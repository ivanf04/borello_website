import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#stats", label: "The Neighborhood" },
  { href: "#why", label: "Why Borello Ranch" },
  { href: "#listings", label: "Listings" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Borello Ranch Estates home">
          <Image
            src="/images/borello-ranch-logo.svg"
            alt="Borello Ranch Estates"
            width={596}
            height={118}
            className="h-7 w-auto brightness-0 invert sm:h-8"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          render={<a href="#contact" />}
          variant="outline"
          className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          Inquire
        </Button>
      </div>
    </header>
  );
}
