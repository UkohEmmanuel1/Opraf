import { Link } from "react-router-dom";
import { Building2, HardHat, Scale, TrendingUp } from "lucide-react";

const offers = [
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    desc: "Expert property sales, leasing, and valuation services with market-leading results.",
    hash: "#real-estate",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    desc: "End-to-end project management, development, and renovation solutions.",
    hash: "#construction",
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal",
    desc: "Comprehensive property law, title perfection, and conveyancing services.",
    hash: "#legal",
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Advisory",
    desc: "Data-driven investment analysis and market research for informed decisions.",
    hash: "#advisory",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A comprehensive suite of real estate and advisory services under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Link
                key={offer.id}
                to={`/services${offer.hash}`}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all group block"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">
                  {offer.title}
                </h3>
                <p className="text-base text-muted-foreground">{offer.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
