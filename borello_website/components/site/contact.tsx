import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/site/lead-form";

const contactDetails = [
  {
    icon: Phone,
    label: "Sales Gallery",
    value: "(408) 444-1880",
  },
  {
    icon: Mail,
    label: "Email",
    value: "monica@scorecalifornia.com",
  },
  {
    icon: Clock,
    label: "Tours",
    value: "Daily 10am – 5pm, by appointment",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="mb-3 text-xs font-medium tracking-[0.3em] text-amber-200/90 uppercase">
              Private Showings
            </p>
            <h2 className="font-heading text-3xl text-balance sm:text-4xl">
              Experience Borello Ranch in Person
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/80">
              Walk the homesites at golden hour, tour our model residences, and
              let our team craft a visit around what matters most to you.
            </p>

            <div className="mt-8 flex items-start gap-5 border-t border-primary-foreground/15 pt-8">
              <Image
                src="/images/head-shot.jpg"
                alt="Monica Faranda, listing agent"
                width={1024}
                height={1024}
                sizes="80px"
                className="size-20 shrink-0 rounded-full object-cover ring-2 ring-primary-foreground/20"
              />
              <div>
                <p className="font-heading text-lg">Monica Faranda</p>
                <p className="text-xs tracking-wide text-primary-foreground/60 uppercase">
                  Listing Agent · DRE #01381704
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                  A trusted South Valley specialist, Monica pairs deep local
                  market knowledge with a concierge approach — guiding buyers
                  and sellers through every detail of life at Borello Ranch.
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-5">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                    <item.icon className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wide text-primary-foreground/60 uppercase">
                      {item.label}
                    </span>
                    <span className="text-primary-foreground/90">{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="lg:col-span-3">
            <CardContent className="p-2 sm:p-4">
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
