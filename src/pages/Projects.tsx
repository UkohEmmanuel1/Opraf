import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-20 bg-primary">
          <div className="container px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 font-serif">
              Our Projects
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Explore our portfolio of completed and ongoing construction projects and exclusive property listings.
            </p>
          </div>
        </section>
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
