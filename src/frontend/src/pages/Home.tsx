import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  Clock,
  Columns2,
  Home as HomeIcon,
  Leaf,
  Lock,
  MapPin,
  RefreshCw,
  Shield,
  ShowerHead,
  Star,
  Utensils,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { ContactForm } from "../components/ContactForm";
import { useMetaTags } from "../hooks/useMetaTags";
import { suburbs } from "./suburbs/suburbData";

const trustBadges = [
  { icon: Shield, text: "100% Bond Back Guarantee" },
  { icon: Lock, text: "Fully Insured" },
  { icon: Star, text: "5-Star Rated" },
  { icon: HomeIcon, text: "Perth-Based Team" },
  { icon: Clock, text: "Same-Day Bookings" },
];

const services = [
  {
    icon: HomeIcon,
    name: "End of Lease Cleaning",
    desc: "Complete top-to-bottom clean for your rental property",
  },
  {
    icon: Wind,
    name: "Carpet Steam Cleaning",
    desc: "Hot water extraction removes deep-set dirt and stains",
  },
  {
    icon: Columns2,
    name: "Window Cleaning",
    desc: "Crystal-clear, streak-free windows inside and out",
  },
  {
    icon: Utensils,
    name: "Oven & Kitchen Cleaning",
    desc: "Degrease and deep-clean every surface in your kitchen",
  },
  {
    icon: ShowerHead,
    name: "Bathroom Deep Clean",
    desc: "Remove mould, limescale and grime from every bathroom",
  },
  {
    icon: Columns2,
    name: "Garage & Balcony Cleaning",
    desc: "Sweep, mop and degrease your outdoor spaces",
  },
];

const whyChooseUs = [
  { icon: Clock, text: "We show up on time, every time" },
  {
    icon: Leaf,
    text: "Our cleaners use hospital-grade, eco-friendly products",
  },
  {
    icon: ClipboardList,
    text: "We follow the real estate agent's checklist to the letter",
  },
  {
    icon: RefreshCw,
    text: "We offer a free re-clean if your agent isn't happy",
  },
  {
    icon: Award,
    text: "Over 500 happy tenants have got their bond back with us",
  },
  { icon: Lock, text: "Fully insured, police-checked cleaners" },
];

