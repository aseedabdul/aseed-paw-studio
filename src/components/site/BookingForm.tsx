import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { createWhatsAppUrl, groomingPackages } from "@/lib/site-content";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none";
const labelClass = "block text-sm font-medium text-foreground";

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = `Hello ASEED Paw Studio,

I would like to make a grooming booking.

Customer Name: ${formData.get("customerName") ?? ""}
Phone Number: ${formData.get("phone") ?? ""}
Pet Name: ${formData.get("petName") ?? ""}
Pet Type: ${formData.get("petType") ?? ""}
Selected Service: ${formData.get("service") ?? ""}
Preferred Date: ${formData.get("date") ?? ""}
Preferred Time: ${formData.get("time") ?? ""}
Message: ${formData.get("message") ?? ""}

Please confirm the booking availability. Thank you.`;

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-card grid min-h-[26rem] place-items-center rounded-[2rem] p-8 text-center">
        <div>
          <CheckCircle2
            className="mx-auto size-12 text-primary"
            strokeWidth={1.4}
            aria-hidden="true"
          />
          <h3 className="mt-5 font-display text-2xl text-foreground">Enquiry ready to send</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thank you. This is a demo form, so no details were stored or sent. Please contact ASEED
            Paw Studio directly to confirm your appointment.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="btn-base btn-outline mt-7"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-[2rem] p-6 sm:p-9"
      aria-label="Booking enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="customer-name">
            Customer Name
          </label>
          <input
            id="customer-name"
            name="customerName"
            required
            className={fieldClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone-number">
            Phone Number
          </label>
          <input
            id="phone-number"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            placeholder="Your contact number"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="pet-name">
            Pet Name
          </label>
          <input
            id="pet-name"
            name="petName"
            className={fieldClass}
            placeholder="Your pet's name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="pet-type">
            Pet Type
          </label>
          <select id="pet-type" name="petType" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select pet type
            </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="selected-service">
            Selected Service
          </label>
          <select id="selected-service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose a grooming package
            </option>
            {groomingPackages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} — {pkg.price}
              </option>
            ))}
            <option value="vaccination">Vaccination Enquiry</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="preferred-date">
            Preferred Date
          </label>
          <input id="preferred-date" name="date" type="date" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferred-time">
            Preferred Time
          </label>
          <input id="preferred-time" name="time" type="time" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={fieldClass}
            placeholder="Anything the groomer should know about your pet"
          />
        </div>
      </div>

      <button type="submit" className="btn-base btn-primary mt-7 w-full sm:w-auto">
        <Send className="size-4" aria-hidden="true" />
        Send Booking Enquiry
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Demo form — submissions are not stored. Please confirm details directly with ASEED Paw
        Studio.
      </p>
    </form>
  );
}
