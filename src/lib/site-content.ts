/**
 * Centralised content + image configuration for ASEED Paw Studio.
 * Replace any image by swapping the file in /public/assets and updating the
 * path below — no UI changes required.
 */

export const siteImages = {
  logoMark: "/assets/logo-mark.png",
  heroImage: "/assets/hero-pet-grooming.jpg",
  heroCatImage: "/assets/persian-cat-hero.jpg",
  aboutImage: "/assets/about-doorstep.jpg",
  spaBathImage: "/assets/spa-bath.jpg",
  basicPackageImage: "/assets/basic-package.jpg",
  fullServiceImage: "/assets/full-service.jpg",
  vaccinationImage: "/assets/vaccination.jpg",
  veterinarianImage: "/assets/veterinarian.jpg",
  packageCatImage: "/assets/persian-cat-package.jpg",
  service: {
    bathing: "/assets/service-bathing.jpg",
    blowDry: "/assets/service-blow-dry.jpg",
    nailCutting: "/assets/service-nail-cutting.jpg",
    earEye: "/assets/service-ear-eye.jpg",
    pawCare: "/assets/service-paw-care.jpg",
    pawTrim: "/assets/service-paw-trim.jpg",
    teeth: "/assets/service-teeth.jpg",
    bodySpray: "/assets/service-body-spray.jpg",
    haircut: "/assets/service-haircut.jpg",
  },
} as const;

export const contactPlaceholders = {
  phone: "8778079057",
  whatsapp: "918778079057",
  serviceArea: "Doorstep Grooming Service",
  email: "aseedpawsstudio@gmail.com",
} as const;

export const whatsappGreeting =
  "Hello ASEED Paw Studio, I would like to enquire about your pet grooming services. Please share the available packages and booking details.";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${contactPlaceholders.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type IncludedService = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export type GroomingPackage = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  featured?: boolean;
  services: IncludedService[];
};

const bathing = (description: string): IncludedService => ({
  name: "Bathing",
  description,
  image: siteImages.service.bathing,
  alt: "A small dog receiving a professional bath with soft foam in a grooming tub",
});

const blowDry = (description: string): IncludedService => ({
  name: "Blow Dry",
  description,
  image: siteImages.service.blowDry,
  alt: "A groomer blow drying a fluffy dog's coat with a professional pet dryer",
});

const nailCutting = (description: string): IncludedService => ({
  name: "Nail Cutting",
  description,
  image: siteImages.service.nailCutting,
  alt: "Close-up of a groomer trimming a dog's nails with pet nail clippers",
});

const earEye = (description: string): IncludedService => ({
  name: "Ear & Eye Cleaning",
  description,
  image: siteImages.service.earEye,
  alt: "A groomer gently cleaning around a small dog's ear and eye with a cotton pad",
});

const teeth = (description: string): IncludedService => ({
  name: "Mouth Spray / Teeth Brushing",
  description,
  image: siteImages.service.teeth,
  alt: "A groomer brushing a small dog's teeth with a pet toothbrush",
});

const bodySpray = (description: string): IncludedService => ({
  name: "Body Spray",
  description,
  image: siteImages.service.bodySpray,
  alt: "A groomer applying a finishing coat spray to a freshly groomed dog",
});

