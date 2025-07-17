import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin, Clock, Mail, Star } from "lucide-react";

const Footer = () => {
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
                <span>+972 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-premium-gold" />
                <span>WhatsApp disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-premium-gold" />
                <span>Service à domicile</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-premium-gold" />
                <span>Lun-Sam, horaires flexibles</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-premium-gold mb-4">Réservation</h4>
            <div className="space-y-3">
              <Button variant="gold" className="w-full" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" className="w-full border-premium-light text-premium-light hover:bg-premium-light hover:text-premium-dark" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </Button>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;