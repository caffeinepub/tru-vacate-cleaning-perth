import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Clock,
  Leaf,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { useMetaTags } from "../hooks/useMetaTags";

const values = [
  {
    icon: Clock,
    title: "Reliability",
    desc: "We show up when we say we will. No last-minute cancellations. No excuses. Our team is punctual and professional — every single time.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "We use hospital-grade, eco-friendly products and follow the exact checklists that Perth real estate agents use. Your property will be spotless.",
  },
  {
    icon: Shield,
    title: "Guarantee",
    desc: "We back every clean with our 100% Bond Back Guarantee. If your property manager is not satisfied, we come back and re-clean for free.",
  },
];

const teamStats = [
  { value: "500+", label: "Happy Tenants" },
  { value: "100%", label: "Bond Back Rate" },
  { value: "5★", label: "Average Rating" },
  { value: "Perth", label: "Based & Proud" },
];

const certifications = [
  "Police-Checked Cleaners",
  "Fully Insured",
  "Eco-Friendly Products",
  "Same-Day Bookings",
  "Real Estate Checklist",
  "Free Re-Clean Guarantee",
];

export function About() {
  useMetaTags({
    title: "About Tru Vacate Cleaning Perth | Local Bond Cleaning Experts",
    description:
      "Learn about Tru Vacate Cleaning Perth — Perth's trusted local vacate cleaning company. Our experienced, police-checked team is dedicated to getting your bond back.",
    keywords:
      "about Tru Vacate Cleaning Perth, Perth bond cleaning company, local vacate cleaners Perth",
    ogImage: "/assets/generated/about-team-tru-vacate-perth.dim_800x500.jpg",
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
                <li className="text-white font-medium">About Us</li>
              </ol>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              About Tru Vacate Cleaning Perth
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
              We are a locally owned Perth business with one goal — to help
              Perth tenants get their full bond back, stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-section border-b border-border py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {teamStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-3xl text-primary mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="story-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/generated/about-team-tru-vacate-perth.dim_800x500.jpg"
                alt="Tru Vacate Cleaning Perth team of professional cleaners standing in front of branded company van in a Perth suburb"
                className="w-full rounded-2xl shadow-brand-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                id="story-heading"
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                Our Story
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  We started Tru Vacate Cleaning Perth because we knew Perth
                  tenants deserved better. Too many good people were losing
                  their hard-earned bond money because of poor quality cleaning
                  or missed inspection items. We set out to fix that.
                </p>
                <p>
                  Today, our experienced team of professional cleaners has
                  helped over{" "}
                  <strong className="text-foreground">
                    500 Perth tenants get their full bond back
                  </strong>
                  . We service suburbs from Joondalup in the north to Rockingham
                  in the south, and from the beachside suburbs of Cottesloe and
                  Scarborough to the eastern suburbs of Midland and Armadale.
                </p>
                <p>
                  Every cleaner on our team is{" "}
                  <strong className="text-foreground">
                    police-checked, fully trained
                  </strong>
                  , and passionate about doing the job right. We use
                  eco-friendly, hospital-grade cleaning products and follow the
                  same checklists that Perth real estate agents use.
                </p>
                <p>
                  Our{" "}
                  <strong className="text-foreground">
                    100% Bond Back Guarantee
                  </strong>{" "}
                  means that if your property manager is not satisfied, we come
                  back and re-clean for free. We are proud to be a local Perth
                  business. We know the Perth rental market, we know what local
                  real estate agents look for, and we know how to get you your
                  bond back.
                </p>
                <p>
                  <strong className="text-foreground">
                    That is our promise to every customer we serve.
                  </strong>
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground font-body font-semibold"
                  >
                    Book a Clean
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-whatsapp text-white font-body font-medium hover:opacity-90 transition-opacity"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  0488 841 883
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 sm:py-20 bg-section"
        aria-labelledby="values-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              id="values-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4"
            >
              What We Stand For
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Three core values guide everything we do — and every clean we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border shadow-xs bg-card text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Certifications */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="certs-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2
                id="certs-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5"
              >
                A Team You Can Trust in Your Home
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                We do not just clean — we earn your trust. Every cleaner on our
                team has been through a thorough vetting process so you can feel
                comfortable letting us into your property.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 p-3 rounded-lg bg-section border border-border"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-body text-sm font-medium text-foreground">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg">
                    Our Bond Back Guarantee
                  </p>
                  <p className="text-primary-foreground/70 text-sm font-body">
                    100% satisfaction or we re-clean for free
                  </p>
                </div>
              </div>
              <p className="font-body text-primary-foreground/85 leading-relaxed mb-6">
                We are so confident in our cleaning that we back every single
                job with a guarantee. If your property manager finds anything
                that does not meet the standard, we come back and fix it — no
                questions asked, no extra charge.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free re-clean within 72 hours",
                  "Same cleaner returns — we own our work",
                  "No disputes, no stress",
                  "Your bond back in your pocket",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-body"
                  >
                    <CheckCircle className="h-4 w-4 text-white/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-primary font-body font-semibold hover:bg-white/90 transition-colors"
              >
                <SiWhatsapp className="h-4 w-4 text-green-600" />
                Book Now — Get Your Bond Back
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 bg-section border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <Leaf className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Proudly Perth. Deeply Local.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            We are not a national franchise with call centres and contractors
            you have never met. We are a local Perth team who live and work in
            the same suburbs as our customers. We know Perth's rental market,
            Perth's real estate agents, and Perth's standards. That local
            knowledge makes all the difference when it comes to getting your
            bond back.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            We service every suburb from{" "}
            <strong className="text-foreground">Joondalup to Mandurah</strong>{" "}
            and from{" "}
            <strong className="text-foreground">
              Cottesloe to the Swan Valley
            </strong>
            . Wherever you are in Perth, we can be there.
          </p>
        </div>
      </section>
    </main>
  );
}
