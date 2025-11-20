import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-premium-light">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-premium-dark mb-8">
          Conditions Générales d'Utilisation
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">1. Objet</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation des services de lavage automobile à domicile proposés par Lavage Pro Premium.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">2. Services proposés</h2>
            <p className="text-gray-700 leading-relaxed">
              AutoYom propose des services de nettoyage automobile à domicile comprenant :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Lavage extérieur complet</li>
              <li>Nettoyage intérieur</li>
              <li>Polissage de carrosserie</li>
              <li>Nettoyage des jantes</li>
              <li>Traitement vapeur</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">3. Réservation et prix</h2>
            <p className="text-gray-700 leading-relaxed">
              Les réservations peuvent être effectuées par téléphone au +972 538478659 ou via WhatsApp. Les tarifs sont indiqués sur notre site web et peuvent être modifiés sans préavis. Le paiement s'effectue à la prestation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">4. Responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
            AutoYom s'engage à fournir un service de qualité avec des produits professionnels. En cas de dommage lié à notre intervention, notre responsabilité est limitée au montant de la prestation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">5. Annulation</h2>
            <p className="text-gray-700 leading-relaxed">
              Toute annulation doit être signalée au moins 2 heures avant l'heure prévue de l'intervention. En cas d'annulation tardive, des frais peuvent être appliqués.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">6. Droit applicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Les présentes CGU sont soumises au droit israélien. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de l'entreprise.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;