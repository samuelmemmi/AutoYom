import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageSquare, MapPin, Clock, QrCode } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium-dark mb-4">
            <span className="text-premium-green">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Réservez votre créneau en quelques clics ou contactez-nous directement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-premium-dark">
                📅 Formulaire de réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input id="name" placeholder="Votre nom" className="border-premium-green/20" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input id="phone" placeholder="Votre numéro" className="border-premium-green/20" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse d'intervention *</Label>
                <Input id="address" placeholder="Où souhaitez-vous le service ?" className="border-premium-green/20" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Type de véhicule *</Label>
                  <Select>
                    <SelectTrigger className="border-premium-green/20">
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="citadine">Citadine / Compacte (130 ₪)</SelectItem>
                      <SelectItem value="berline">Berline / SUV (150 ₪)</SelectItem>
                      <SelectItem value="grand">Grand véhicule / 7 places (180 ₪)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Formule souhaitée</Label>
                  <Select>
                    <SelectTrigger className="border-premium-green/20">
                      <SelectValue placeholder="Choisissez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Lavage Simple</SelectItem>
                      <SelectItem value="approfondi">Lavage Approfondi</SelectItem>
                      <SelectItem value="premium">Lavage Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Précisions, demandes particulières..."
                  className="border-premium-green/20"
                  rows={3}
                />
              </div>

              <Button variant="premium" className="w-full" size="lg">
                Envoyer ma demande de réservation
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Champs obligatoires. Nous vous recontacterons rapidement pour confirmer votre créneau.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg bg-premium-dark text-premium-light">
              <CardHeader>
                <CardTitle className="text-2xl text-premium-gold">
                  📞 Contact rapide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-premium-light/10 rounded-lg">
                  <Phone className="w-6 h-6 text-premium-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-premium-light/80">+972 538478659</p>
                  </div>
                </div>
                <a href="https://wa.me/972538478659" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="gold" 
                    className="w-full" 
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contacter via WhatsApp
                  </Button>
                </a>

                {/*<div className="text-center">
                  <div className="bg-premium-light/10 rounded-lg p-4">
                    <QrCode className="w-8 h-8 text-premium-gold mx-auto mb-2" />
                    <p className="text-sm text-premium-gold font-medium">
                      QR code personnalisé
                    </p>
                    <p className="text-xs text-premium-light/60">
                      Bientôt disponible pour réservation instantanée
                    </p>
                  </div>
                </div>*/}
              </CardContent>
            </Card>

            {/* Service Info */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-premium-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-premium-dark">Zone d'intervention</p>
                    <p className="text-sm text-muted-foreground">Service à domicile dans toute la région</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-premium-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-premium-dark">Horaires flexibles</p>
                    <p className="text-sm text-muted-foreground">Du lundi au vendredi, créneaux adaptables</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-premium-green to-premium-dark text-premium-light">
              <CardHeader>
                <CardTitle className="text-xl text-premium-gold">
                  🚀 À venir prochainement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold rounded-full"></div>
                  <span className="text-sm">Carte de fidélité virtuelle</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold rounded-full"></div>
                  <span className="text-sm">Vidéos avant/après accélérées</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold rounded-full"></div>
                  <span className="text-sm">Présentation visuelle des formules</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;