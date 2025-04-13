import { Button } from './ui/button';
import { useBookingStore } from '@/stores/booking-store';
import { useDatesStore } from '@/stores/dates-store';
import { useExtrasStore } from '@/stores/extras-store';
import { useHotelStore } from '@/stores/hotel-store';
import { useBookingFlow } from '@/stores/booking-flow';
import { usePropertyStore } from '@/stores/property-store';
import { useSearchStore } from '@/stores/search-store';
import { usePaymentStore } from '@/stores/payment-store';
import { useRoomStore } from '@/stores/room-store';

export const ResetStoresButton = () => {
  const resetBooking = useBookingStore((state) => state.resetBooking);
  const resetDates = useDatesStore((state) => state.resetDates);
  const resetExtras = useExtrasStore((state) => state.resetExtras);
  const resetHotel = useHotelStore((state) => state.resetHotel);
  const resetFlow = useBookingFlow((state) => state.resetFlow);
  const resetProperty = usePropertyStore((state) => state.resetProperty);
  const resetSearch = useSearchStore((state) => state.resetSearch);
  const resetPayment = usePaymentStore((state) => state.resetPayment);
  const resetRoom = useRoomStore((state) => state.resetRoom);

  const handleReset = () => {
    resetBooking();
    resetDates();
    resetExtras();
    resetHotel();
    resetFlow();
    resetProperty();
    resetSearch();
    resetPayment();
    resetRoom();
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleReset}
      className="fixed top-4 right-4 z-50"
    >
      Reset All Stores
    </Button>
  );
};
