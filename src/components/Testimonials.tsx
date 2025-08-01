import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Damien OLMOS",
      date: "2024-05-09",
      rating: 5,
      text: "Merci à Yoobi pour la refonte de notre site internet Ticket Immobilier, et un grand merci à Louis pour son accompagnement plus que rigoureux...",
      platform: "Google",
      verified: true
    },
    {
      name: "Aristocar",
      date: "2024-05-09",
      rating: 5,
      text: "Super travail, très satisfait du rendu. Équipe très professionnelle et sérieuse. Je recommande !!",
      platform: "Google",
      verified: true
    },
    {
      name: "Reza Fazlollahi",
      date: "2024-04-26",
      rating: 5,
      text: "Très satisfait du travail et du professionnalisme de l'équipe Yoobi pour mon site internet ! Ils ont été à l'écoute et ont travaillé...",
      platform: "Google",
      verified: true
    },
    {
      name: "pierre-louis Cros",
      date: "2023-10-06",
      rating: 5,
      text: "Un très grand merci à vous trois, Louis Pusset, Lucas Pusset, Yoan Mangel.",
      platform: "Google",
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            {t("testimonials.title")} <span className="text-premium-green">{t("testimonials.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                {/* Header with platform and verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{testimonial.platform}</span>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Vérifié</span>
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-premium-green rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-premium-dark">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Read More Link */}
                <button className="text-xs text-premium-green hover:text-premium-gold mt-2 font-medium">
                  Lire la suite
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vous aussi, rejoignez nos clients satisfaits
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-premium-dark">5.0</span>
            <span className="text-muted-foreground">• Plus de 100 avis clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;