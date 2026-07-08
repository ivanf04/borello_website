import { Contact } from "@/components/site/contact";
import { FeaturedListings } from "@/components/site/featured-listings";
import { Hero } from "@/components/site/hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Stats } from "@/components/site/stats";
import { WhyBorello } from "@/components/site/why-borello";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <WhyBorello />
        <FeaturedListings />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
