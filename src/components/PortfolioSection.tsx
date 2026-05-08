import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import your centralized data
import { projects } from "@/data/project";

const PortfolioSection = () => {
  // Grab only the first 3 projects to feature on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Featured Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Recent construction projects and exclusive property listings.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all group block"
            >
              {/* Image Container */}
              <div className="h-48 bg-primary/10 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary-foreground bg-primary px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-xl text-foreground mb-2 font-serif group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
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