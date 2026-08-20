import { Droplets, Scissors, Sparkles, Eye, Smile, PawPrint } from "lucide-react";
import { siteImages } from "@/lib/site-content";
import { Reveal } from "./Reveal";

const categories = [
  { icon: Droplets, label: "Bathing", image: siteImages.service.bathing },
  { icon: Scissors, label: "Haircut", image: siteImages.service.haircut },
  { icon: Sparkles, label: "Nail Care", image: siteImages.service.nailCutting },
  { icon: Eye, label: "Ear & Eye Care", image: siteImages.service.earEye },
  { icon: Smile, label: "Dental Care", image: siteImages.service.teeth },
  { icon: PawPrint, label: "Paw Care", image: siteImages.service.pawCare },
];

export function ServicesIntro() {
  return (
    <section id="services" className="surface-lavender relative overflow-hidden py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our grooming care</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
            Professional Grooming, Made Simple
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            From essential hygiene care to complete grooming, choose the service that best suits
            your pet.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {categories.map(({ icon: Icon, label, image }, i) => (
            <li key={label}>
              <Reveal delay={i * 70}>
                <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-transform duration-500 hover:-translate-y-1.5">
                  <img
                    src={image}
                    alt={`${label} grooming service`}
                    width={928}
                    height={720}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex items-center gap-2 px-3 py-3.5">
                    <Icon
                      className="size-4 shrink-0 text-primary"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <h3 className="min-w-0 truncate font-sans text-sm font-medium text-foreground">
                      {label}
                    </h3>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
