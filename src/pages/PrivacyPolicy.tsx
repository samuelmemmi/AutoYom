import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">1. Collecte des données</h2>
            <p className="text-gray-700 leading-relaxed">
            AutoYom collecte uniquement les données nécessaires à la fourniture de nos services : nom, prénom, numéro de téléphone, adresse d'intervention et informations sur le véhicule.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">2. Utilisation des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>La planification et réalisation des interventions</li>
              <li>La communication relative à nos services</li>
              <li>L'amélioration de la qualité de service</li>
              <li>La facturation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">3. Conservation des données</h2>
            <p className="text-gray-700 leading-relaxed">
              Vos données sont conservées pendant la durée nécessaire à la fourniture de nos services et conformément aux obligations légales, soit 3 ans maximum après votre dernière commande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">4. Partage des données</h2>
            <p className="text-gray-700 leading-relaxed">
            AutoYom ne vend, ne loue, ni ne partage vos données personnelles avec des tiers, sauf obligation légale ou pour la fourniture du service demandé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">5. Vos droits</h2>
            <p className="text-gray-700 leading-relaxed">
              Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous au +972 547256057.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">6. Sécurité</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">7. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter au +972 547256057 ou via WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;