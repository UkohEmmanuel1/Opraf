import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="py-20 bg-primary">
          <div className="container px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 font-serif">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              A comprehensive suite of real estate, construction, legal, and advisory services — all under one roof.
            </p>
          </div>
        </section>
        <ServicesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
