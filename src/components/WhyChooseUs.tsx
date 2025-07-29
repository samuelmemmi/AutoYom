import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Droplets, 
  Zap, 
  Award, 
  Wrench, 
  HandHeart,
  Gauge,
  Leaf
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "100% Mobile et Autonome",
      description: "Nous intervenons partout : domicile, bureau, parking souterrain",
      details: [
        "Réserve d'eau propre embarquée",
        "Générateur électrique autonome",
        "Rallonges jusqu'à 30 mètres",
        "Adaptateurs pour bornes électriques"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Produits Professionnels",
      description: "Nous utilisons exclusivement des marques reconnues",
      details: [
        "Green Star (écologique)",
        "Meguiar's (premium)",
        "Alchimy7 (professionnel)",
        "Addict Auto (spécialisé)"
      ]
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Lavage Manuel et Respectueux",
      description: "Chaque véhicule traité avec le plus grand soin",
      details: [
        "Pinceaux et brosses adaptés",
        "Techniques de lavage sans rayures",
        "Attention aux détails",
        "Respect de la carrosserie"
      ]
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Service Sur-Mesure",
      description: "Nous adaptons notre intervention à vos besoins",
      details: [
        "Lavage à l'eau ou vapeur",
        "Horaires flexibles",
        "Devis personnalisés",
        "Conseils d'entretien"
      ]
    }
  ];

  const brands = [
    "Green Star",
    "Meguiar's", 
    "Alchimy7",
    "Addict Auto"
  ];

  return (
    <section id="guarantees" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            Nos garanties <span className="text-premium-green">qualité</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            L'excellence à votre service avec une approche 100% mobile et professionnelle
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-premium-green text-premium-light p-3 rounded-xl group-hover:bg-premium-gold group-hover:text-premium-dark transition-colors duration-300">
                    {feature.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-premium-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-premium-gold rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Autonomy Section */}
        {/*
        <div className="bg-premium-dark rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-premium-light mb-6">
                <Zap className="w-8 h-8 inline-block text-premium-gold mr-3" />
                Intervention 100% <span className="text-premium-gold">Autonome</span>
              </h3>
              
              <div className="space-y-4 text-premium-light/90">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-premium-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Autonomie totale en eau</p>
                    <p className="text-sm">Nous apportons notre propre réserve d'eau propre</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-premium-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Électricité flexible</p>
                    <p className="text-sm">Générateur ou raccordement (rallonges jusqu'à 30m)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-premium-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Parkings souterrains</p>
                    <p className="text-sm">Adaptateurs pour bornes de recharge électrique</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-premium-light/10 rounded-lg p-6 inline-block">
                <Gauge className="w-16 h-16 text-premium-gold mx-auto mb-4" />
                <p className="text-premium-gold font-bold text-lg">
                  Adaptabilité totale
                </p>
                <p className="text-premium-light/80 text-sm">
                  Nous nous adaptons à tous les environnements
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Brands Section */}
        {/*
        <div className="text-center">
          <h3 className="text-2xl font-bold text-premium-dark mb-6">
            Marques <span className="text-premium-green">professionnelles</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-6 py-2 text-base font-medium border-premium-green text-premium-green hover:bg-premium-green hover:text-premium-light transition-colors duration-300"
              >
                <Award className="w-4 h-4 mr-2" />
                {brand}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nous travaillons uniquement avec des marques reconnues pour leur efficacité, 
            leur respect des surfaces et leur qualité professionnelle.
          </p>
        </div>
        */}
      </div>
    </section>
  );
};

export default WhyChooseUs;