import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Shield, Star } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const serviceAreas = [
  { name: "Perth CBD", slug: "perth-cbd" },
  { name: "Subiaco", slug: "subiaco" },
  { name: "Fremantle", slug: "fremantle" },
  { name: "Joondalup", slug: "joondalup" },
  { name: "Rockingham", slug: "rockingham" },
  { name: "Mandurah", slug: "mandurah" },
  { name: "Midland", slug: "midland" },
  { name: "Armadale", slug: "armadale" },
  { name: "Scarborough", slug: "scarborough" },
  { name: "Cottesloe", slug: "cottesloe" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/tru-vacate-cleaning-perth-logo-transparent.dim_400x400.png"
                alt="Tru Vacate Cleaning Perth Logo"
                className="h-12 w-12 object-contain brightness-200"
                loading="lazy"
              />
              <div>
                <span className="font-display font-bold text-lg text-white block leading-tight">
                  Tru Vacate Cleaning
                </span>
                <span className="text-xs text-white/60 font-body">
                  Perth, WA
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
              Perth's Most Trusted Vacate Cleaning Service. We help Perth
              tenants get their full bond back — guaranteed.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="text-white/70 text-xs font-body ml-1">
                5-Star Rated
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm font-body">
              <Shield className="h-4 w-4 text-brand-teal flex-shrink-0" />
              <span>100% Bond Back Guarantee</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/70 hover:text-white text-sm font-body transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0488841883"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm font-body transition-colors"
                  aria-label="Call us on 0488 841 883"
                >
                  <Phone className="h-4 w-4 text-brand-teal flex-shrink-0" />
                  0488 841 883
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm font-body transition-colors"
                  aria-label="Chat with us on WhatsApp"
                >
                  <SiWhatsapp className="h-4 w-4 text-green-400 flex-shrink-0" />
                  WhatsApp: 0488 841 883
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm font-body">
                <MapPin className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                <span>Serving All Perth Suburbs, WA</span>
              </li>
            </ul>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="whatsapp.contact.button"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg text-sm font-medium font-body text-white bg-brand-whatsapp hover:opacity-90 transition-opacity"
            >
              <SiWhatsapp className="h-4 w-4" />
              Get a Free Quote
            </a>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5">
              Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/suburbs/${area.slug}` as "/suburbs/perth-cbd"}
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-body text-white/70 bg-white/10 border border-white/10 hover:text-white hover:bg-white/20 transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body text-center sm:text-left">
            &copy; {currentYear} Tru Vacate Cleaning Perth. All rights reserved.
            ABN available on request.
          </p>
          <p className="text-white/40 text-xs font-body text-center">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
