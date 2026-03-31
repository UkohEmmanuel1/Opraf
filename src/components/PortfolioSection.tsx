import { Link } from "react-router-dom";
import { Building2, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
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
];

const PortfolioSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Recent construction projects and exclusive property listings.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
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

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/projects">
              View All Projects <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
