const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Opraf Ltd</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              A holistic Real Estate Consultancy delivering excellence in Property Law, Construction, and Business Advisory.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#home" className="hover:text-secondary-foreground transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary-foreground transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-secondary-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Real Estate Brokerage</li>
              <li>Construction Management</li>
              <li>Property Law</li>
              <li>Business Advisory</li>
            </ul>
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
