import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Opraf Limited offer?",
    answer:
      "We provide a holistic suite of services including Real Estate Brokerage (sales, leasing, valuation), Construction Management (project management, development, renovation), Property Law (conveyancing, title perfection), and Business Advisory (investment analysis, market research).",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation by clicking the 'Book Consultation' button in the navigation bar, filling out our contact form, or calling us directly at +234 802 672 1258 during office hours.",
  },
  {
    question: "Do you handle property disputes and litigation?",
    answer:
      "Yes. Our legal team has handled over 500 property-related cases including disputes, title perfection, conveyancing, and regulatory compliance matters across Nigeria.",
  },
  {
    question: "What areas of Nigeria do you operate in?",
    answer:
      "Our head office is at 23 Berkley Street, Onikan, Lagos Island, with a branch office at 19 Allen Avenue, Surulere. We handle projects across Lagos, Abuja, and other major cities in Nigeria.",
  },
  {
    question: "Can Opraf manage my construction project from start to finish?",
    answer:
      "Absolutely. We offer end-to-end construction management covering planning, design oversight, contractor coordination, quality assurance, and handover — ensuring your project is delivered on time and within budget.",
  },
  {
    question: "What is title perfection and why do I need it?",
    answer:
      "Title perfection is the legal process of ensuring that the documents proving ownership of a property are valid, complete, and free of encumbrances. It protects your investment and is essential before buying, selling, or developing land in Nigeria.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Find answers to the most common questions about our services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
