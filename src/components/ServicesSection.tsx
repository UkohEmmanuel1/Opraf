import { useState } from "react";
import {
  Building2,
  HardHat,
  Scale,
  TrendingUp,
  Home,
  KeyRound,
  BarChart3,
  Hammer,
  Paintbrush,
  ClipboardCheck,
  FileText,
  FileCheck,
  Search,
  LineChart,
} from "lucide-react";

const tabs = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Building2,
    services: [
      { icon: Home, title: "Sales", desc: "Expert property sales with market-leading results." },
      { icon: KeyRound, title: "Leasing", desc: "Comprehensive leasing solutions for landlords and tenants." },
      { icon: BarChart3, title: "Valuation", desc: "Accurate property valuations backed by market data." },
    ],
  },
  {
    id: "construction",
    label: "Construction",
    icon: HardHat,
    services: [
      { icon: ClipboardCheck, title: "Project Management", desc: "End-to-end project oversight ensuring on-time delivery." },
      { icon: Hammer, title: "Development", desc: "From greenfield to turnkey development projects." },
      { icon: Paintbrush, title: "Renovation", desc: "Transforming existing spaces with modern standards." },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    icon: Scale,
    services: [
      { icon: FileText, title: "Property Law", desc: "Expert legal counsel on all property matters." },
      { icon: FileCheck, title: "Title Perfection", desc: "Ensuring clean and marketable titles for your assets." },
      { icon: Scale, title: "Conveyancing", desc: "Smooth transfer of property ownership." },
    ],
  },
  {
    id: "advisory",
    label: "Advisory",
    icon: TrendingUp,
    services: [
      { icon: Search, title: "Investment Analysis", desc: "Data-driven insights for smart real estate investments." },
      { icon: LineChart, title: "Market Research", desc: "In-depth market intelligence to inform your decisions." },
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState("real-estate");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive suite of real estate and advisory services under one roof.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activeTab.services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
