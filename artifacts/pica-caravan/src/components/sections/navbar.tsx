import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Veicoli", href: "#veicoli" },
    { label: "Servizi", href: "#servizi" },
    { label: "Azienda", href: "#azienda" },
    { label: "Blog", href: "#blog" },
    { label: "Contatti", href: "#contatti" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a
                href="tel:3332327592"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>333 2327592</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-foreground block py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:3332327592"
            className="flex items-center gap-2 text-lg font-medium text-primary py-2"
          >
            <Phone className="h-5 w-5" />
            <span>333 2327592</span>
          </a>
        </div>
      )}
    </header>
  );
}
