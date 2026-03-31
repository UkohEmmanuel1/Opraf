import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  formOnly?: boolean;
}

const ContactSection = ({ formOnly = false }: ContactSectionProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  const form = (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" required className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="john@example.com" required className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+234 802 672 1258" className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="service">Service Required</Label>
        <Select required>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="buy">Buy Property</SelectItem>
            <SelectItem value="legal">Legal Help</SelectItem>
            <SelectItem value="construction">Construction Quote</SelectItem>
            <SelectItem value="advisory">Advisory</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );

  if (formOnly) return form;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to start your next project? Contact us today.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          {form}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
