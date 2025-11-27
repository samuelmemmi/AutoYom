import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

type ReservationPopupProps = {
  children: ReactNode;
};

const CAL_URLS: Record<number, string> = {
  1: "https://cal.com/autoyom-875ioj/1-car",
  2: "https://cal.com/autoyom-875ioj/2-cars",
  3: "https://cal.com/autoyom-875ioj/3-cars",
  4: "https://cal.com/autoyom-875ioj/4-cars",
  5: "https://cal.com/autoyom-875ioj/5-cars",
  6: "https://cal.com/autoyom-875ioj/6-cars",
};

export const ReservationPopup = ({ children }: ReservationPopupProps) => {
  const handleSelect = (count: number) => {
    const url = CAL_URLS[count];
    if (!url) return;
    window.open(url, "_blank");
  };
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle> {t('reservationPopup.title')}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3 mt-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleSelect(num)}
              className="bg-brand-blue/10 hover:bg-brand-blue/20 text-premium-dark py-3 rounded-lg font-medium"
            >
              {num}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
