import { PawPrint, Home, Sparkles, Syringe, ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/site-content";
import { PawDecor } from "./PawDecor";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Home, label: "Doorstep Service" },
  { icon: Sparkles, label: "Grooming Packages" },
  { icon: Syringe, label: "Vaccination Available" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="surface-lavender relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <PawDecor />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-32 size-[34rem] rounded-full bg-lavender/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-xl">
            <div className="blob-mask shadow-glow ring-8 ring-white/60">
              <img
                src={siteImages.heroImage}
                alt="A freshly groomed white Maltese dog being brushed at a professional pet grooming studio"
                width={1200}
                height={1408}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-5 left-2 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <PawPrint className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg leading-none text-primary">
                  3 Years
                </span>
                <span className="text-xs tracking-wide text-muted-foreground">Experience</span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">Professional Pet Grooming</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.9rem]">
              ASEED
              <span className="block text-primary">Paw Studio</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-xl font-display text-xl text-foreground/85 italic sm:text-2xl">
              Professional Pet Grooming, Delivered to Your Doorstep
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              ASEED Paw Studio provides convenient doorstep pet grooming services designed to keep
              your pets clean, comfortable and well-groomed. From bathing and drying to nail, ear,
              eye and dental care, choose the grooming package that suits your pet.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground"
                >
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="btn-base btn-primary">
                Book a Grooming
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn-base btn-outline">
                Explore Services
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
