import { Phone, MessageCircle, MapPin, Mail, PawPrint } from "lucide-react";
import { contactPlaceholders } from "@/lib/site-content";
import { BookingForm } from "./BookingForm";
import { PawDecor } from "./PawDecor";
import { Reveal } from "./Reveal";

const details = [
  { icon: Phone, label: "Phone", value: contactPlaceholders.phone },
  { icon: MessageCircle, label: "WhatsApp", value: contactPlaceholders.whatsapp },
  {
    icon: MapPin,
    label: "Service Area",
    value: contactPlaceholders.serviceArea,
    note: "We bring professional pet grooming right to your doorstep.",
  },
  { icon: Mail, label: "Email", value: contactPlaceholders.email },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <PawDecor
        paws={[
          { className: "left-[4%] top-[10%]", size: 44, rotate: -14 },
          { className: "right-[6%] bottom-[12%]", size: 32, rotate: 18 },
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div
          id="booking"
          className="scroll-mt-28 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
        >
          <div>
            <Reveal>
              <p className="eyebrow">Booking &amp; enquiries</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
                Give Your Pet the Care They Deserve
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Choose your grooming package and get in touch with ASEED Paw Studio.
              </p>
            </Reveal>

            <Reveal delay={110}>
              <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                {details.map(({ icon: Icon, label, value, note }) => (
                  <li key={label} className="rounded-3xl border border-border bg-muted/50 p-5">
                    <span className="grid size-10 place-items-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="mt-4 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-medium break-words text-foreground">
                      {value}
                    </span>
                    {note ? (
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {note}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`tel:${contactPlaceholders.phone}`} className="btn-base btn-primary">
                  <Phone className="size-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${contactPlaceholders.whatsapp}`}
                  className="btn-base btn-outline"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a href="#booking-form" className="btn-base btn-outline">
                  <PawPrint className="size-4" aria-hidden="true" />
                  Book a Grooming
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="scroll-mt-28">
            <div id="booking-form" className="scroll-mt-28">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
