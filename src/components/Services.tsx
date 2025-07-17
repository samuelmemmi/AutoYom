import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Droplets, Shield, Zap, Brush, Waves } from "lucide-react";

const Services = () => {
  const formulas = [
    {
      id: 1,
      title: "Lavage Simple",
      subtitle: "Intérieur / Extérieur",
      price: "À partir de 130 ₪",
      icon: <Droplets className="w-8 h-8" />,
      description: "Idéal pour un entretien régulier",
      features: [
        "Aspiration complète de l'habitacle",
        "Nettoyage des passages de porte",
        "Dépoussiérage léger des sièges",
        "Lavage extérieur à la main",
        "Séchage manuel"
      ],
      badge: "Régulier",
      popular: false
    },
    {
      id: 2,
      title: "Lavage Approfondi",
      subtitle: "Confort et propreté",
      price: "À partir de 150 ₪",
      icon: <Shield className="w-8 h-8" />,
      description: "Pour un intérieur visiblement plus propre",
      features: [
        "Tous les éléments de la formule 1",
        "Nettoyage intérieur des portes",
        "Nettoyage de toutes les vitres intérieures",
        "Attention particulière aux détails",
        "Finition soignée"
      ],
      badge: "Populaire",
      popular: true
    },
    {
      id: 3,
      title: "Lavage Premium",
      subtitle: "& Détail",
      price: "À partir de 180 ₪",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Véhicule remis à neuf",
      features: [
        "Nettoyage approfondi des jantes",
        "Traitement des pneus (gel noir)",
        "Pressing vapeur des tapis",
        "Lavage sièges injection/extraction",
        "Nettoyage plastiques intérieurs",
        "Nettoyage vapeur intégral",
        "Application de cire protectrice"
      ],
      badge: "Premium",
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: "Polissage carrosserie",
      description: "Correction micro-rayures et oxydation",
      icon: <Brush className="w-6 h-6" />
    },
    {
      title: "Lustrage premium",
      description: "Application de cire - brillance et protection",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Nettoyage moteur",
      description: "Compartiment moteur impeccable",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Nettoyage vapeur",
      description: "Désinfection et aseptisation complète",
      icon: <Waves className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            Nos <span className="text-premium-green">Prestations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Service mobile premium, entièrement manuel avec le souci du détail à chaque étape
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
                  Le plus populaire
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
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
                
                <div className="text-3xl font-bold text-premium-gold mt-4">
                  {formula.price}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
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
                
                <Button 
                  variant={formula.popular ? "gold" : "premium"} 
                  className="w-full"
                >
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-premium-dark rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-premium-light text-center mb-8">
            Prestations <span className="text-premium-gold">à la carte</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Button variant="gold" size="lg">
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;