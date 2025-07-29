import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/dsc03094.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Lavage automobile professionnel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-dark/80 via-premium-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left max-w-3xl">
          {/* Logo/Brand */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-premium-light mb-4">
            Lavage Auto Premium <span className="text-premium-gold">À Domicile</span>
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl text-premium-gold font-medium mb-6 italic">
            "Votre voiture, notre fierté."
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-premium-light/90 mb-8 leading-relaxed">
            Service de lavage automobile haut de gamme à domicile. 
            <br className="hidden md:block" />
            Intervention mobile, 100% manuel et respectueux de votre véhicule.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-premium-light">
              <MapPin className="w-5 h-5 text-premium-gold" />
              <span>Service à domicile</span>
            </div>
            <div className="flex items-center gap-2 text-premium-light">
              <Star className="w-5 h-5 text-premium-gold" />
              <span>Produits professionnels</span>
            </div>
            <div className="flex items-center gap-2 text-premium-light">
              <Phone className="w-5 h-5 text-premium-gold" />
              <span>100% autonome</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-6 font-semibold"
            >
              Réserver maintenant
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-premium-light text-black hover:bg-premium-light hover:text-premium-dark"
            >
              Nos tarifs
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-premium-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-premium-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;