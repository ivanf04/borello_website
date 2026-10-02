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
    title: "Varied Homesites",
    description:
      "Lot sizes and outdoor spaces vary throughout Borello Ranch Estates. Explore individual resale listings with Monica to find a property that fits your needs.",
  },
  {
    icon: Sparkles,
    title: "A Choice of Home Designs",
    description:
      "Built by Toll Brothers, the community includes single- and two-story homes. Floor plans, finishes, and features vary by property, giving buyers different options to explore.",
  },
  {
    icon: MapPin,
    title: "At Home in Morgan Hill",
    description:
      "Located south of Cochrane Road between Peet Road and Half Road, the neighborhood offers a Morgan Hill setting with access to local dining, shopping, and US-101.",
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
            Why Borello Ranch Estates
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover a gated neighborhood of single-family homes with shared
            recreation spaces and a variety of home designs. Monica can help
            you explore resale opportunities in Borello Ranch Estates.
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
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Exploring local schools? Use the{" "}
          <a
            href="https://www.mhusd.org/about/find-your-school"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Morgan Hill Unified School District school locator
          </a>{" "}
          to check the specific property address and confirm placement with the
          district.
        </p>
      </div>
    </section>
  );
}
