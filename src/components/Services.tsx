import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Droplets, Shield, Zap, Brush, Waves } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import simpleWashImage from "@/assets/lavage-auto-quebec.jpg";
import deepWashImage from "@/assets/car-washing.jpg";
import premiumWashImage from "@/assets/114.jpg";
import interiorCleaningImage from "@/assets/dsc03094.jpg";
import steamCleaningImage from "@/assets/interior-cleaning.jpg";
import exteriorPolishingImage from "@/assets/lavage-auto.jpg";
import carWashingImage from "@/assets/hero-car-wash.jpg";
import pressureWashingImage from "@/assets/pressure-washing.jpg";
import doorCleaningImage from "@/assets/steam-cleaning.jpg";

const Services = () => {
  const { t } = useLanguage();

  const formulas = [
    {
      id: 1,
      title: t("services.simple.title"),
      subtitle: t("services.simple.subtitle"),
      icon: <Droplets className="w-8 h-8" />,
      description: t("services.simple.desc"),
      features: [
        "Aspiration complète de l'habitacle",
        "Nettoyage des passages de porte",
        "Dépoussiérage léger des sièges",
        "Lavage extérieur à la main",
        "Séchage manuel",
        "Nettoyage des jantes et pneus"
      ],
      badge: t("services.simple.badge"),
      popular: false,
      image: simpleWashImage
    },
    {
      id: 2,
      image: premiumWashImage
    }
  ];

  const additionalServices = [
    {
      title: t("services.polishing"),
      description: t("services.polishing.desc"),
      icon: <Brush className="w-6 h-6" />
    },
    {
      title: t("services.waxing"),
      description: t("services.waxing.desc"),
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: t("services.engine"),
      description: t("services.engine.desc"),
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: t("services.steam"),
      description: t("services.steam.desc"),
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: t("services.gel"),
      description: t("services.gel.desc"),
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: t("services.vapor"),
      description: t("services.vapor.desc"),
      icon: <Waves className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            {t("services.title")} <span className="text-premium-green">{t("services.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Formulas */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {formulas.map((formula) => (
            <Card 
              key={formula.id} 
              className={`relative transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                formula.popular ? 'ring-2 ring-premium-gold shadow-lg' : ''
              }`}
            >
              {formula.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-premium-gold text-premium-dark">
                  {t("services.popular")}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                {/* Formula Image */}
                 <div className="mb-4 rounded-lg overflow-hidden">
                   <img 
                     src={formula.image} 
                     alt={formula.title}
                     className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                   />
                 </div>
                
                <div className={`mx-auto p-3 rounded-full mb-4 ${
                  formula.popular 
                    ? 'bg-premium-gold text-premium-dark' 
                    : 'bg-premium-green text-premium-light'
                }`}>
                  {formula.icon}
                </div>
                
                <Badge variant="outline" className="w-fit mx-auto mb-2">
                  {formula.badge}
                </Badge>
                
                <CardTitle className="text-2xl font-bold text-premium-dark">
                  {formula.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-premium-green">
                  {formula.subtitle}
                </CardDescription>
                
                <p className="text-sm text-muted-foreground mt-4">
                  {formula.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {formula.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-premium-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/*
                <Button 
                  variant={formula.popular ? "gold" : "premium"} 
                  className="w-full"
                >

                  {t("services.choose")}
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-premium-dark rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-premium-light text-center mb-8">
            {t("services.additional.title")} <span className="text-premium-gold">{t("services.additional.highlight")}</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-premium-light/10 rounded-lg p-6 text-center hover:bg-premium-light/20 transition-colors duration-300"
              >
                <div className="bg-premium-gold rounded-full p-3 w-fit mx-auto mb-4">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-premium-light mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-premium-light/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#contact">
              <Button variant="gold" size="lg">
                {t("services.quote")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;