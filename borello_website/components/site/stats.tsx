import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "Gated",
    label: "Community",
    detail: "Single-family homes in Morgan Hill",
  },
  {
    value: "Single- & Two-Story",
    label: "Homes",
    detail: "A variety of Toll Brothers home designs",
  },
  {
    value: "Pool & Spa",
    label: "Recreation Center",
    detail: "Cabanas and a community gathering room",
  },
  {
    value: "Pickleball & Bocce",
    label: "Community Courts",
    detail: "Places to play within the neighborhood",
  },
];

export function Stats() {
  return (
    <section id="stats" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent uppercase">
            The Neighborhood
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Get to Know Borello Ranch Estates
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="py-4">
                <p className="font-heading text-2xl text-balance text-accent">{stat.value}</p>
                <p className="mt-3 text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
