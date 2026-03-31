import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Opraf Ltd</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              A holistic Real Estate Consultancy delivering excellence in Property Law, Construction, and Business Advisory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-secondary-foreground transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary-foreground transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-secondary-foreground transition-colors">Projects</Link></li>
              <li><Link to="/legal-advisory" className="hover:text-secondary-foreground transition-colors">Legal & Advisory</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>23 Berkley Street, Onikan, Lagos Island</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>19 Allen Avenue, Surulere, Lagos</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+2348026721258" className="hover:text-secondary-foreground transition-colors">+234 802 672 1258</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@oprafltd.com" className="hover:text-secondary-foreground transition-colors">info@oprafltd.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="flex-shrink-0" />
                <a href="https://wa.me/2348026721258" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://twitter.com/oprafltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com/oprafltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com/oprafltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://tiktok.com/@oprafltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/50">
          © {new Date().getFullYear()} Opraf Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
