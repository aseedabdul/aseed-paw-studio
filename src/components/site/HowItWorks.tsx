import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Choose a Service",
    text: "Select the grooming package that suits your pet.",
  },
  { num: "02", title: "Send an Enquiry", text: "Contact the studio with your preferred service." },
  {
    num: "03",
    title: "Confirm Your Appointment",
    text: "Confirm availability and appointment details.",
  },
  {
    num: "04",
    title: "Get Groomed at Your Doorstep",
    text: "Receive the grooming service at your location.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-title" className="surface-lavender py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2
            id="how-it-works-title"
            className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.9rem]"
          >
            Four simple steps to a groomed pet
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.num} className="bg-background/85 backdrop-blur-sm">
              <Reveal delay={i * 110} className="h-full p-7 lg:p-8">
                <span className="block font-display text-5xl text-primary/35">{step.num}</span>
                <h3 className="mt-5 font-display text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
