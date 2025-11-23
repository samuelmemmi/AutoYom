import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";
import { ReservationPopup } from "@/components/ReservationPopup";

const FloatingButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/972547256057" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
        >
          <FaWhatsapp style={{ width: '28px', height: '28px' }} className="text-white" />
        </Button>
      </a>


      {/* Phone Button */}
      <a href="tel:+972547256057" className="group">
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
        >
          <Phone style={{ width: '28px', height: '28px' }} className="text-white" />
        </Button>
      </a>

      {/* Reservation Button */}
      <ReservationPopup>
        <Button
          size="lg"
          className="bg-premium-gold hover:bg-premium-gold/90 text-premium-dark rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
        >
          <Calendar style={{ width: '28px', height: '28px' }} className="text-white" />
        </Button>
      </ReservationPopup>


    </div>
  );
};

export default FloatingButtons;