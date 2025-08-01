import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
  {
    name: "David Benhamou",
    date: "2025-04-09",
    rating: 5,
    text: "Service impeccable ! Ma voiture n’a jamais été aussi propre. Le technicien est venu à l’heure, super équipé, et très professionnel. Je recommande à 100%.",
    platform: "Google",
    verified: true,
  },
  {
    name: "Sarah Cohen",
    date: "2025-05-15",
    rating: 5,
    text: "Un nettoyage intérieur/extérieur au top, directement devant chez moi. L’équipe est ponctuelle, efficace, et le résultat est impressionnant.",
    platform: "Google",
    verified: true,
  },
  {
    name: "Jonathan Abitbol",
    date: "2024-11-26",
    rating: 5,
    text: "Très satisfait de leur service à domicile. Plus besoin de me déplacer pour avoir une voiture nickel, même les jantes brillent comme neuves !",
    platform: "Google",
    verified: true,
  },
  {
    name: "Rachel Attal",
    date: "2024-10-06",
    rating: 5,
    text: "Ponctuels, souriants et méticuleux. Ils ont réussi à enlever des taches que je pensais impossibles. Je referai appel à eux sans hésiter.",
    platform: "Google",
    verified: true,
  }
];


  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndexes.includes(index);
            const isLong = testimonial.text.length > 100;
            const displayText = isExpanded || !isLong
              ? testimonial.text
              : testimonial.text.slice(0, 100) + "…";

            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  {/* Header with platform and verified badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FcGoogle className="w-5 h-5" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {testimonial.platform}
                      </span>
                    </div>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" aria-label="Avis vérifié" role="img" />
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
                      <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {displayText}
                  </p>

                  {isLong && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-xs text-premium-green hover:text-premium-gold mt-2 font-medium"
                    >
                      {isExpanded ? "Voir moins" : "Lire la suite"}
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
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
