import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "Services", to: "/services", ocid: "nav.services.link" },
  { label: "About", to: "/about", ocid: "nav.about.link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact.link" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally watching pathname
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-border"
          : "bg-white/95 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/assets/generated/tru-vacate-cleaning-perth-logo-transparent.dim_400x400.png"
              alt="Tru Vacate Cleaning Perth Logo"
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
              loading="eager"
            />
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-teal leading-tight block">
                Tru Vacate Cleaning
              </span>
              <span className="text-xs text-muted-foreground font-body tracking-wide">
                Perth, WA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-brand-teal bg-secondary"
                    : "text-foreground hover:text-brand-teal hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0488841883"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors"
              aria-label="Call Tru Vacate Cleaning Perth"
            >
              <Phone className="h-4 w-4" />
              <span className="font-body">0488 841 883</span>
            </a>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp.button"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-body text-white bg-brand-whatsapp hover:opacity-90 transition-opacity"
              aria-label="Contact us on WhatsApp"
            >
              <SiWhatsapp className="h-4 w-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            className="lg:hidden border-t border-border bg-white pb-4"
            aria-label="Mobile navigation"
          >
            <div className="pt-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`block px-4 py-3 rounded-md text-sm font-medium font-body transition-colors ${
                    location.pathname === link.to
                      ? "text-brand-teal bg-secondary"
                      : "text-foreground hover:text-brand-teal hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3 flex flex-col gap-3">
                <a
                  href="tel:0488841883"
                  className="flex items-center gap-2 py-2 text-sm font-medium text-brand-teal"
                >
                  <Phone className="h-4 w-4" />
                  0488 841 883
                </a>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nav.whatsapp.button"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium font-body text-white bg-brand-whatsapp"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
}
