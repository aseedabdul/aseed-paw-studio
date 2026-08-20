import { Stethoscope } from "lucide-react";
import { siteImages } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Veterinarian() {
  return (
    <section id="veterinarian" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="blob-mask shadow-glow ring-8 ring-secondary/60">
              <img
                src={siteImages.veterinarianImage}
                alt="Placeholder professional portrait for the studio's veterinarian"
                width={912}
                height={1104}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <span className="glass-card absolute -bottom-4 left-4 rounded-2xl px-4 py-2 text-xs tracking-[0.16em] text-primary uppercase">
              Placeholder image
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Veterinary Care &amp; Animal Welfare</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
              Meet Our Veterinarian
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-8 rounded-3xl border border-border bg-muted/50 p-7 sm:p-9">
              <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                <Stethoscope className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="mt-6 font-display text-2xl text-foreground">
                1-Year Course in Veterinary Care &amp; Animal Welfare
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs tracking-wide text-primary uppercase">
                <li className="rounded-full bg-secondary px-3 py-1.5">2023–2024 Batch</li>
                <li className="rounded-full bg-secondary px-3 py-1.5">Completed 2024</li>
                <li className="rounded-full bg-secondary px-3 py-1.5">3 Years of Experience</li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Trained in Veterinary Care &amp; Animal Welfare through a one-year professional
                course completed in 2024, with three years of practical experience in caring for
                animals and supporting their health, comfort and wellbeing.
              </p>
              <p className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                Veterinarian photograph and name to be added once provided by the studio.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
