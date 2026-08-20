import { Award, Home, Scissors, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, title: "3 Years Experience", text: "In pet grooming care" },
  { icon: Home, title: "Doorstep Service", text: "Convenient grooming at your doorstep" },
  { icon: Scissors, title: "Complete Grooming", text: "From essential to full-service care" },
  { icon: HeartHandshake, title: "Pet Care Focused", text: "Hygiene, comfort & care" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Why pet parents choose ASEED"
      className="relative bg-background py-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="lg:px-6">
              <Reveal delay={i * 90} className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg text-foreground">{title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{text}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
