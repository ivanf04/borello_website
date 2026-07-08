import Image from "next/image";
import { Bath, BedDouble, Ruler } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const listings = [
  {
    image: "/images/listing-1.svg",
    status: "Coming Soon",
    price: "$2,595,000",
    address: "The Sycamore · Residence One",
    beds: 4,
    baths: 4.5,
    sqft: "4,180",
  },
  {
    image: "/images/listing-2.svg",
    status: "Coming Soon",
    price: "$2,895,000",
    address: "The Olive Grove · Residence Two",
    beds: 5,
    baths: 5.5,
    sqft: "4,760",
  },
  {
    image: "/images/listing-3.svg",
    status: "Coming Soon",
    price: "$3,150,000",
    address: "The Vineyard · Residence Three",
    beds: 5,
    baths: 6,
    sqft: "5,240",
  },
];

export function FeaturedListings() {
  return (
    <section id="listings" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-accent uppercase">
            Featured Listings
          </p>
          <h2 className="font-heading text-3xl text-balance sm:text-4xl">
            Residences Now Being Released
          </h2>
          <p className="mt-4 text-muted-foreground">
            Photography and pricing are being finalized. Join the interest list
            for first access to floor plans and release dates.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <Card key={listing.address} className="pt-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={listing.image}
                  alt={`Illustration placeholder for ${listing.address}`}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-primary/85 text-primary-foreground">
                  {listing.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  {listing.price}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{listing.address}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="size-4" /> {listing.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="size-4" /> {listing.baths} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="size-4" /> {listing.sqft} Sq Ft
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  render={<a href="#contact" />}
                  variant="outline"
                  className="w-full"
                >
                  Request Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
