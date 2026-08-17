import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_DISPLAY = "(408) 444-1880";
const PHONE_HREF = "tel:+14084441880";
const EMAIL = "monica@scorecalifornia.com";

const contactDetails = [
  {
    icon: Phone,
    label: "Sales Gallery",
    value: PHONE_DISPLAY,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
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
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
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
            <CardContent className="flex flex-col items-center gap-6 p-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:p-8 sm:text-left">
              <Image
                src="/images/head-shot.jpg"
                alt="Monica Faranda, listing agent"
                width={1024}
                height={1024}
                sizes="128px"
                className="size-28 shrink-0 rounded-full object-cover ring-2 ring-foreground/10 sm:size-32"
              />
              <div className="flex flex-col items-center sm:items-start">
                <p className="font-heading text-2xl">Monica Faranda</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  Listing Agent · DRE #01381704
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A trusted South Valley specialist, Monica pairs deep local
                  market knowledge with a concierge approach — guiding buyers
                  and sellers through every detail of life at Borello Ranch.
                </p>
                <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button
                    render={<a href={PHONE_HREF} />}
                    className="h-11 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/85"
                  >
                    <Phone /> Call {PHONE_DISPLAY}
                  </Button>
                  <Button
                    render={<a href={`mailto:${EMAIL}`} />}
                    variant="outline"
                    className="h-11 px-6 text-base"
                  >
                    <Mail /> Email Monica
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
