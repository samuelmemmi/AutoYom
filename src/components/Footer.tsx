import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, Clock, Mail, Star, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-premium-dark text-premium-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Lavage Pro <span className="text-premium-gold">Premium</span>
            </h3>
            <p className="text-premium-light/80 mb-4 italic">
              "Votre voiture, notre fierté."
            </p>
            <p className="text-sm text-premium-light/60">
              Service de lavage automobile haut de gamme à domicile. 
              100% mobile, manuel et respectueux de votre véhicule.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-premium-gold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-premium-light/80">
              <li>Lavage Simple</li>
              <li>Lavage Approfondi</li>
              <li>Lavage Premium</li>
              <li>Polissage carrosserie</li>
              <li>Nettoyage moteur</li>
              <li>Traitement vapeur</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-premium-gold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-premium-gold" />
                <span>+972 547256057</span>
              </div>
              <a href="https://wa.me/972547256057" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-premium-gold" />
                  <span>WhatsApp</span>
                </div>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-premium-gold" />
                <span>Service à domicile</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-premium-gold" />
                <span>Dim-Ven, horaires flexibles</span>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-4">
                <h5 className="font-semibold text-premium-gold mb-2">Suivez-nous</h5>
                <div className="flex gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-premium-light/70 hover:text-premium-gold transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-premium-light/70 hover:text-premium-gold transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-premium-light/70 hover:text-premium-gold transition-colors">
                    <FaTiktok className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-premium-gold mb-4">Réservation</h4>
            <div className="space-y-3">
              <a href="https://wa.me/972538478659" target="_blank" rel="noopener noreferrer">
                <Button variant="gold" className="w-full" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+972547256057">
                <Button
                  variant="outline"
                  className="w-full border-premium-light text-black hover:bg-premium-light"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
              </a>
            </div>
            
            <div className="mt-4 p-3 bg-premium-light/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-premium-gold" />
                <span className="text-sm font-medium">Service Premium</span>
              </div>
              <p className="text-xs text-premium-light/60">
                Intervention dans toute la région avec matériel professionnel
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-premium-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-premium-light/60">
              © 2024 Lavage Pro Premium. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-premium-light/60">
              <span>Service professionnel</span>
              <span>•</span>
              <span>Produits écologiques</span>
              <span>•</span>
              <span>Satisfaction garantie</span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 pt-4 border-t border-premium-light/10">
            <div className="flex items-center gap-4 text-xs text-premium-light/50">
              <Link to="/mentions-legales" className="hover:text-premium-gold transition-colors">
                Mentions légales
              </Link>
              <span>•</span>
              <Link to="/politique-confidentialite" className="hover:text-premium-gold transition-colors">
                Politique de confidentialité
              </Link>
              <span>•</span>
              <Link to="/conditions-utilisation" className="hover:text-premium-gold transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;