import { Stethoscope, Info } from "lucide-react";
import { siteImages } from "@/lib/site-content";
import { Reveal } from "./Reveal";

export function Vaccination() {
  return (
    <section aria-labelledby="vaccination-title" className="surface-lavender py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-background/70 shadow-glow backdrop-blur-md lg:grid-cols-2">
          <Reveal className="h-full">
            <img
              src={siteImages.vaccinationImage}
              alt="A veterinarian holding a small dog while preparing a vaccination in a clean clinic"
              width={1104}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover lg:min-h-[26rem]"
            />
          </Reveal>
          <Reveal delay={120} className="p-7 sm:p-10 lg:pr-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs tracking-[0.18em] text-primary uppercase">
              <Stethoscope className="size-4" aria-hidden="true" />
              Pet care
            </span>
            <h2
              id="vaccination-title"
              className="mt-5 font-display text-3xl leading-tight text-foreground sm:text-4xl"
            >
              Vaccination Service Available
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Vaccination services are available as part of the studio&apos;s pet-care offerings.
              Please contact ASEED Paw Studio to confirm availability and details.
            </p>
            <a href="#booking" className="btn-base btn-primary mt-7">
              Enquire About Vaccination
            </a>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Availability and medical service details should be confirmed directly with ASEED Paw
              Studio.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
