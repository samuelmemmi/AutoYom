import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Booking = () => {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-20 bg-premium-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-light mb-4">
            {t("booking.title")} <span className="text-premium-gold">{t("booking.highlight")}</span>
          </h2>
          <p className="text-xl text-premium-light/80 max-w-3xl mx-auto mb-8">
            {t("booking.subtitle")}
          </p>
        </div>

        {/* Booking Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-premium-gold rounded-lg">
                <Calendar className="w-6 h-6 text-premium-dark" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-premium-light mb-2">
                  Planification flexible
                </h3>
                <p className="text-premium-light/80">
                  Choisissez le créneau qui vous convient, 7j/7
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-premium-gold rounded-lg">
                <MapPin className="w-6 h-6 text-premium-dark" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-premium-light mb-2">
                  À votre domicile
                </h3>
                <p className="text-premium-light/80">
                  Nous venons directement chez vous ou à votre bureau
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-premium-gold rounded-lg">
                <Clock className="w-6 h-6 text-premium-dark" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-premium-light mb-2">
                  Confirmation immédiate
                </h3>
                <p className="text-premium-light/80">
                  Réservation confirmée instantanément
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <Card className="bg-premium-light border-premium-gold/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-premium-dark mb-4">
                Réservation en ligne
              </CardTitle>
              <p className="text-muted-foreground">
                {t("booking.description")}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button 
                size="lg" 
                variant="gold" 
                className="w-full text-lg py-6"
                onClick={() => {
                  // Placeholder for Calendly integration
                  console.log("Opening Calendly booking");
                }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t("booking.cta")}
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ou contactez-nous directement
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    {t("header.call")}
                  </Button>
                  <Button variant="premium" size="sm">
                    <span className="mr-2">💬</span>
                    {t("header.whatsapp")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;