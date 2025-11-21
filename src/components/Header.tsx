import { Button } from "@/components/ui/button";
import { Menu, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/Capture d’écran 2025-11-21 à 14.08.22.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { label: t("header.home"), href: "#hero" },
    { label: t("header.guarantees"), href: "#guarantees" },
    { label: t("header.pricing"), href: "#pricing" },
    { label: t("header.services"), href: "#services" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-premium-light/95 backdrop-blur-sm border-b border-premium-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="max-h-16" />
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-premium-dark hover:text-premium-green transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector & CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <a href="tel:+972538478659">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                {t("header.call")}
              </Button>
            </a>
            <a href="https://wa.me/972538478659" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-premium-green text-white hover:bg-premium-gold hover:text-premium-dark border-0">
                <MessageSquare className="w-4 h-4 mr-2" />
                {t("header.whatsapp")}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-premium-dark hover:text-premium-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-premium-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-premium-dark hover:text-premium-green hover:bg-premium-gold/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4">
                <div className="mb-2">
                  <LanguageSelector />
                </div>
                <a href="tel:+972538478659">
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    {t("header.call")}
                  </Button>
                </a>
                <a href="https://wa.me/972538478659" target="_blank" rel="noopener noreferrer">
                  <Button variant="gold" size="sm" className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                      {t("header.whatsapp")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;