import { Check, Star, ArrowRight } from "lucide-react";
import { groomingPackages, siteImages, type GroomingPackage } from "@/lib/site-content";
import { PawDecor } from "./PawDecor";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function PackageBlock({ pkg, index }: { pkg: GroomingPackage; index: number }) {
  const imageFirst = index % 2 === 0;

  return (
    <article
      id={pkg.id}
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border p-6 sm:p-9 lg:p-12",
        pkg.featured
          ? "border-primary/30 bg-secondary/70 shadow-glow"
          : "border-border bg-background shadow-soft",
      )}
    >
      {pkg.featured && (
        <span className="btn-base absolute right-5 top-5 gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs tracking-[0.18em] text-primary-foreground uppercase min-h-0">
          <Star className="size-3.5" aria-hidden="true" />
          Most Complete
        </span>
      )}

      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
          !imageFirst && "lg:[&>*:first-child]:order-2",
        )}
      >
        <Reveal>
          <div className="relative">
            <div
              className={cn(
                pkg.featured ? "blob-mask" : "blob-mask-alt",
                "shadow-glow ring-6 ring-white/60",
              )}
            >
              <img
                src={pkg.image}
                alt={pkg.alt}
                width={1200}
                height={1008}
                loading="lazy"
                className="aspect-5/4 w-full object-cover"
              />
            </div>
            <div className="glass-card absolute -bottom-3 right-2 flex items-center gap-2 rounded-2xl py-1.5 pr-3 pl-1.5 sm:right-4">
              <img
                src={siteImages.packageCatImage}
                alt="Persian cat grooming — photo placeholder, to be replaced with a real photo"
                width={72}
                height={72}
                loading="lazy"
                className="size-9 shrink-0 rounded-full object-cover ring-2 ring-white/70"
              />
              <span className="text-xs font-medium text-foreground">Cats welcome</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Grooming package</p>
          <h3 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {pkg.name}
          </h3>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-4xl text-primary sm:text-5xl">{pkg.price}</span>
            <span className="text-sm text-muted-foreground">per grooming session</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {pkg.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {pkg.services.map((service) => (
              <li
                key={service.name}
                className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-sm text-foreground"
              >
                <Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                {service.name}
              </li>
            ))}
          </ul>
          <a href="#booking" className="btn-base btn-primary mt-8">
            {pkg.cta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 border-t border-border pt-9">
        <h4 className="font-display text-xl text-foreground">
          What&apos;s included — service by service
        </h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Every step of the {pkg.name.toLowerCase()} shown clearly, so you know exactly what your
          pet receives.
        </p>
        <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pkg.services.map((service, i) => (
            <li key={service.name}>
              <Reveal delay={i * 60}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-transform duration-500 hover:-translate-y-1.5">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={928}
                    height={720}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h5 className="font-sans text-sm font-semibold tracking-wide text-primary">
                      {service.name}
                    </h5>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <PawDecor
        paws={[
          { className: "right-[5%] top-[6%]", size: 40, rotate: 16 },
          { className: "left-[3%] top-[45%]", size: 28, rotate: -20 },
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Packages &amp; pricing</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
            Grooming Packages
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Three clear grooming options — each one showing exactly which services are included.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:gap-16">
          {groomingPackages.map((pkg, i) => (
            <PackageBlock key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
