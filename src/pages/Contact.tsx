import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactFAB } from "@/components/ui/MobileContactFAB";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from "lucide-react";
const projectTypes = [
  "Menu Design",
  "YouTube Thumbnails",
  "Instagram Reels",
  "Social Media Package",
  "Complete Brand Kit",
  "Other",
];
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });
  };
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-display font-bold mb-4">
                Thank you!
              </h1>
              <p className="text-muted-foreground mb-8">
                Your message has been sent successfully. I'll review your
                project details and get back to you within 24 hours.
              </p>
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Want to schedule a call right away?
                </p>
                <Button variant="accent" className="rounded-2xl" asChild>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar size={18} />
                    Book a Free Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container">
          {/* Page Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Let's Create Together
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell me about your project and I'll get back to you within 24
              hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="rounded-xl h-12"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Business Name</Label>
                    <Input
                      id="business"
                      name="business"
                      placeholder="Your Restaurant"
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-xl h-12"
                      placeholder="prasa@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="rounded-xl h-12"
                      placeholder="+91 **********"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select name="projectType" required>
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem
                          key={type}
                          value={type.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    required
                    className="rounded-xl min-h-[150px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">
                    Reference Images (Optional)
                  </Label>
                  <Input
                    id="attachments"
                    name="attachments"
                    type="file"
                    multiple
                    accept="image/*"
                    className="rounded-xl h-12 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload up to 5 images for reference
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full rounded-2xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-3xl bg-card border border-border">
                <h3 className="font-display font-semibold mb-4">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@sridhanvisuals.design"
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">sridhanvisuals@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/917780142362?text=I%20want%20to%20talk%20with%20you%20regarding%20your%20work."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium">+91 7780142362</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Palasa, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-primary text-primary-foreground">
                <h3 className="font-display font-semibold mb-2">
                  Prefer to talk?
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Schedule a free 15-minute call to discuss your project.
                </p>
                <Button
                  variant="outline"
                  className="w-full rounded-2xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar size={18} />
                    Book a Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileContactFAB />
    </div>
  );
};
export default Contact;
