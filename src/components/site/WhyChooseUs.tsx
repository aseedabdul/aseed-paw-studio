import { Home, Award, Scissors, HeartHandshake, CalendarCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const benefits = [
  {
    num: "01",
    icon: Home,
    title: "Doorstep Convenience",
    text: "Professional grooming services available at your doorstep.",
  },
  {
    num: "02",
    icon: Award,
    title: "3 Years of Experience",
    text: "Three years of experience in the pet grooming field.",
  },
  {
    num: "03",
    icon: Scissors,
    title: "Complete Grooming Options",
    text: "Choose from essential grooming to full-service packages.",
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Pet Hygiene & Care",
    text: "Services covering bathing, drying, nail, ear, eye, paw and dental care.",
  },
  {
    num: "05",
    icon: CalendarCheck,
    title: "Easy Booking",
    text: "Simple enquiry and booking process.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The ASEED difference</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
            Why Choose ASEED?
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ num, icon: Icon, title, text }, i) => (
            <li
              key={num}
              className={cn(i === 0 && "lg:col-span-2", i === 3 && "md:col-span-2 lg:col-span-1")}
            >
              <Reveal delay={i * 80} className="h-full">
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-3xl border p-7 transition-colors duration-500 sm:p-9",
                    i === 0
                      ? "border-primary/25 bg-secondary/70"
                      : "border-border bg-muted/50 hover:bg-secondary/60",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 right-4 font-display text-7xl text-primary/12 select-none"
                  >
                    {num}
                  </span>
                  <Icon className="size-8 text-primary" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="relative mt-5 font-display text-xl text-foreground">{title}</h3>
                  <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
