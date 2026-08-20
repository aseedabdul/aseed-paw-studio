import { Instagram, Facebook, MessageCircle, Phone, MapPin } from "lucide-react";
import {
  contactPlaceholders,
  createWhatsAppUrl,
  navLinks,
  siteImages,
  whatsappGreeting,
} from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="surface-lavender border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={siteImages.logoMark}
                alt=""
                width={44}
                height={44}
                loading="lazy"
                className="size-11"
              />
              <span>
                <span className="block font-display text-xl text-primary">ASEED</span>
                <span className="text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                  Paw Studio
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Professional Pet Grooming • Doorstep Service
            </p>
            <ul className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  href: createWhatsAppUrl(whatsappGreeting),
                },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-border bg-background/70 text-primary transition-colors hover:bg-secondary"
                  >
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg text-foreground">Quick Links</h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg text-foreground">Contact</h2>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {contactPlaceholders.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {contactPlaceholders.whatsapp}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {contactPlaceholders.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 ASEED Paw Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
