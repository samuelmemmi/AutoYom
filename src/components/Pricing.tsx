import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Truck, Users, CarFront } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import compactCarImage from "@/assets/lavage-auto.jpg";
import sedanCarImage from "@/assets/lavage-auto-866x505.jpg";
import largeCarImage from "@/assets/steam-cleaning.jpg";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      type: t("pricing.compact"),
      price: "130 ₪",
      icon: <Car className="w-8 h-8" />,
      description: t("pricing.compact.desc"),
      examples: ["Kia Picanto", "Fiat 500", "Austin Cooper", "Volkswagen Polo"],
      color: "bg-premium-green",
      image: compactCarImage,
      link: "https://calendly.com/mickaelcarwash/30min"
    },
    {
      type: t("pricing.sedan"),
      price: "150 ₪",
      icon: <CarFront className="w-8 h-8" />,
      description: t("pricing.sedan.desc"),
      examples: ["Kia Sportage", "Nissan Juke", "Range Rover", "Cherry Tiggo", "Kia Sorento", "Tesla Model 1 & 2"],
      color: "bg-premium-gold",
      popular: true,
      image: sedanCarImage,
      link: "https://calendly.com/mickaelcarwash/45-minute-meeting-clone"
    },
    {
      type: t("pricing.large"),
      price: "180 ₪",
      icon: <Truck className="w-8 h-8" />,
      description: t("pricing.large.desc"),
      examples: ["Mercedes SUV", "RAM", "BMW X5", "Audi Q7", "Tesla Model 3"],
      color: "bg-premium-dark",
      image: largeCarImage,
      link: "https://calendly.com/mickaelcarwash/60-minute-meeting-clone-clone"
    }
  ];

  return (
    <section id="pricing" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            {t("pricing.title")} <span className="text-premium-green">{t("pricing.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {t("pricing.subtitle")}
          </p>
          {/*<Badge variant="outline" className="text-base px-6 py-2">
            {t("pricing.badge")}
          </Badge> */}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 ${
                tier.popular ? 'border-premium-gold shadow-lg' : 'border-border'
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-premium-gold text-premium-dark">
                  {t("pricing.popular")}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                {/* Vehicle Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={tier.image} 
                    alt={tier.type}
                    className="w-full h-32 object-cover"
                  />
                </div>
                
                <div className={`mx-auto p-4 rounded-full mb-4 ${tier.color} text-premium-light`}>
                  {tier.icon}
                </div>
                
                <CardTitle className="text-xl font-bold text-premium-dark mb-2">
                  {tier.type}
                </CardTitle>
                
                <div className="text-4xl font-bold text-premium-gold mb-2">
                  {tier.price}
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-premium-dark mb-3">Exemples de véhicules :</h4>
                  <ul className="space-y-2">
                    {tier.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-premium-gold rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={tier.link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant={tier.popular ? "gold" : "premium"} 
                    className="w-full"
                  >
                    {t("pricing.reserve")}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Étapes communes */}
        <div className="bg-gradient-to-br from-premium-dark/5 to-premium-green/5 rounded-2xl p-8 mb-12 border border-premium-green/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-premium-dark mb-3">
              {t("pricing.steps")}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-green to-premium-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { key: "step1", number: "01" },
              { key: "step2", number: "02" },
              { key: "step3", number: "03" },
              { key: "step4", number: "04" },
              { key: "step5", number: "05" },
              { key: "step6", number: "06" },
              { key: "step7", number: "07" },
              { key: "step8", number: "08" },
              { key: "step9", number: "09" }
            ].map((step, index) => (
              <div key={step.key} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-premium-green/10 hover:shadow-md hover:border-premium-green/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-br from-premium-green to-premium-gold rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-premium-dark leading-tight block">
                        {t(`pricing.${step.key}`)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-muted/50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-premium-dark mb-4">
            {t("pricing.note.title")}
          </h3>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-premium-green">{t("pricing.note.desc")}</span>
            <br /><br />
            {t("pricing.note.detail")}
          </p>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-premium-dark rounded-xl p-6 text-center">
            <Truck className="w-12 h-12 text-premium-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-premium-light mb-2">
              {t("pricing.mobile.title")}
            </h3>
            <p className="text-premium-light/80">
              {t("pricing.mobile.desc")}
            </p>
          </div>
          
          <div className="bg-premium-green rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-premium-light mx-auto mb-4" />
            <h3 className="text-xl font-bold text-premium-light mb-2">
              {t("pricing.custom.title")}
            </h3>
            <p className="text-premium-light/80">
              {t("pricing.custom.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;