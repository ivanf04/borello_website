export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <p className="font-heading text-lg">Borello Ranch Estates</p>
          <p className="mt-1 text-sm text-muted-foreground">
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
