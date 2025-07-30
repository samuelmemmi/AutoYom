import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Droplets, Zap, Award, Wrench, HandHeart, Gauge, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: t("guarantees.mobileTitle"),
      description: t("guarantees.mobileDesc"),
      details: [
        t("guarantees.mobileDetail1"),
        t("guarantees.mobileDetail2"),
        t("guarantees.mobileDetail3"),
        t("guarantees.mobileDetail4")
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t("guarantees.productsTitle"),
      description: t("guarantees.productsDesc"),
      details: [
        t("guarantees.productsDetail1"),
        t("guarantees.productsDetail2"),
        t("guarantees.productsDetail3"),
        t("guarantees.productsDetail4")
      ]
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: t("guarantees.manualTitle"),
      description: t("guarantees.manualDesc"),
      details: [
        t("guarantees.manualDetail1"),
        t("guarantees.manualDetail2"),
        t("guarantees.manualDetail3"),
        t("guarantees.manualDetail4")
      ]
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: t("guarantees.customTitle"),
      description: t("guarantees.customDesc"),
      details: [
        t("guarantees.customDetail1"),
        t("guarantees.customDetail2"),
        t("guarantees.customDetail3"),
        t("guarantees.customDetail4")
      ]
    }
  ];

  const brands = [
    t("guarantees.brand1"),
    t("guarantees.brand2"),
    t("guarantees.brand3"),
    t("guarantees.brand4")
  ];

  return (
    <section id="guarantees" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            {t("guarantees.title")} <span className="text-premium-green">{t("guarantees.highlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("guarantees.subtitle")}
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
      </div>
    </section>
  );
};

export default WhyChooseUs;