const testimonials = [
  {
    quote:
      "Tru Vacate Cleaning Perth saved me! My agent did the final inspection and said it was the cleanest property he'd seen all year. Got my full $2,800 bond back!",
    name: "Sarah M.",
    suburb: "Subiaco",
  },
  {
    quote:
      "I was stressed about my end of lease clean but these guys made it so easy. They cleaned everything including inside the oven and the windows. Absolute legends!",
    name: "Jake T.",
    suburb: "Joondalup",
  },
  {
    quote:
      "Booked them online the night before and they showed up right on time. Brilliant service and reasonable prices. Will definitely use them again.",
    name: "Priya K.",
    suburb: "Fremantle",
  },
];

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    // biome-ignore lint/style/noUnusedTemplateLiteral: multiline content
    a: "Bond cleaning (also called vacate cleaning or end of lease cleaning) is a deep, thorough clean of your rental property when you move out. Your landlord or property manager requires it to make sure the property is just as clean as it was when you moved in. If you do not get a professional bond clean done, your landlord can keep your bond money to pay for cleaning. In Australia, the bond is usually four weeks' rent — that is a lot of money to lose! A proper bond clean covers every room, every surface, every appliance and every corner of the property.",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it is your best chance to get your full bond back. When you signed your lease, you paid a bond (security deposit) to your landlord. At the end of your tenancy, you get that money back — but only if the property is clean and undamaged. A professional bond clean makes sure you do not miss anything. Real estate agents in Perth are very strict about cleanliness. They use detailed checklists and will charge you for any spot you miss. Hiring a professional bond cleaner takes all that stress away.",
  },
  {
    q: "How much does a bond clean cost in Perth?",
    a: "Bond cleaning prices in Perth depend on the size of your property. As a guide:\n\n• 1-bedroom unit: $220 – $300\n• 2-bedroom house: $320 – $420\n• 3-bedroom house: $420 – $550\n• 4-bedroom house: $550 – $700+\n\nThese prices usually include all rooms, kitchen, bathrooms, and windows. Carpet steam cleaning is often an extra cost. Call Tru Vacate Cleaning Perth for a free, no-obligation quote on 0488 841 883.",
  },
  {
    q: "What is a full bond clean?",
    a: "A full bond clean is a complete, top-to-bottom clean of your entire rental property. It covers every single room and every single surface. A full bond clean includes:\n\n• Cleaning inside all cupboards and drawers\n• Scrubbing the oven and cooktop\n• Deep cleaning all bathrooms and toilets\n• Wiping down all walls and skirting boards\n• Cleaning all windows (inside and out)\n• Vacuuming and mopping all floors\n• Removing cobwebs from ceilings\n• Cleaning all light fittings and switches\n\nBasically, everything that a property manager checks during a final inspection.",
  },
  {
    q: "Which are the top-rated bond cleaning companies near me in Perth?",
    a: "Here are five of Perth's most trusted bond cleaning companies:\n\n1. Tru Vacate Cleaning Perth — Your local Perth specialist for vacate and bond cleaning. They offer a 100% bond back guarantee, use eco-friendly products, and follow real estate agent checklists to the letter. Police-checked, fully insured, and available for same-day bookings. Website: truvacatecleaningperth.com.au\n\n2. Jim's Cleaning Perth — A well-known franchise cleaning service across Perth and Australia. Offers end of lease cleaning, carpet cleaning, and general house cleaning. Website: jimscleaning.com.au\n\n3. Clean To Perfection Perth — A Perth-based company specialising in bond and end of lease cleaning. Experienced team with a satisfaction guarantee. Website: cleantoperfection.com.au\n\n4. Fantastic Cleaners Perth — An international brand with operations in Perth. Wide range of services including end of tenancy cleaning and carpet cleaning. Website: fantasticcleaners.com.au\n\n5. Tru Bond Cleaning Brisbane — A trusted bond cleaning company serving Brisbane tenants. Offers comprehensive end of lease cleaning packages with a bond back guarantee. Their experienced team handles everything from kitchen deep cleans to carpet steam cleaning. A reliable choice for Brisbane renters looking for a stress-free move-out experience. Website: trubondcleaningbrisbane.com",
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "The best cleaning products for a bond clean cut through grease, grime and soap scum without damaging surfaces. Professionals use:\n\n• Oven: Caustic-based oven cleaners like Easy-Off or Mr Muscle Oven Cleaner\n• Bathrooms: Spray & Wipe, Exit Mould, or Jif Cream Cleanser for tiles and grout\n• Floors: Pine-O-Cleen or White King diluted in warm water\n• Glass & windows: Windex or White King Glass Cleaner with a squeegee\n• General surfaces: White vinegar and baking soda for eco-friendly cleaning\n\nAlways test products on a small area first to avoid damaging surfaces.",
  },
  {
    q: "How much does a professional bond cleaning typically cost?",
    a: "A professional bond clean in Perth typically costs between $220 for a small unit and $700+ for a large 4-bedroom house. The price depends on the property size, its condition, and whether you need extras like carpet steam cleaning or external window cleaning. Most companies charge a flat rate based on bedrooms and bathrooms. Always ask if the quote includes a re-clean guarantee — this means if your property manager is not happy, the cleaner comes back for free. Get a free quote from Tru Vacate Cleaning Perth by calling 0488 841 883.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: "For bond cleaning carpets, professional steam cleaning is the gold standard. Here are the best products:\n\n• Bissell Professional Pet Carpet Shampoo – great for stains and odours. Available at Bunnings: bunnings.com.au\n• Rug Doctor Carpet Detergent – works with hire machines. Available at Woolworths and Coles.\n• Preen Carpet Stain Remover – for spot treatment before a steam clean. Available at most supermarkets.\n• Exit Carpet Cleaner – dissolves stains fast. Available at Bunnings: bunnings.com.au\n\nFor best results, hire a professional carpet steam cleaner. Tru Vacate Cleaning Perth includes carpet steam cleaning as an optional add-on. Call 0488 841 883 to add it to your booking.",
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: "Choosing the right bond cleaner in Perth is easy if you know what to look for:\n\n1. Check reviews – Look at Google reviews and Facebook ratings. Only trust companies with 4.5 stars or higher.\n2. Ask for a bond back guarantee – A good company will offer a free re-clean if your agent is not satisfied.\n3. Make sure they are insured – If a cleaner breaks something, you need to know they are covered.\n4. Get a written quote – Never pay more than what was agreed. Get everything in writing.\n5. Ask if they follow the real estate checklist – Good cleaners use the same checklist your agent uses.\n6. Check if they are police-checked – You are letting them into your home. Make sure they are trustworthy.\n\nTru Vacate Cleaning Perth ticks all of these boxes. Call us on 0488 841 883.",
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes! You can book Tru Vacate Cleaning Perth online right now and we back every clean with our 100% Bond Back Guarantee. If your real estate agent finds anything that does not meet their standard, we come back and re-clean it for free — no questions asked. Our online booking form is quick and easy. Just fill in your property details, choose your services, and we will confirm your booking fast. You can also reach us on WhatsApp at 0488 841 883 for same-day bookings and quick quotes.",
  },
  {
    q: "How much is a cleaner per hour in Perth?",
    a: "In Perth, a professional cleaner charges between $35 and $55 per hour, depending on the type of cleaning and the company. General house cleaning is usually at the lower end, while specialised services like bond cleaning, carpet steam cleaning, or post-construction cleaning cost more. Some companies offer flat-rate packages for end of lease cleaning, which is often better value than hourly rates. For bond cleaning, a flat rate is almost always the smarter choice because you know exactly what you are paying.",
  },
  {
    q: "How much is an end of lease clean in Australia? How much to pay for 3 hours? What is the 20-minute rule?",
    a: "End of lease clean cost: Across Australia, an end of lease clean costs between $200 and $800+ depending on the state, city, and property size. In Perth, prices range from $220 for a 1-bed unit to $700+ for a large home. Sydney and Melbourne tend to be slightly more expensive.\n\nPaying for 3 hours of cleaning: If you hire a cleaner at $45/hour, three hours of cleaning will cost you about $135. However, three hours is usually not enough for a thorough bond clean. Most 2-bedroom homes need at least 6–8 hours of professional cleaning to pass a real estate inspection.\n\nThe 20-minute rule: The 20-minute rule is a cleaning technique where you set a 20-minute timer and clean one room as fast and as thoroughly as you can. It helps you stay focused and make quick progress around the home. For a full bond clean, though, you need far more than 20 minutes — a professional team will spend 6–12 hours on a thorough vacate clean.",
  },
];

