import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight, Home, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { ContactForm } from "../../components/ContactForm";
import { useMetaTags } from "../../hooks/useMetaTags";
import { getSuburbBySlug } from "./suburbData";

interface SuburbPageProps {
  slug: string;
}

export function SuburbPage({ slug }: SuburbPageProps) {
  const suburb = getSuburbBySlug(slug);

  // Always call hooks unconditionally — conditionally render below
  useMetaTags(
    suburb
      ? {
          title: suburb.title,
          description: suburb.metaDescription,
          keywords: suburb.keywords,
        }
      : {
          title: "Page Not Found | Tru Vacate Cleaning Perth",
          description: "The page you are looking for could not be found.",
        },
  );

  const scrollToContact = () => {
    const el = document.getElementById("suburb-contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (!suburb) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Suburb Not Found
          </h1>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Sorry, we could not find a page for that suburb. Check out our
            services page to learn more about our coverage across Perth.
          </p>
          <Link to="/" data-ocid="notfound.home.link">
            <Button className="bg-primary text-primary-foreground font-body font-semibold">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        aria-label={`Vacate cleaning in ${suburb.name} hero`}
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-vacate-cleaning-perth.dim_1200x600.jpg"
            alt={`Professional vacate cleaning service in ${suburb.name} Perth - Tru Vacate Cleaning Perth`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-body font-medium mb-6 border border-white/20">
                <MapPin className="h-3.5 w-3.5 text-teal-300" />
                Perth's #1 Rated Vacate Cleaners
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {suburb.heroHeading}
            </motion.h1>

            <motion.p
              className="text-white/85 text-lg font-body leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {suburb.intro}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={scrollToContact}
                data-ocid="suburb.hero.primary_button"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-7 py-3 h-auto text-base"
              >
                Get a Free Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="suburb.hero.whatsapp.button"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-lg bg-brand-whatsapp text-white font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <nav
        aria-label="Breadcrumb"
        className="bg-section border-b border-border py-3"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <ol className="flex items-center gap-2 text-sm font-body text-muted-foreground flex-wrap">
            <li>
              <Link
                to="/"
                data-ocid="suburb.breadcrumb.home.link"
                className="hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link
                to="/"
                data-ocid="suburb.breadcrumb.areas.link"
                className="hover:text-primary transition-colors"
              >
                Areas We Serve
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-foreground font-medium" aria-current="page">
              {suburb.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <section
        className="py-16 bg-background"
        aria-labelledby="suburb-content-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Content (2/3) */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2
                  id="suburb-content-heading"
                  className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3"
                >
                  Trusted Vacate Cleaning in {suburb.name}
                </h2>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>

              {suburb.sections.map((section, index) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <h2 className="font-display text-xl font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed text-base">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* Local signals callout */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20"
                data-ocid="suburb.local.card"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-primary mb-1 uppercase tracking-wide">
                    Local Knowledge
                  </h3>
                  <p className="font-body text-foreground text-sm leading-relaxed">
                    {suburb.localSignals}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Sidebar (1/3) */}
            <aside className="space-y-6" aria-label="Services sidebar">
              {/* Services Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="border border-border shadow-brand bg-card"
                  data-ocid="suburb.services.card"
                >
                  <CardContent className="p-6">
                    <h3 className="font-display font-bold text-lg text-foreground mb-5">
                      Services in {suburb.name}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {suburb.services.map((service, index) => (
                        <li
                          key={service}
                          data-ocid={`suburb.service.item.${index + 1}`}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-body text-sm text-foreground">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="suburb.sidebar.whatsapp.button"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-brand-whatsapp text-white font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      <SiWhatsapp className="h-4 w-4" />
                      WhatsApp: 0488 841 883
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="border border-primary/30 bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mb-2">
                      100% Bond Back Guarantee
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-5">
                      If your agent is not happy, we come back and re-clean for
                      free — no questions asked.
                    </p>
                    <Button
                      onClick={scrollToContact}
                      data-ocid="suburb.sidebar.quote.primary_button"
                      className="w-full bg-primary text-primary-foreground font-body font-semibold text-sm"
                    >
                      Get a Free Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="space-y-3"
              >
                {[
                  "Police-checked cleaners",
                  "Fully insured team",
                  "Eco-friendly products",
                  "Same-day bookings available",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-section border border-border"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">
                      {badge}
                    </span>
                  </div>
                ))}
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section
        id="suburb-contact"
        className="py-16 bg-section"
        aria-labelledby="suburb-contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              id="suburb-contact-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3"
            >
              Get a Free Quote for {suburb.name}
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Fill in the form and we will get back to you within the hour. Or
              jump straight to WhatsApp for an instant chat!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-brand"
              data-ocid="suburb.contact.panel"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl text-foreground">
                  Send Us a Message
                </h3>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="suburb.contact.whatsapp.button"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-whatsapp text-white font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="py-14 bg-primary text-primary-foreground"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Your {suburb.name} Bond Back?
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Do not risk losing thousands. Book Perth's most trusted vacate
            cleaners today — 100% bond back guarantee included.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              data-ocid="suburb.cta.primary_button"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-body font-semibold px-8"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Book Online Now
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.cta.whatsapp.button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/40 text-white font-body font-medium hover:bg-white/10 transition-colors"
            >
              <SiWhatsapp className="h-5 w-5" />
              WhatsApp: 0488 841 883
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
