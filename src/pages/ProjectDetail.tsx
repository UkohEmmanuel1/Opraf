import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

// Import your data
import { projects } from "@/data/project";

const ProjectDetail: React.FC = () => {
  // Grab the dynamic ID from the URL (e.g., "lekki-commercial-hub")
  const { id } = useParams<{ id: string }>();

  // Find the exact project from our data array
  const project = projects.find((p) => p.id === id);

  // Get 2 *other* projects to show at the bottom (excluding the current one)
  const otherProjects = projects.filter((p) => p.id !== id).slice(0, 2);

  // If someone types a wrong URL, show a clean 404 message
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you are looking for does not exist or has been removed.</p>
          <Link to="/projects" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
            View All Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <article className="container max-w-4xl mx-auto px-4">
          
          {/* Top Navigation / Back Button */}
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary-foreground uppercase bg-primary rounded">
                {project.status}
              </span>
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-serif leading-tight mb-6">
              {project.title}
            </h1>
            
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span className="text-lg">{project.location}</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-16 shadow-2xl relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          {/* whitespace-pre-line ensures the line breaks in your data file are respected */}
          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground whitespace-pre-line leading-relaxed font-light">
            {project.content}
          </div>

          <hr className="my-20 border-border" />

          {/* Bottom Navigation: Discover Other Projects */}
          <section>
            <h3 className="text-3xl font-bold text-foreground font-serif mb-8">
              Discover More
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/projects/${item.id}`} 
                  className="group block"
                >
                  <div className="overflow-hidden rounded-xl bg-card border border-border shadow-sm group-hover:shadow-xl transition-all">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-black/60 backdrop-blur-sm rounded">
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-xl font-bold text-foreground font-serif group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </article>
      </main>

      {/* Reusing your Call to Action and Footer */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default ProjectDetail;