export const groomingPackages: GroomingPackage[] = [
  {
    id: "spa-bath",
    name: "SPA BATH",
    price: "₹799",
    description:
      "A refreshing grooming session designed to keep your pet clean, fresh and comfortable.",
    image: siteImages.spaBathImage,
    alt: "A relaxed small dog enjoying a foamy spa bath in a premium pet spa",
    cta: "Book Spa Bath",
    services: [
      bathing(
        "A gentle bathing session to clean your pet and leave the coat fresh and comfortable.",
      ),
      blowDry("Professional blow drying to help dry and finish your pet's coat after bathing."),
      nailCutting("Careful nail trimming to maintain your pet's nail length and everyday comfort."),
      earEye(
        "Gentle cleaning care around the ears and eyes as part of your pet's grooming routine.",
      ),
      {
        name: "Paw Moisturizer",
        description: "A finishing paw-care step to help keep your pet's paws soft and cared for.",
        image: siteImages.service.pawCare,
        alt: "Paw balm being massaged into a dog's paw pads during paw care",
      },
    ],
  },
  {
    id: "basic-package",
    name: "BASIC PACKAGE",
    price: "₹999",
    description:
      "A practical grooming package covering essential hygiene and grooming care for your pet.",
    image: siteImages.basicPackageImage,
    alt: "A groomer combing a happy dog on a grooming table with tools laid out",
    cta: "Book Basic Package",
    services: [
      {
        name: "Sanitary & Paw Trim",
        description:
          "Careful trimming around sanitary areas and paws for a cleaner and neater finish.",
        image: siteImages.service.pawTrim,
        alt: "A groomer trimming the fur around a small dog's paw with grooming scissors",
      },
      bathing("A refreshing bath to clean your pet and maintain a fresh, well-groomed coat."),
      blowDry(
        "Professional drying to complete the bathing process and prepare the coat for grooming.",
      ),
      nailCutting("Professional nail trimming to maintain comfortable and manageable nail length."),
      earEye("Gentle grooming care for your pet's ears and the area around the eyes."),
      teeth("Basic oral grooming care to help keep your pet's mouth fresh and clean."),
      bodySpray("A finishing grooming step that leaves your pet feeling fresh after the service."),
    ],
  },
  {
    id: "full-service",
    name: "FULL SERVICE PACKAGE",
    price: "₹1499",
    description:
      "A complete grooming package combining full-body grooming with essential hygiene and finishing care.",
    image: siteImages.fullServiceImage,
    alt: "A beautifully groomed white poodle after a full grooming service",
    cta: "Book Full Service",
    featured: true,
    services: [
      {
        name: "Full Body Haircut",
        description: "Complete body trimming and haircut for a neat, well-groomed appearance.",
        image: siteImages.service.haircut,
        alt: "A groomer giving a poodle a full body haircut with clippers and scissors",
      },
      bathing(
        "A complete bathing session to clean and refresh your pet before finishing the grooming process.",
      ),
      blowDry("Professional blow drying to dry and finish the coat after bathing."),
      nailCutting("Careful nail trimming as part of complete grooming and paw care."),
      earEye("Gentle cleaning around the ears and eyes as part of the complete grooming routine."),
      teeth("Basic oral grooming care included as part of the complete grooming package."),
      bodySpray("A final grooming step to leave the pet feeling fresh and well-groomed."),
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Veterinarian", href: "#veterinarian" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const faqs = [
  {
    q: "What services does ASEED Paw Studio provide?",
    a: "ASEED Paw Studio provides professional pet grooming, including bathing, blow drying, nail cutting, ear and eye cleaning, paw care, oral grooming care and full body haircuts through three grooming packages. Vaccination service is also available.",
  },
  {
    q: "Do you provide doorstep grooming?",
    a: "Yes. Doorstep pet grooming is available, so your pet can be groomed conveniently at your location.",
  },
  {
    q: "What is included in the Spa Bath package?",
    a: "The Spa Bath package (₹799) includes Bathing, Blow Dry, Nail Cutting, Ear & Eye Cleaning and Paw Moisturizer.",
  },
  {
    q: "What is included in the Basic Package?",
    a: "The Basic Package (₹999) includes Sanitary & Paw Trim, Bathing, Blow Dry, Nail Cutting, Ear & Eye Cleaning, Mouth Spray / Teeth Brushing and Body Spray.",
  },
  {
    q: "What is included in the Full Service Package?",
    a: "The Full Service Package (₹1499) includes Full Body Haircut, Bathing, Blow Dry, Nail Cutting, Ear & Eye Cleaning, Mouth Spray / Teeth Brushing and Body Spray.",
  },
  {
    q: "Is vaccination service available?",
    a: "Vaccination service is available as part of the studio's pet-care offerings. Please contact ASEED Paw Studio to confirm availability and details.",
  },
  {
    q: "How can I book a grooming appointment?",
    a: "Choose the grooming package that suits your pet and send an enquiry using the booking form, or contact ASEED Paw Studio directly by phone or WhatsApp.",
  },
  {
    q: "Do I need to confirm service availability before booking?",
    a: "Yes. Please confirm service availability and appointment details directly with ASEED Paw Studio before your booking is finalised.",
  },
] as const;
