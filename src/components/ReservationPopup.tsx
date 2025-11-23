import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ReservationPopupProps = {
  children: ReactNode;
};

const CAL_URLS: Record<number, string> = {
  1: "https://cal.com/ton-lien-1-voiture",
  2: "https://cal.com/ton-lien-2-voitures",
  3: "https://cal.com/ton-lien-3-voitures",
  4: "https://cal.com/ton-lien-4-voitures",
  5: "https://cal.com/ton-lien-5-voitures",
  6: "https://cal.com/ton-lien-6-voitures",
};

export const ReservationPopup = ({ children }: ReservationPopupProps) => {
  const handleSelect = (count: number) => {
    const url = CAL_URLS[count];
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Combien de véhicules souhaitez-vous laver ?</DialogTitle>
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
