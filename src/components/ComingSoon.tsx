import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Video, Presentation, QrCode } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComingSoon = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: t("coming.loyalty.title"),
      description: t("coming.loyalty.desc"),
      color: "bg-premium-gold"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: t("coming.videos.title"),
      description: t("coming.videos.desc"),
      color: "bg-premium-green"
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: t("coming.presentation.title"),
      description: t("coming.presentation.desc"),
      color: "bg-premium-dark"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: t("coming.qr.title"),
      description: t("coming.qr.desc"),
      color: "bg-premium-gold"
    }
  ];

  return (
    <section id="coming-soon" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base px-6 py-2">
            {t("coming.title")} {t("coming.highlight")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            {t("coming.title")} <span className="text-premium-green">{t("coming.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("coming.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-premium-gold/30"
            >
              <CardHeader className="pb-4">
                <div className={`mx-auto p-4 rounded-full mb-4 ${feature.color} text-premium-light`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-bold text-premium-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-premium-dark to-premium-green rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-premium-light mb-4">
            🚀 Innovation continue
          </h3>
          <p className="text-premium-light/80 max-w-2xl mx-auto">
            Nous travaillons constamment pour améliorer votre expérience et vous offrir 
            les meilleurs outils pour prendre soin de votre véhicule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;