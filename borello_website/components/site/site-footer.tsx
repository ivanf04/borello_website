import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src="/images/borello-ranch-logo.svg"
            alt="Borello Ranch Estates"
            width={596}
            height={118}
            className="h-6 w-auto"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Morgan Hill, California
          </p>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
          © {new Date().getFullYear()} Borello Ranch Estates. All renderings,
          pricing, and availability are placeholders for demonstration and are
          subject to change. Equal Housing Opportunity.
        </p>
      </div>
    </footer>
  );
}
