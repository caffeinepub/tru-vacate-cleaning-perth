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
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { ServiceType } from "../backend";
import { useActor } from "../hooks/useActor";

const serviceOptions = [
  {
    value: "End of Lease Cleaning",
    label: "End of Lease Cleaning",
    backendType: ServiceType.endOfLease,
  },
  {
    value: "Carpet Steam Cleaning",
    label: "Carpet Steam Cleaning",
    backendType: ServiceType.carpetCleaning,
  },
  {
    value: "Window Cleaning",
    label: "Window Cleaning",
    backendType: ServiceType.windowCleaning,
  },
  {
    value: "Oven & Kitchen Cleaning",
    label: "Oven & Kitchen Cleaning",
    backendType: ServiceType.ovenCleaning,
  },
  {
    value: "Bathroom Deep Clean",
    label: "Bathroom Deep Clean",
    backendType: ServiceType.endOfLease,
  },
  {
    value: "Garage & Balcony Cleaning",
    label: "Garage & Balcony Cleaning",
    backendType: ServiceType.pressureWashing,
  },
];

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { actor } = useActor();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to backend
    try {
      if (actor) {
        const selectedService = serviceOptions.find(
          (s) => s.value === serviceType,
        );
        await actor.submitContactForm(
          name,
          email,
          phone,
          selectedService?.backendType ?? ServiceType.endOfLease,
          message,
        );
      }
    } catch {
      // Backend submission failure is non-blocking — continue with mailto
    }

    // Open mailto
    const subject = encodeURIComponent(
      `Bond Cleaning Enquiry from ${name} - ${serviceType || "General Enquiry"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceType}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setName("");
      setEmail("");
      setPhone("");
      setServiceType("");
      setMessage("");
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div
        data-ocid="contact.form.success_state"
        className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-brand-green" />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-2">
          Thanks! We're on it.
        </h3>
        <p className="text-muted-foreground font-body text-sm max-w-xs">
          Your email app should open shortly. If it doesn't, call or WhatsApp us
          on{" "}
          <a href="tel:0488841883" className="text-brand-teal font-medium">
            0488 841 883
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-5 ${className}`}
      aria-label="Contact form"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label
            htmlFor="contact-name"
            className="font-body text-sm font-medium"
          >
            Your Name{" "}
            <span className="text-destructive" aria-hidden>
              *
            </span>
          </Label>
          <Input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Sarah Mitchell"
            required
            autoComplete="name"
            data-ocid="contact.form.name.input"
            className="font-body"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="contact-email"
            className="font-body text-sm font-medium"
          >
            Email Address{" "}
            <span className="text-destructive" aria-hidden>
              *
            </span>
          </Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            autoComplete="email"
            data-ocid="contact.form.email.input"
            className="font-body"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label
            htmlFor="contact-phone"
            className="font-body text-sm font-medium"
          >
            Phone Number{" "}
            <span className="text-destructive" aria-hidden>
              *
            </span>
          </Label>
          <Input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0400 000 000"
            required
            autoComplete="tel"
            data-ocid="contact.form.phone.input"
            className="font-body"
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="contact-service"
            className="font-body text-sm font-medium"
          >
            Service Required
          </Label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger
              id="contact-service"
              data-ocid="contact.form.service.select"
              className="font-body"
            >
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="font-body"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="contact-message"
          className="font-body text-sm font-medium"
        >
          Tell Us About Your Property
        </Label>
        <Textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. 3-bedroom house in Subiaco, move-out date 20 March. Carpets need steam cleaning too."
          rows={4}
          data-ocid="contact.form.message.textarea"
          className="font-body resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !name || !email || !phone}
        data-ocid="contact.form.submit_button"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold py-3 h-auto"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span data-ocid="contact.form.loading_state">Sending...</span>
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Get My Free Quote
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground font-body text-center">
        We'll reply within 1 hour. No spam, no hassle — just a fast, friendly
        quote.
      </p>
    </form>
  );
}
