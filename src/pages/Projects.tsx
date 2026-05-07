import React from "react";
import { Link } from "react-router-dom"; // Added for routing
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HoreImage from "@/assets/construction Ebute meta.jpeg";

// Import your centralized data here (adjust path if necessary)
import { projects } from "@/data/project";


const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative py-20 overflow-hidden">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HoreImage})` }}
          />

          {/* Red Opacity Overlay */}
          <div className="absolute inset-0 z-10 bg-red-900/70 mix-blend-multiply" />

          {/* Content Layer */}
          <div className="container relative z-20 px-4 text-center mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 font-serif">
              Our Projects
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-xl">
              Explore our portfolio of completed and ongoing construction
              projects and exclusive property listings.
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container px-4 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Map over the imported projects data */}
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all group block"
                >
                  {/* Replaced Icon with the actual Project Image */}
                  <div className="h-48 overflow-hidden relative bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary-foreground bg-primary px-2 py-0.5 rounded">
                        {project.status}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 font-serif group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </Link>
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

export default Projects;