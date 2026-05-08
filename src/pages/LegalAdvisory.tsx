import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Scale, FileText, FileCheck, Search, LineChart, ShieldCheck, Gavel, BookOpen } from "lucide-react";
import LegalImage from "@/assets/OprafHero_1.png";

const legalServices = [
  { icon: FileText, title: "Property Law", desc: "Expert legal counsel on all property matters including purchase agreements, lease contracts, and property rights." },
  { icon: FileCheck, title: "Title Perfection", desc: "Ensuring clean and marketable titles for your assets through comprehensive title search and verification." },
  { icon: Scale, title: "Conveyancing", desc: "Smooth transfer of property ownership with meticulous documentation and regulatory compliance." },
  { icon: ShieldCheck, title: "Due Diligence", desc: "Thorough investigation of property history, encumbrances, and legal standing before acquisition." },
  { icon: Gavel, title: "Dispute Resolution", desc: "Expert mediation and litigation support for property disputes, boundary issues, and landlord-tenant conflicts." },
  { icon: BookOpen, title: "Regulatory Compliance", desc: "Guidance on zoning laws, building permits, environmental regulations, and government approvals." },
];

const advisoryServices = [
  { icon: Search, title: "Investment Analysis", desc: "Data-driven insights for smart real estate investments, including ROI projections and risk assessment." },
  { icon: LineChart, title: "Market Research", desc: "In-depth market intelligence covering pricing trends, demand forecasting, and competitive analysis." },
];

const LegalAdvisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Premium Dark Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${LegalImage})` }}
          />
          
          {/* The Red Overlay */}
          <div className="absolute inset-0 z-10 bg-red-950/85 mix-blend-multiply" />

          {/* Content Layer */}
          <div className="container relative z-20 px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
              Legal & Advisory
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-xl leading-relaxed">
              Protecting your assets with sound legal expertise and strategic business advisory.
            </p>
          </div>
        </section>

        {/* Legal Services Section */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <h2 className="text-4xl font-bold text-foreground mb-2 font-serif">Legal Services</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">Our legal team provides end-to-end property law services to protect your investments.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">{service.title}</h3>
                    <p className="text-base text-muted-foreground">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Advisory Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4">
            <h2 className="text-4xl font-bold text-foreground mb-2 font-serif">Business Advisory</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">Strategic insights to help you make informed real estate and business decisions.</p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
              {advisoryServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">{service.title}</h3>
                    <p className="text-base text-muted-foreground">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LegalAdvisory;