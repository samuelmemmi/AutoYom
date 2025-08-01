import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalNotice = () => {
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
          Mentions Légales
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Éditeur du site</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Nom de l'entreprise :</strong> Lavage Pro Premium</p>
              <p><strong>Activité :</strong> Service de lavage automobile à domicile</p>
              <p><strong>Téléphone :</strong> +972 538478659</p>
              <p><strong>Zone d'intervention :</strong> Service à domicile</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Directeur de publication</h2>
            <p className="text-gray-700 leading-relaxed">
              Le directeur de la publication est le représentant légal de Lavage Pro Premium.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Hébergement</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p><strong>Hébergeur :</strong> Lovable</p>
              <p><strong>Site web :</strong> https://lovable.dev</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble de ce site relève de la législation sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Limitation de responsabilité</h2>
            <p className="text-gray-700 leading-relaxed">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Droit applicable et attribution de juridiction</h2>
            <p className="text-gray-700 leading-relaxed">
              Tout litige en relation avec l'utilisation du site est soumis au droit israélien. Il est fait attribution exclusive de juridiction aux tribunaux compétents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-premium-dark mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Pour toute question ou réclamation, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Par téléphone : +972 538478659</li>
              <li>Via WhatsApp : +972 538478659</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;