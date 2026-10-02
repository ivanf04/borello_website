import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <Image
        src="/images/borello-ranch-entry.jpg"
        alt="The Borello Ranch Estates entry monument and gatehouse at dusk"
        fill
        preload
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        <p className="mb-5 text-xs font-medium tracking-[0.35em] text-amber-100/90 uppercase sm:text-sm">
          Morgan Hill, California
        </p>
        <h1 className="font-heading text-4xl leading-tight text-white text-balance sm:text-6xl lg:text-7xl">
          Find Your Home in Borello Ranch Estates
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 text-pretty sm:text-lg">
          Explore resale opportunities in this gated Morgan Hill community of
          Toll Brothers single-family homes, with a recreation center, pool,
          spa, and courts for pickleball and bocce.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            render={<a href="#contact" />}
            className="h-12 w-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/85 sm:w-auto"
          >
            Arrange a Private Showing
          </Button>
        </div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll to neighborhood highlights"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <svg
          className="size-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
