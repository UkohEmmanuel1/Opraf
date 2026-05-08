import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative py-24 overflow-hidden">
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
    style={{ backgroundImage: `url(${ContactImage})` }}
  />
  
  {/* The Red Overlay - Maintaining the dark, premium feel */}
  <div className="absolute inset-0 z-10 bg-red-950/85 mix-blend-multiply" />

  {/* Content Layer */}
  <div className="container relative z-20 px-4 text-center">
    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
      Contact Us
    </h1>
    <div className="w-24 h-1 bg-red-500 mx-auto mb-6" /> {/* Accent line for consistency */}
    <p className="text-white/90 max-w-2xl mx-auto text-xl leading-relaxed">
      Ready to start your next project? Get in touch with our team today.
    </p>
  </div>
</section>

        {/* Contact info + form */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Left - Contact info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 font-serif">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Head Office</p>
                        <p className="text-base text-muted-foreground">
                          23 Berkley Street, Onikan,<br />Lagos Island
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Branch Office</p>
                        <p className="text-base text-muted-foreground">
                          19 Allen Avenue, Surulere,<br />Lagos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-base text-muted-foreground">
                          <a href="tel:+2348026721258" className="hover:text-primary transition-colors">+234 802 672 1258</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-base text-muted-foreground">
                          <a href="mailto:info@oprafltd.com" className="hover:text-primary transition-colors">info@oprafltd.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">WhatsApp</p>
                        <p className="text-base text-muted-foreground">
                          <a href="https://wa.me/2348026721258" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+234 802 672 1258</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2 font-serif text-lg">Office Hours</h4>
                  <p className="text-base text-muted-foreground">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Right - Form */}
              <ContactSection formOnly />
            </div>
          </div>
        </section>
      </main>
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Contact;
