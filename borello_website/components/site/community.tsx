import Image from "next/image";

export function Community() {
  return (
    <section id="community" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-foreground/10 lg:order-2">
            <Image
              src="/images/clubhouse-aerial.jpg"
              alt="Aerial view of the Borello Ranch Estates clubhouse and pool"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent uppercase">
              Community &amp; Amenities
            </p>
            <h2 className="font-heading text-3xl text-balance sm:text-4xl">
              A Clubhouse Built for Gathering
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              At the heart of Borello Ranch sits a resort-style clubhouse and
              pool, framed by manicured grounds and mature landscaping —
              a private retreat for residents to unwind, entertain, and
              connect just steps from home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
