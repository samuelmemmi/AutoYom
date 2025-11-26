import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
  {
    name: "Carole Manaud",
    date: "2025-10-06",
    rating: 5,
    text: "Ma voiture est propre, comme au premier jour, je suis ravie. Je recommande à 100 %",
    platform: "Facebook",
    verified: true,
    link : "https://www.facebook.com/story.php?story_fbid=10238605559778561&id=1259046096&rdid=j14nHT7VrxjcUet1#",
  },
  {
    name: "Aaron Hamon",
    date: "2025-09-28",
    rating: 5,
    text: "Bravo. Lavage impeccable je recommande",
    platform: "Facebook",
    verified: true,
    link : "https://www.facebook.com/story.php?story_fbid=10162590289428171&id=694913170&rdid=NtdG6cQwnIcFz198#",
  },
  {
    name: "Ornella Krief",
    date: "2025-08-31",
    rating: 5,
    text: "Travail Pro et efficace ! merci",
    platform: "Facebook",
    verified: true,
    link : "https://www.facebook.com/story.php?story_fbid=1323341395876808&id=100046028802086&rdid=o6jp92e6kLlG5TS6#",
  },
  {
    name: "Raphael Cohen",
    date: "2025-08-31",
    rating: 5,
    text: "Rapide efficace et pas cher",
    platform: "Facebook",
    verified: true,
    link : "https://www.facebook.com/story.php?story_fbid=25116588914609995&id=100000566986323&rdid=JPo9TX1b0XlSM2Lx#",
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
                
                {/* Header plateforme + badge vérifié */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaFacebook className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {testimonial.platform}
                    </span>
                  </div>
                  {testimonial.verified && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
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

                {/* 🔗 Lien Facebook */}
                {testimonial.link && (
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-blue-600 hover:underline mt-4"
                  >
                    <FaFacebook className="w-4 h-4" />
                    <span>Voir l’avis sur Facebook</span>
                  </a>
                )}

              </CardContent>
            </Card>

            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("testimonials.joinUs")}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-premium-dark">5.0</span>
            <span className="text-muted-foreground">• {t("testimonials.moreThan100Reviews")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
