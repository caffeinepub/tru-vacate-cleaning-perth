import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import { useMetaTags } from "../hooks/useMetaTags";

interface ServiceSectionProps {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  content: React.ReactNode;
  reverse?: boolean;
  index: number;
}

function ServiceSection({
  title,
  imageSrc,
  imageAlt,
  content,
  reverse = false,
  index,
}: ServiceSectionProps) {
  return (
    <section
      className={`py-16 sm:py-20 ${index % 2 === 0 ? "bg-background" : "bg-section"}`}
      aria-labelledby={`service-${index + 1}-heading`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div className={reverse ? "lg:col-start-2" : ""}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-2xl shadow-brand-lg object-cover aspect-[16/10]"
              loading="lazy"
            />
          </div>
          <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
            <h2
              id={`service-${index + 1}-heading`}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5"
            >
              {title}
            </h2>
            <div className="font-body text-muted-foreground leading-relaxed space-y-4">
              {content}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-whatsapp text-white font-body font-semibold hover:opacity-90 transition-opacity"
              >
                <SiWhatsapp className="h-4 w-4" />
                Get a Free Quote
              </a>
              <a
                href="tel:0488841883"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Call 0488 841 883
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const includedItems = [
  "All rooms, bedrooms and living areas",
  "Kitchen — inside cupboards, oven, cooktop, rangehood",
  "All bathrooms and toilets",
  "Windows inside and out",
  "All floors vacuumed and mopped",
  "Walls, skirting boards and light switches",
  "Ceiling cobwebs and light fittings",
  "Laundry and garage areas",
];

export function Services() {
  useMetaTags({
    title:
      "Vacate Cleaning Services Perth | End of Lease, Carpet, Window & More",
    description:
      "Tru Vacate Cleaning Perth offers complete vacate cleaning services: end of lease cleaning, carpet steam cleaning, window cleaning, oven cleaning, bathroom cleaning and more.",
    keywords:
      "end of lease cleaning Perth, carpet steam cleaning Perth, window cleaning Perth, oven cleaning Perth, bond cleaning services Perth",
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
                <li className="text-white font-medium">Services</li>
              </ol>
            </nav>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Our Vacate Cleaning Services in Perth
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
              From a full end of lease clean to carpet steam cleaning and window
              washing — we cover everything your property manager checks. One
              company. One visit. Your bond back.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Strip */}
      <section className="py-10 bg-section border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <p className="font-display font-bold text-base text-foreground">
                Full End of Lease Clean Includes:
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-body text-foreground bg-card border border-border rounded-lg px-3 py-1.5"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE 1: End of Lease ===== */}
      <ServiceSection
        id="end-of-lease"
        index={0}
        title="End of Lease Cleaning Perth"
        imageSrc="/assets/generated/service-end-of-lease-cleaning.dim_800x500.jpg"
        imageAlt="Professional end of lease cleaning service Perth - Tru Vacate Cleaning Perth cleaner cleaning empty rental kitchen"
        content={
          <>
            <p>
              Moving out of a rental property in Perth? You need a professional
              end of lease clean to get your full bond back. At Tru Vacate
              Cleaning Perth, we make moving out stress-free. Our team of expert
              cleaners shows up on time and cleans every single corner of your
              home, just the way your property manager expects it.
            </p>
            <p>
              <strong className="text-foreground">
                What do we clean? Everything.
              </strong>{" "}
              We clean inside all kitchen cupboards and drawers, scrub the oven
              and cooktop until they shine, deep clean your fridge (if needed),
              wipe down all benchtops and splashbacks, and leave your kitchen
              spotless. In the bathrooms, we scrub tiles and grout, descale taps
              and showerheads, clean toilets thoroughly, wipe mirrors, and mop
              floors until they gleam.
            </p>
            <p>
              In every bedroom and living area, we dust all surfaces, wipe
              skirting boards, clean light switches and power points, vacuum and
              mop all floors, and remove cobwebs from ceilings and cornices. We
              also clean all windows inside and out, wipe down all doors and
              door frames, clean the laundry, and wipe out all wardrobes.
            </p>
            <p>
              Our cleaners work from the{" "}
              <strong className="text-foreground">
                same checklist that Perth real estate agents use
              </strong>
              . So when your property manager does their final inspection, your
              home will be in perfect condition.
            </p>
            <p>
              Why does this matter so much? Because your bond is real money. In
              Perth, the average bond for a 3-bedroom house is around $2,400.
              Losing even part of that bond hurts. That is why we offer our{" "}
              <strong className="text-foreground">
                100% Bond Back Guarantee
              </strong>{" "}
              — if your agent finds anything we missed, we come back and fix it
              for free.
            </p>
            <p>
              Our end of lease cleaning service covers all Perth suburbs
              including Subiaco, Fremantle, Joondalup, Rockingham, Mandurah,
              Armadale, Midland, Osborne Park, Victoria Park, South Perth, and
              everywhere in between. We bring all our own equipment and
              eco-friendly cleaning products. You do not need to supply
              anything.
            </p>
            <p>
              Same-day and next-day bookings are available. Call us or message
              us on WhatsApp at 0488 841 883 to get a free, no-obligation quote
              today. Our prices are transparent, fair, and competitive. No
              hidden fees, no surprises — just a spotless home and your bond
              back in your pocket.
            </p>
          </>
        }
      />

      {/* ===== SERVICE 2: Carpet Steam ===== */}
      <ServiceSection
        id="carpet-steam"
        index={1}
        reverse
        title="Carpet Steam Cleaning Perth"
        imageSrc="/assets/generated/service-carpet-steam-cleaning.dim_800x500.jpg"
        imageAlt="Professional carpet steam cleaning Perth - Tru Vacate Cleaning Perth cleaner using hot water extraction on rental property carpet"
        content={
          <>
            <p>
              Dirty carpets are one of the biggest reasons Perth tenants lose
              part of their bond. When you move out of a rental, your carpets
              need to look as clean as they did on the day you moved in. That is
              where Tru Vacate Cleaning Perth's professional carpet steam
              cleaning service comes in. We use{" "}
              <strong className="text-foreground">hot water extraction</strong>{" "}
              — the most powerful carpet cleaning method available — to remove
              dirt, stains, bacteria, allergens, and odours from deep within
              your carpet fibres.
            </p>
            <p>
              Our carpet steam cleaning process starts with a thorough
              pre-vacuum to remove loose dirt and debris. We then apply a
              professional pre-treatment spray to break down tough stains,
              grease, and high-traffic soiling. Next, our hot water extraction
              machine pumps hot water and professional cleaning solution deep
              into your carpet and then sucks it all back out, bringing all the
              dirt with it. The result? Carpets that look fresh, smell clean,
              and dry quickly.
            </p>
            <p>
              We treat all kinds of carpet stains including pet urine and
              odours, red wine and beverage spills, food stains, mud and soil,
              and general dirt from everyday use. In many cases, our steam
              cleaning can restore carpets that look like they need replacing,{" "}
              <strong className="text-foreground">
                saving you hundreds of dollars in bond deductions
              </strong>
              .
            </p>
            <p>
              Most property managers in Perth specifically require professional
              carpet steam cleaning at the end of a tenancy. Some real estate
              agents even require you to provide a receipt from a professional
              carpet cleaner as proof. When you book carpet steam cleaning with
              Tru Vacate Cleaning Perth, we provide you with a professional
              receipt that you can show your agent.
            </p>
            <p>
              Our carpet steam cleaning service covers all types of carpet
              including wool, nylon, polyester, berber, and loop pile carpets.
              We know how to handle each type without causing damage or
              shrinkage. Carpet steam cleaning can be booked as a standalone
              service or combined with our end of lease cleaning package for a
              better price. Call us on 0488 841 883 to get a fast, free quote.
            </p>
          </>
        }
      />

      {/* ===== SERVICE 3: Window Cleaning ===== */}
      <ServiceSection
        id="window-cleaning"
        index={2}
        title="Window Cleaning Perth"
        imageSrc="/assets/generated/service-window-cleaning.dim_800x500.jpg"
        imageAlt="Professional window cleaning service Perth - Tru Vacate Cleaning Perth cleaner using squeegee on rental property windows"
        content={
          <>
            <p>
              Dirty windows are one of the first things a property manager
              notices during a final inspection. Streaky glass, dusty frames,
              and dirty fly screens can cost you part of your bond — even if
              everything else in the property is spotless. Tru Vacate Cleaning
              Perth's professional window cleaning service makes sure every
              window in your rental property is{" "}
              <strong className="text-foreground">
                crystal clear, streak-free, and ready for inspection
              </strong>
              .
            </p>
            <p>
              Our window cleaners use professional squeegees, eco-friendly glass
              cleaning solution, and soft microfibre cloths to leave your
              windows flawless. We clean both the inside and outside of all
              windows. We also clean window tracks, window frames, and fly
              screens — the details that real estate agents always check. We
              remove all dirt, dust, fingerprints, water stains, and smudges
              from every pane of glass.
            </p>
            <p>
              Perth's climate means windows get dirty fast. Dust from the bush,
              salt air from the coast, and everyday condensation all leave marks
              on glass surfaces. Our professional team knows exactly how to
              tackle Perth's specific window cleaning challenges.
            </p>
            <p>
              We clean all types of windows including sliding windows, casement
              windows, sash windows, louvre windows, bi-fold windows and doors,
              glass sliding doors, and glass balustrades. No window is too big
              or too small for our team. We bring all our own equipment
              including ladders, extension poles, and professional squeegees.
            </p>
            <p>
              Window cleaning is included as standard in our full end of lease
              cleaning packages. You can also book it as a standalone service if
              you only need your windows done. Many Perth tenants book our
              window cleaning alongside carpet steam cleaning for a complete and
              impressive move-out result.
            </p>
            <p>
              We service all Perth suburbs including CBD, North Perth, South
              Perth, East Perth, Subiaco, Claremont, Mosman Park, Cottesloe,
              Scarborough, Stirling, Midland, Cannington, Armadale, Fremantle,
              Rockingham, and all surrounding areas. Same-day and next-day
              appointments are available.
            </p>
          </>
        }
      />

      {/* ===== SERVICE 4: Oven & Kitchen ===== */}
      <ServiceSection
        id="oven-kitchen"
        index={3}
        reverse
        title="Oven & Kitchen Cleaning Perth"
        imageSrc="/assets/generated/service-oven-kitchen-cleaning.dim_800x500.jpg"
        imageAlt="Professional oven and kitchen deep cleaning Perth - Tru Vacate Cleaning Perth cleaner scrubbing rental property oven"
        content={
          <>
            <p>
              The kitchen is the hardest room to clean in any rental property.
              Grease, grime, burnt-on food, and soap scum build up over months
              or years of cooking. When you move out, your property manager will
              inspect every inch of your kitchen — inside the oven, inside
              cupboards, under the rangehood filter, and behind the cooktop. Tru
              Vacate Cleaning Perth's professional oven and kitchen cleaning
              service{" "}
              <strong className="text-foreground">
                tackles the toughest kitchen grime so you don't have to
              </strong>
              .
            </p>
            <p>
              Our kitchen deep clean starts with your oven. We use
              professional-grade caustic cleaners to dissolve years of burnt-on
              grease from the oven interior, oven racks, oven trays, and oven
              door glass. We soak all removable parts and scrub them
              individually before rinsing them clean. The oven door glass gets
              special attention because it is one of the first things property
              managers check.
            </p>
            <p>
              We also clean the cooktop thoroughly, including under the burner
              caps on gas stoves and around the elements on electric stoves.
              Next, we tackle the rangehood and rangehood filter. These trap
              grease from cooking and get incredibly dirty over time. We remove
              the filter, soak it, degrease it, and reinstall it looking like
              new.
            </p>
            <p>
              We then clean inside all kitchen cupboards and drawers — wiping
              every shelf, every door interior, and every hinge. We clean all
              benchtops, the splashback, and any tiles around the kitchen. We
              clean the dishwasher inside and out, wipe the refrigerator inside
              and out (if needed), and degrease the outside of all appliances
              including the microwave.
            </p>
            <p>
              Finally, we mop the kitchen floor and wipe down all door frames,
              handles, and light switches. By the time we are done, your kitchen
              will be{" "}
              <strong className="text-foreground">
                cleaner than it has been since the day it was built
              </strong>
              . Our oven and kitchen cleaning service is included in all our
              full end of lease cleaning packages. You can also book it as a
              standalone deep clean.
            </p>
          </>
        }
      />

      {/* ===== SERVICE 5: Bathroom ===== */}
      <ServiceSection
        id="bathroom"
        index={4}
        title="Bathroom Deep Clean Perth"
        imageSrc="/assets/generated/service-bathroom-cleaning.dim_800x500.jpg"
        imageAlt="Professional bathroom deep cleaning Perth - Tru Vacate Cleaning Perth cleaner scrubbing tiles and shower in rental property bathroom"
        content={
          <>
            <p>
              Bathrooms are one of the most inspected areas during a final
              property inspection in Perth. Property managers check for soap
              scum on tiles and shower screens, limescale on taps and
              showerheads, mould in grout lines, dirty toilets, smudged mirrors,
              and grimy floors. One dirty bathroom can cost you a significant
              bond deduction. Tru Vacate Cleaning Perth's bathroom deep clean
              service removes{" "}
              <strong className="text-foreground">
                every trace of grime so your bathroom passes inspection every
                time
              </strong>
              .
            </p>
            <p>
              Our bathroom cleaning process is thorough and methodical. We start
              at the top and work our way down. We clean and descale the
              showerhead and taps, remove soap scum from the shower screen or
              curtain rail, scrub shower tiles and grout, and clean the shower
              floor drain. We use professional mould-removal products on any
              black mould in grout lines or on silicone seals.
            </p>
            <p>
              We clean the vanity thoroughly — descaling the tap, cleaning the
              basin, wiping the cabinet inside and out, and polishing the mirror
              until it is streak-free. The toilet gets a complete deep clean
              including the seat, lid, bowl (inside and out), and the area
              behind and underneath the toilet.
            </p>
            <p>
              We wipe down all bathroom walls, clean any bathroom tiles, mop the
              floor, and wipe skirting boards. We also clean bathroom exhaust
              fans, light fittings, and towel rails. If your property has an
              ensuite as well as a main bathroom, we clean both to the same high
              standard.
            </p>
            <p>
              Perth's hard water is notorious for leaving limescale and calcium
              deposits on taps, shower screens, and toilet bowls. Our descaling
              products are specifically designed to dissolve these stubborn
              deposits without scratching or damaging the surfaces. The result
              is a bathroom that{" "}
              <strong className="text-foreground">
                sparkles and meets even the strictest real estate inspection
                standards
              </strong>
              .
            </p>
            <p>
              Our bathroom deep clean service is included in all end of lease
              packages. You can also book a standalone bathroom clean for a
              rental property, Airbnb, or your own home. No bathroom is too
              dirty for our professional team. Same-day bookings available in
              most Perth suburbs.
            </p>
          </>
        }
      />

      {/* ===== SERVICE 6: Garage & Balcony ===== */}
      <ServiceSection
        id="garage-balcony"
        index={5}
        reverse
        title="Garage & Balcony Cleaning Perth"
        imageSrc="/assets/generated/service-garage-balcony-cleaning.dim_800x500.jpg"
        imageAlt="Professional garage and balcony cleaning Perth - Tru Vacate Cleaning Perth cleaner pressure washing garage floor and outdoor area"
        content={
          <>
            <p>
              When tenants focus on cleaning the inside of a rental property,
              they often forget about the garage and balcony. But your property
              manager will not forget. Dirty garages with oil stains on the
              floor, dusty shelves, cobwebs in the corners, and rubbish left
              behind are a common cause of bond deductions in Perth. Tru Vacate
              Cleaning Perth's garage and balcony cleaning service makes sure
              these areas are{" "}
              <strong className="text-foreground">
                just as clean as the inside of your home
              </strong>
              .
            </p>
            <p>
              Our garage cleaning service covers everything from floor to
              ceiling. We sweep and mop the garage floor, removing dust, dirt,
              and light oil stains. For heavier oil or grease stains, we use
              professional degreasers that break down stains that standard
              cleaning products cannot touch. We wipe down garage shelves and
              storage areas, remove cobwebs from walls and ceilings, clean the
              garage door (inside and out), wipe down the walls, and make sure
              the space is completely empty and tidy.
            </p>
            <p>
              Our balcony and outdoor area cleaning covers balcony floors,
              balcony railings, outdoor walls, sliding glass doors (inside and
              out), outdoor light fittings, and any outdoor storage cupboards.
              We remove dirt, grime, bird droppings, dust, and mould from all
              surfaces. We sweep and mop balcony tiles or boards and leave the
              entire outdoor area looking neat and presentable.
            </p>
            <p>
              For properties with courtyards, we sweep and tidy the courtyard
              area, remove cobwebs, and make sure the space looks clean and
              well-maintained. For homes with a driveway, we can sweep or blow
              the driveway as part of our service.
            </p>
            <p>
              Many Perth rental properties have rules about leaving the garage
              floor clean and free of stains. Oil and grease stains from
              vehicles can be very difficult to remove without professional
              products and equipment. Our team has the right tools and products
              to deal with these stains quickly and effectively, saving you from
              a potential bond claim.
            </p>
            <p>
              Garage and balcony cleaning is included as part of our
              comprehensive end of lease cleaning packages. You can also book
              these areas as a standalone service. Get in touch with Tru Vacate
              Cleaning Perth today on 0488 841 883 or send us a WhatsApp message
              to book your garage and balcony clean. We make sure every inch of
              your rental property is immaculate before you hand back the keys.
            </p>
          </>
        }
      />

      {/* CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Book Any Service Today
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            All services come with our 100% Bond Back Guarantee. Same-day
            bookings available across Perth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-body font-semibold px-8"
              >
                Get a Free Quote
              </Button>
            </Link>
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
