import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { ContactForm } from "../components/ContactForm";
import { useMetaTags } from "../hooks/useMetaTags";

const serviceAreas = [
  "Perth CBD",
  "Subiaco",
  "Fremantle",
  "Joondalup",
  "Rockingham",
  "Mandurah",
  "Midland",
  "Armadale",
  "Scarborough",
  "Cottesloe",
  "Claremont",
  "Mosman Park",
  "South Perth",
  "Victoria Park",
  "East Perth",
  "North Perth",
  "Stirling",
  "Osborne Park",
  "Cannington",
  "Balcatta",
  "Morley",
  "Bassendean",
  "Belmont",
  "Carlisle",
  "Mount Lawley",
  "Inglewood",
  "Doubleview",
  "Floreat",
  "Wembley",
  "Leederville",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call or Text",
    value: "0488 841 883",
    href: "tel:0488841883",
    desc: "Mon–Sun: 7am to 7pm",
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    value: "0488 841 883",
    href: "https://wa.me/61488841883",
    desc: "Fastest way to get a quote",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "All Perth Suburbs",
    href: null,
    desc: "Greater Perth Metropolitan Area, WA",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "7am – 7pm Daily",
    href: null,
    desc: "Including weekends and public holidays",
  },
];

export function Contact() {
  useMetaTags({
    title: "Contact Tru Vacate Cleaning Perth | Get a Free Bond Cleaning Quote",
    description:
      "Contact Tru Vacate Cleaning Perth for a free quote on bond cleaning, end of lease cleaning and vacate cleaning services in Perth. Call or WhatsApp 0488 841 883.",
    keywords:
      "contact Tru Vacate Cleaning Perth, bond cleaning quote Perth, free vacate cleaning quote Perth",
    ogImage: "/assets/generated/contact-tru-vacate-cleaning.dim_800x500.jpg",
  });

  return (
    <main>
      {/* Page Hero */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20 pt-32 sm:pt-36">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/70 font-body">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white font-medium">Contact</li>
              </ol>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Get Your Free Quote
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
              Ready to get your bond back? Contact us now for a fast, free, and
              no-obligation quote. We reply within 1 hour.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="contact-form-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/assets/generated/contact-tru-vacate-cleaning.dim_800x500.jpg"
                  alt="Friendly Tru Vacate Cleaning Perth customer service team member ready to help with your bond cleaning enquiry"
                  className="w-full rounded-2xl shadow-brand object-cover aspect-[4/3]"
                  loading="eager"
                />
              </motion.div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="whatsapp.contact.button"
                className="flex items-center gap-4 p-5 rounded-xl bg-brand-whatsapp text-white hover:opacity-95 transition-opacity"
              >
                <SiWhatsapp className="h-8 w-8 flex-shrink-0" />
                <div>
                  <p className="font-display font-bold text-base">
                    Chat on WhatsApp
                  </p>
                  <p className="font-body text-sm opacity-80">
                    0488 841 883 — Get an instant quote
                  </p>
                </div>
              </a>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-section border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-display font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-display font-semibold text-foreground">
                          {item.value}
                        </p>
                      )}
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-display font-bold text-sm text-foreground mb-3">
                  Why Book With Us?
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "100% Bond Back Guarantee",
                    "Free re-clean if agent isn't satisfied",
                    "Police-checked & fully insured team",
                    "No hidden fees — flat-rate pricing",
                    "Same-day & next-day bookings",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-body text-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-brand">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2
                      id="contact-form-heading"
                      className="font-display font-bold text-xl text-foreground"
                    >
                      Send Us a Message
                    </h2>
                    <p className="font-body text-xs text-muted-foreground">
                      We'll reply within 1 hour during business hours
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section
        className="py-14 bg-section border-t border-border"
        aria-labelledby="areas-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2
              id="areas-heading"
              className="font-display text-2xl font-bold text-foreground mb-3"
            >
              We Service All Perth Suburbs
            </h2>
            <p className="font-body text-muted-foreground">
              From Joondalup to Mandurah. From Cottesloe to the Swan Valley. If
              it's in Perth, we cover it.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-block px-3 py-1.5 rounded-lg text-sm font-body text-foreground bg-card border border-border"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-muted-foreground font-body">
            Don't see your suburb? Call us on{" "}
            <a
              href="tel:0488841883"
              className="text-primary font-medium hover:underline"
            >
              0488 841 883
            </a>{" "}
            — we likely cover it!
          </p>
        </div>
      </section>
    </main>
  );
}
