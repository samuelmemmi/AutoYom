import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Truck, Users, CarFront } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import compactCarImage from "@/assets/lavage-auto.jpg";
import sedanCarImage from "@/assets/lavage-auto-866x505.jpg";
import largeCarImage from "@/assets/steam-cleaning.jpg";
import { useState } from "react";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import video4 from "@/assets/video4.mp4";

const Pricing = () => {
  const { t } = useLanguage();

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

        {/* Carousel de vidéos */}
        {/* 🔥 VIDEOS COTE À COTE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <video
            src={video4}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full rounded-xl"
          />

          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full rounded-xl"
          />

          <video
            src={video3}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full rounded-xl"
          />
        </div>

        
        {/* Étapes communes */}
        <div className="bg-gradient-to-br from-premium-dark/5 to-premium-green/5 rounded-2xl p-8 mb-12 border border-premium-green/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-premium-dark mb-3">
              {t("pricing.steps")}
            </h3>
            <div className="w-20 h-1 bg-premium-green mx-auto rounded-full"></div>
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
                      <div className="w-8 h-8 bg-premium-green rounded-full flex items-center justify-center shadow-sm">
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

        {/* Tableau de tarifs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-premium-green/10 mb-12 shadow-sm">
          <h3 className="text-2xl font-bold text-premium-dark text-center mb-6">
            {t("pricing.title.details")} 
          </h3>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-premium-green/10">
                  <th className="p-4 font-semibold text-premium-dark">{t("pricing.table.vehicleType")}</th>
                  <th className="p-4 font-semibold text-premium-dark text-right">{t("pricing.table.price")}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-premium-green/10">
                  <td className="p-4">{t("pricing.table.vehicle.standardDirty")}</td>
                  <td className="p-4 text-right font-bold text-premium-green">200 ₪</td>
                </tr>

                <tr className="border-t border-premium-green/10 bg-premium-green/5">
                  <td className="p-4">{t("pricing.table.vehicle.standardVeryDirty")}</td>
                  <td className="p-4 text-right font-bold text-premium-green">250 ₪</td>
                </tr>

                <tr className="border-t border-premium-green/10">
                  <td className="p-4">{t("pricing.table.vehicle.jeepDirty")}</td>
                  <td className="p-4 text-right font-bold text-premium-green">250 ₪</td>
                </tr>

                <tr className="border-t border-premium-green/10 bg-premium-green/5">
                  <td className="p-4">{t("pricing.table.vehicle.jeepVeryDirty")}</td>
                  <td className="p-4 text-right font-bold text-premium-green">300 ₪</td>
                </tr>
              </tbody>
            </table>
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
          <div className="bg-brand-blue rounded-xl p-6 text-center">
            <Truck className="w-12 h-12 text-premium-light mx-auto mb-4" />
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