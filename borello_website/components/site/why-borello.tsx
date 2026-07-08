import { LandPlot, MapPin, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reasons = [
  {
    icon: LandPlot,
    title: "Expansive Homesites",
    description:
      "Acre-plus lots framed by heritage oaks and vineyard rows give every residence privacy, space, and room to grow — a rarity this close to Silicon Valley.",
  },
  {
    icon: Sparkles,
    title: "Crafted Without Compromise",
    description:
      "Architect-designed estates with chef's kitchens, indoor-outdoor great rooms, and finishes curated for the way modern families live and entertain.",
  },
  {
    icon: MapPin,
    title: "Morgan Hill's Best of Both",
    description:
      "Wine-country calm with city convenience: top-rated schools, downtown dining, and quick access to US-101, Caltrain, and San Jose.",
  },
];

export function WhyBorello() {
  return (
    <section id="why" className="scroll-mt-16 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent uppercase">
            The Difference
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Why Borello Ranch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Named for the family that farmed this land for generations, Borello
            Ranch honors its heritage while setting a new standard for luxury
            in the South Valley.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <Card key={reason.title} className="bg-card">
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <reason.icon className="size-5" />
                </div>
                <CardTitle className="font-heading text-xl">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
