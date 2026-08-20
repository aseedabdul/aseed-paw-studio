import { useEffect, useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { navLinks, siteImages } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={siteImages.logoMark}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0"
          />
          <span className="min-w-0 leading-none">
            <span className="block font-display text-lg font-semibold tracking-[0.18em] text-primary">
              ASEED
            </span>
            <span className="mt-1 block truncate text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
              Paw Studio
            </span>
          </span>
        </a>

        <div className="flex items-center justify-end gap-2">
          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#booking" className="btn-base btn-primary hidden sm:inline-flex">
            <PawPrint className="size-4" aria-hidden="true" />
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background/97 backdrop-blur-xl xl:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-4">
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base text-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="btn-base btn-primary mt-3 w-full"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
