import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Truck, Users } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      type: "Citadine / Compacte",
      price: "130 ₪",
      icon: <Car className="w-8 h-8" />,
      description: "Véhicules jusqu'à 4,2m",
      examples: ["Peugeot 208", "Renault Clio", "Citroën C3", "Volkswagen Polo"],
      color: "bg-premium-green"
    },
    {
      type: "Berline / SUV standard",
      price: "150 ₪",
      icon: <Car className="w-8 h-8" />,
      description: "Véhicules standards",
      examples: ["Peugeot 308", "Renault Mégane", "BMW Série 3", "Audi A4"],
      color: "bg-premium-gold",
      popular: true
    },
    {
      type: "Grand véhicule / 7 places",
      price: "180 ₪",
      icon: <Users className="w-8 h-8" />,
      description: "Monospace et grands SUV",
      examples: ["Peugeot 5008", "Renault Espace", "BMW X5", "Audi Q7"],
      color: "bg-premium-dark"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            Nos <span className="text-premium-green">Tarifs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Tarification transparente selon le type de véhicule
          </p>
          <Badge variant="outline" className="text-base px-6 py-2">
            Prix pour toutes nos formules selon le véhicule
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
                  Le plus demandé
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
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
                        <div className="w-2 h-2 bg-premium-green rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={tier.popular ? "gold" : "premium"} 
                  className="w-full"
                >
                  Réserver ce tarif
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="bg-muted/50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-premium-dark mb-4">
            💎 Pourquoi ces tarifs ?
          </h3>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-premium-green">Ces prix reflètent le temps, la taille du véhicule, les produits utilisés et le niveau de soin apporté à chaque prestation.</span>
            <br /><br />
            Nous avons fait le choix de valoriser chaque intervention, même sur des véhicules plus petits. 
            Notre service premium justifie cette approche par la qualité des produits utilisés, 
            le professionnalisme de nos équipes et la commodité du service à domicile.
          </p>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-premium-dark rounded-xl p-6 text-center">
            <Truck className="w-12 h-12 text-premium-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-premium-light mb-2">
              Service à domicile inclus
            </h3>
            <p className="text-premium-light/80">
              Pas de frais de déplacement dans notre zone d'intervention
            </p>
          </div>
          
          <div className="bg-premium-green rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-premium-light mx-auto mb-4" />
            <h3 className="text-xl font-bold text-premium-light mb-2">
              Devis personnalisé
            </h3>
            <p className="text-premium-light/80">
              Pour les prestations spéciales ou véhicules particuliers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;