import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Truck, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import compactCarImage from "@/assets/lavage-auto.jpg";
import sedanCarImage from "@/assets/pressure-washing.jpg";
import largeCarImage from "@/assets/steam-cleaning.jpg";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      type: t("pricing.compact"),
      price: "130 ₪",
      icon: <Car className="w-8 h-8" />,
      description: t("pricing.compact.desc"),
      examples: ["Peugeot 208", "Renault Clio", "Citroën C3", "Volkswagen Polo"],
      color: "bg-premium-green",
      image: compactCarImage
    },
    {
      type: t("pricing.sedan"),
      price: "150 ₪",
      icon: <Car className="w-8 h-8" />,
      description: t("pricing.sedan.desc"),
      examples: ["Peugeot 308", "Renault Mégane", "BMW Série 3", "Audi A4"],
      color: "bg-premium-gold",
      popular: true,
      image: sedanCarImage
    },
    {
      type: t("pricing.large"),
      price: "180 ₪",
      icon: <Users className="w-8 h-8" />,
      description: t("pricing.large.desc"),
      examples: ["Peugeot 5008", "Renault Espace", "BMW X5", "Audi Q7"],
      color: "bg-premium-dark",
      image: largeCarImage
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            {t("pricing.title")} <span className="text-premium-green">{t("pricing.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {t("pricing.subtitle")}
          </p>
          <Badge variant="outline" className="text-base px-6 py-2">
            {t("pricing.badge")}
          </Badge>
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
                
                <Button 
                  variant={tier.popular ? "gold" : "premium"} 
                  className="w-full"
                >
                  {t("pricing.reserve")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Étapes communes */}
        <div className="bg-muted/30 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-premium-dark text-center mb-6">
            {t("pricing.steps")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step1")}</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step2")}</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step3")}</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step4")}</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step5")}</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step6")}</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4">
              <div className="w-3 h-3 bg-premium-green rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{t("pricing.step7")}</span>
            </div>
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