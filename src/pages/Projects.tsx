import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Building2, HardHat } from "lucide-react";

const allProjects = [
  {
    title: "The Meridian Residences",
    category: "Construction",
    icon: HardHat,
    description: "42-unit luxury residential development in Victoria Island.",
    status: "Completed",
  },
  {
    title: "Lekki Commercial Hub",
    category: "Property Listing",
    icon: Building2,
    description: "Grade-A office spaces available for lease in Lekki Phase 1.",
    status: "Available",
  },
  {
    title: "Ikoyi Penthouse Collection",
    category: "Property Listing",
    icon: Building2,
    description: "Exclusive waterfront penthouses with panoramic city views.",
    status: "Available",
  },
  {
    title: "Abuja Central Mall",
    category: "Construction",
    icon: HardHat,
    description: "35,000 sqm mixed-use retail and office development.",
    status: "In Progress",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-20 bg-primary">
          <div className="container px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-primary-foreground mb-4 font-serif">
              Our Projects
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-xl">
              Explore our portfolio of completed and ongoing construction projects and exclusive property listings.
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow group"
                  >
                    <div className="h-40 bg-primary/10 flex items-center justify-center">
                      <Icon size={48} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary-foreground bg-primary px-2 py-0.5 rounded">
                          {project.status}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.category}</span>
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-1 font-serif">{project.title}</h3>
                      <p className="text-base text-muted-foreground">{project.description}</p>
                    </div>
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

export default Projects;
