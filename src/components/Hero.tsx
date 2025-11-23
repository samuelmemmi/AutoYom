import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import { useLanguage } from "@/contexts/LanguageContext";
import { ReservationPopup } from "@/components/ReservationPopup";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-dark/80 via-premium-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          {/* Logo/Brand */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-premium-light mb-4">
            {t("hero.titlee")}
          </h1>
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 italic text-premium-light">
            {t("hero.slogan")}
          </p>
          
          {/* Description */}
          {/* <p className="text-lg md:text-xl text-premium-light/90 mb-8 leading-relaxed">
            {t("hero.description")}
            <br className="hidden md:block" />
            {t("hero.description2")}
          </p> */}

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center">
            <div className="flex items-center gap-2 text-premium-light">
              <MapPin className="w-5 h-5 text-brand-blue" />
              <span>{t("hero.featureHome")}</span>
            </div>
            <div className="flex items-center gap-2 text-premium-light">
              <Star className="w-5 h-5 text-brand-blue" />
              <span>{t("hero.featureProducts")}</span>
            </div>
            <div className="flex items-center gap-2 text-premium-light">
              <Phone className="w-5 h-5 text-brand-blue" />
              <span>{t("hero.featureAutonomous")}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ReservationPopup>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 font-semibold bg-brand-blue text-white hover:brightness-95"
              >
                {t("hero.cta")}
              </Button>
            </ReservationPopup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;