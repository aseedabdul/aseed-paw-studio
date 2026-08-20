import { Check } from "lucide-react";
import { siteImages } from "@/lib/site-content";
import { Reveal } from "./Reveal";

const points = [
  "3 years of experience",
  "Doorstep grooming",
  "Multiple grooming packages",
  "Pet hygiene and care",
  "Vaccination service availability",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 size-[30rem] rounded-full bg-lavender-soft blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="blob-mask-alt shadow-glow ring-8 ring-secondary/60">
              <img
                src={siteImages.aboutImage}
                alt="A pet groomer arriving at a customer's doorstep with a grooming kit, greeted by a happy dog"
                width={1008}
                height={1104}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <p className="glass-card absolute -right-2 bottom-8 max-w-[11rem] rounded-2xl px-4 py-3 text-sm text-foreground sm:-right-6">
              <span className="font-display text-2xl text-primary">3</span> years of grooming
              experience
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About the studio</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
              About ASEED Paw Studio
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              ASEED Paw Studio focuses on making professional pet grooming more convenient for pet
              parents. With 3 years of experience in the field, the studio provides grooming
              services designed around cleanliness, comfort and everyday pet care, including
              doorstep grooming for added convenience.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-muted/60 px-4 py-3 text-sm text-foreground"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
