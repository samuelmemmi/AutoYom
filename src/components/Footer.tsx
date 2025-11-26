import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, Clock, Mail, Star, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-premium-light text-premium-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Auto <span className="text-premium-green">Yom</span>
            </h3>
            <p className="text-premium-dark/80 mb-4 italic">
              {t("footer.slogan")}
            </p>
            <p className="text-sm text-premium-dark/60">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-premium-green mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-premium-green" />
                <span>+972 547256057</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-premium-green" />
                <span>{t("footer.serviceAtHome")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-premium-green" />
                <span>{t("footer.openingHours")}</span>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-4">
                <h5 className="font-semibold text-premium-green mb-2">{t("footer.followUs")}</h5>
                <div className="flex gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-premium-dark/70 hover:text-premium-green transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-premium-dark/70 hover:text-premium-green transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-premium-green mb-4">{t("footer.booking")}</h4>
            <div className="space-y-3">
              <a href="https://wa.me/972547256057" target="_blank" rel="noopener noreferrer">
                <Button variant="green" className="w-full" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+972547256057">
                <Button
                  variant="outline"
                  className="w-full border-premium-dark text-black hover:bg-premium-light"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t("footer.call")}
                </Button>
              </a>
            </div>
            
            <div className="mt-4 p-3 bg-premium-light/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-premium-green" />
                <span className="text-sm font-medium">{t("footer.premiumService")}</span>
              </div>
              <p className="text-xs text-premium-dark/60">
                {t("footer.professionalEquipment")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-premium-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-premium-dark/60">
              © 2025 AutoYom. {t("footer.reserved")}.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-premium-dark/60">
              <span>{t("footer.professionalService")}</span>
              <span>•</span>
              <span>{t("footer.ecologicalProducts")}</span>
              <span>•</span>
              <span>{t("footer.satisfactionGuaranteed")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;