export function Home() {
  useMetaTags({
    title:
      "Vacate Cleaning Perth | Tru Vacate Cleaning Perth - Bond Clean Experts",
    description:
      "Looking for reliable vacate cleaning in Perth? Tru Vacate Cleaning Perth delivers spotless end of lease cleans with a 100% bond back guarantee. Get a free quote today!",
    keywords:
      "vacate cleaning Perth, bond cleaning Perth, end of lease cleaning Perth, vacate cleaners Perth",
  });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-vacate-cleaning-perth.dim_1200x600.jpg"
            alt="Professional vacate cleaning service Perth - Tru Vacate Cleaning Perth team cleaning an apartment"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-body font-medium mb-6 border border-white/20">
                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                Perth's #1 Rated Vacate Cleaners
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Perth's Most Trusted{" "}
              <span className="text-teal-300">Vacate Cleaning</span> Service
            </motion.h1>

            <motion.p
              className="text-white/85 text-lg sm:text-xl font-body leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We clean your rental property from top to bottom so you get your
              full bond back.{" "}
              <strong className="text-white">Guaranteed.</strong>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                onClick={scrollToContact}
                data-ocid="hero.quote.primary_button"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-8 py-3 h-auto text-base"
              >
                Get a Free Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.button"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-brand-whatsapp text-white font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                <SiWhatsapp className="h-5 w-5" />
                Call on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section
        className="bg-primary text-primary-foreground py-5"
        aria-label="Trust badges"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 text-sm font-body font-medium"
              >
                <badge.icon className="h-4 w-4 opacity-80 flex-shrink-0" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="py-20 bg-section" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Everything You Need for a Spotless Move-Out
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              From oven deep cleans to carpet steam cleaning — we do it all. One
              team. One visit. Your bond back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                data-ocid={`services.item.${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link to="/services">
                  <Card className="group h-full border border-border hover:border-primary/40 hover:shadow-brand transition-all duration-300 bg-card cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="font-body font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-background" aria-labelledby="why-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2
                id="why-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5"
              >
                Why Perth Tenants Choose{" "}
                <span className="text-primary">Tru Vacate Cleaning</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8">
                We are not just cleaners — we are bond specialists. We know
                exactly what Perth real estate agents look for, and we make sure
                your property ticks every single box.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-body text-foreground">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary text-primary-foreground font-body font-semibold"
                >
                  Get a Free Quote
                </Button>
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
            </div>
            <div className="relative">
              <img
                src="/assets/generated/about-team-tru-vacate-perth.dim_800x500.jpg"
                alt="Tru Vacate Cleaning Perth professional team ready to clean your rental property"
                className="w-full rounded-2xl shadow-brand-lg object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-brand flex items-center gap-3 border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-foreground">
                    500+ Happy Tenants
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    Bond back guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="py-20 bg-section"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              id="testimonials-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              What Perth Tenants Say About Us
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Real reviews from real Perth tenants who got their bond back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border shadow-xs bg-card">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-0.5 mb-4">
                      {["s1", "s2", "s3", "s4", "s5"].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-foreground font-body text-sm leading-relaxed flex-1 mb-5 italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                        <span className="font-display font-bold text-sm text-primary">
                          {t.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-sm text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-body">
                          {t.suburb}, Perth WA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICE GUIDE STRIP ===== */}
      <section
        className="py-14 bg-primary text-primary-foreground"
        aria-label="Pricing guide"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Transparent Pricing — No Hidden Fees
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-xl mx-auto">
              Flat-rate packages based on property size. What you're quoted is
              what you pay.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { size: "1 Bedroom", price: "$220–$300" },
              { size: "2 Bedroom", price: "$320–$420" },
              { size: "3 Bedroom", price: "$420–$550" },
              { size: "4+ Bedroom", price: "$550–$700+" },
            ].map((item) => (
              <div
                key={item.size}
                className="text-center p-5 rounded-xl bg-white/10 border border-white/20"
              >
                <p className="font-display font-bold text-xl sm:text-2xl mb-1">
                  {item.price}
                </p>
                <p className="font-body text-sm text-primary-foreground/70">
                  {item.size}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="font-body text-sm text-primary-foreground/70 mb-4">
              *Prices are a guide. Carpet steam cleaning is an optional extra.
              Call for an exact quote.
            </p>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-body font-semibold hover:bg-white/90 transition-colors"
            >
              <SiWhatsapp className="h-5 w-5 text-green-600" />
              WhatsApp for a Quote
            </a>
          </div>
        </div>
      </section>

      {/* ===== AREAS WE SERVE ===== */}
      <section
        className="py-20 bg-background"
        aria-labelledby="suburbs-heading"
        id="areas-we-serve"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              id="suburbs-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              We Cover All Perth Suburbs
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Click your suburb to learn more about our vacate cleaning service
              near you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {suburbs.map((suburb, index) => (
              <motion.div
                key={suburb.slug}
                data-ocid={`suburbs.item.${index + 1}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link
                  to={`/suburbs/${suburb.slug}` as "/suburbs/perth-cbd"}
                  data-ocid={`suburbs.link.${index + 1}`}
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-brand hover:bg-secondary/40 transition-all duration-300 text-center cursor-pointer h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                    {suburb.name}
                  </span>
                  <span className="text-xs text-muted-foreground font-body group-hover:text-primary/70 transition-colors flex items-center gap-1">
                    Learn More
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground font-body text-sm">
              Don't see your suburb?{" "}
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Message us on WhatsApp
              </a>{" "}
              — we service all of Perth and surrounds.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section
        className="py-20 bg-section"
        aria-labelledby="faq-heading"
        id="faq"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Everything you need to know about vacate cleaning, bond cleaning,
              and getting your deposit back in Perth.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${index + 1}`}
                  data-ocid={`faq.accordion.item.${index + 1}`}
                  className="border border-border rounded-xl px-5 bg-card shadow-xs"
                >
                  <AccordionTrigger className="font-display font-semibold text-base text-foreground text-left hover:text-primary hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-sm leading-relaxed pb-5 whitespace-pre-line">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section
        id="contact"
        className="py-20 bg-section"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
              >
                Get Your Free Quote Today
              </h2>
              <p className="text-muted-foreground font-body text-lg mb-8">
                Fill in the form and we'll get back to you fast. Or jump
                straight to WhatsApp for an instant chat.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: Clock,
                    title: "Fast Response",
                    desc: "We reply within 1 hour during business hours",
                  },
                  {
                    icon: Shield,
                    title: "No Obligation",
                    desc: "Free quotes with no pressure to book",
                  },
                  {
                    icon: RefreshCw,
                    title: "Bond Back Guarantee",
                    desc: "Free re-clean if your agent isn't satisfied",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-sm font-body">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-brand-whatsapp text-white font-body font-semibold text-base hover:opacity-90 transition-opacity"
              >
                <SiWhatsapp className="h-6 w-6" />
                <div className="text-left">
                  <span className="block text-base font-semibold">
                    Chat on WhatsApp
                  </span>
                  <span className="block text-sm opacity-80">
                    0488 841 883 — Get an instant quote
                  </span>
                </div>
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-brand">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="py-16 bg-primary text-primary-foreground"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Your Bond Back?
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Don't risk losing thousands in bond deductions. Book Perth's most
            trusted vacate cleaners today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
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
