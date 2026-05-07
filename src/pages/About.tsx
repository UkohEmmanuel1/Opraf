import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import {
  Building2,
  Scale,
  HardHat,
  Briefcase,
  Target,
  Eye,
  Users,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AboutImage from "@/assets/Allen_2.jpeg";


const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver nothing short of the highest quality in every project and service.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your goals are our priority. We tailor solutions to fit your unique needs.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and ethical standards at every level.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We meet deadlines, honour commitments, and stand behind our work.",
  },
];

const milestones = [
  { year: "2010", event: "Opraf Limited founded in Lagos, Nigeria" },
  { year: "2013", event: "Expanded into construction project management" },
  { year: "2016", event: "Launched legal advisory and property law division" },
  { year: "2019", event: "Opened second office at Allen Avenue, Surulere" },
  { year: "2022", event: "Completed 200+ real estate transactions" },
  {
    year: "2024",
    event: "Recognised as a leading holistic real estate consultancy",
  },
];

const pillars = [
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Property acquisition, sales, leasing, and portfolio management across Lagos.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "End-to-end project management from design to handover with quality assurance.",
  },
  {
    icon: Scale,
    title: "Legal Advisory",
    description:
      "Property law, due diligence, title verification, and dispute resolution.",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description:
      "Strategic consulting for real estate investments and business growth.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}

        <section className="relative py-24 overflow-hidden">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${AboutImage})` }}
          />

          {/* The Red Overlay - Maintaining the dark, premium feel */}
          <div className="absolute inset-0 z-10 bg-red-950/85 mix-blend-multiply" />

          {/* Content Layer */}
          <div className="container relative z-20 px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
              About Opraf Limited
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6" />{" "}
            {/* Accent line for consistency */}
            <p className="text-white/90 max-w-2xl mx-auto text-xl leading-relaxed">
              A holistic Real Estate Consultancy built on trust, expertise, and
              a commitment to excellence.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        {/* Who We Are */}
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 font-serif text-center">
              Who We Are
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Text Side */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Opraf Limited is a Lagos-based real estate consultancy that
                  brings together expertise in property law, construction
                  management, business advisory, and property management under
                  one roof. Founded with the vision of simplifying the
                  complexities of real estate in Nigeria, we serve individuals,
                  corporate clients, and investors seeking reliable, end-to-end
                  property solutions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience and hundreds of successful
                  transactions, our multidisciplinary team ensures that every
                  client receives personalised attention and results that exceed
                  expectations.
                </p>
              </div>

              {/* Image Side */}
              <div className="relative">
                <img
                  src={AboutImage}
                  alt="Opraf Limited Office"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide comprehensive, transparent, and client-focused
                    real estate solutions that empower individuals and
                    businesses to make informed property decisions with
                    confidence.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Eye size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be Nigeria's most trusted and innovative real estate
                    consultancy, setting the standard for integrated property
                    services across West Africa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 font-serif text-center">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do (Pillars) */}
        <section className="py-20 bg-muted">
          <div className="container px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 font-serif text-center">
              What We Do
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="border-none shadow-md">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <pillar.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 font-serif">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 font-serif text-center">
              Our Journey
            </h2>
            <div className="max-w-2xl mx-auto space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-bold text-foreground">{m.year}</p>
                    <p className="text-muted-foreground">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
