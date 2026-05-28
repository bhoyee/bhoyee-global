import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

const serviceLinks = [
  { name: 'Elite Training & Leadership', path: '/services#training' },
  { name: 'Business Transformation', path: '/services#transformation' },
  { name: 'Digital Innovation & Automation', path: '/services#automation' },
  { name: 'Custom Software & AI Engineering', path: '/services#software' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex">
              <img
                src="/images/logo/bhoyee-global-logo.png"
                alt="Bhoyee Global Enterprise"
                className="h-auto w-56 object-contain brightness-0"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional innovation-focused registered business specializing in Elite Training, Business Transformation, Digital Innovation & Automation, and Custom Software & AI Engineering.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Company</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <a
              href="mailto:hello@bhoyee.com"
              className="block text-lg font-semibold text-foreground transition-colors hover:text-primary"
            >
              hello@bhoyee.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-muted-foreground">
              © 2026 Bhoyee Global Enterprise. Registered under Companies and Allied Matters Act 2020.
            </p>
            <p className="text-xs font-mono text-muted-foreground/60">
              Registration No: BN 3098721
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
