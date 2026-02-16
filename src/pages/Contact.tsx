import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-20 bg-primary">
          <div className="container px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 font-serif">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Ready to start your next project? Get in touch with our team today.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
