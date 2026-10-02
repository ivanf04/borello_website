import Image from "next/image";

export function Community() {
  return (
    <section id="community" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-foreground/10 lg:order-2">
            <Image
              src="/images/club-pool.jpg"
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
              The Borello Ranch Estates recreation center includes a pool, spa,
              barbecue area, private cabanas, and an outdoor fireplace. Pickleball
              and bocce courts provide places to play, and a community gathering
              room is available to rent.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Visit the{" "}
              <a
                href="https://www.borelloranchowners.com/home/"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Borello Ranch Estates Owners Association
              </a>{" "}
              for community information. Confirm current dues, amenity rules,
              and reservation details with the association.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
