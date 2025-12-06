import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";
const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/sridhan_visuals?igsh=MXhscXZlZnVyMmJsbA==",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/boddepalli-prasanna-kumar-899065365",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Tech_with_prasannakumar",
    label: "YouTube",
  },
];
const footerLinks = {
  services: [
    {
      label: "Menu Design",
      href: "/services",
    },
    {
      label: "YouTube Thumbnails",
      href: "/services",
    },
    {
      label: "Social Media Reels",
      href: "/services",
    },
    {
      label: "Brand Packages",
      href: "/services",
    },
  ],
  company: [
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Process",
      href: "/process",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Client Portal",
      href: "/clients",
    },
  ],
};
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold">
                SridhanVisuals
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/80 text-sm leading-relaxed">
              Crafting stunning menu designs, thumbnails, and visual content
              that makes hungry customers stop and engage.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sridhanvisuals@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  sridhanvisuals@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917780142362"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} />
                  +91 77801 42362
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SridhanVisuals by Prasanna Kumar. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link
              to="/privacy"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
