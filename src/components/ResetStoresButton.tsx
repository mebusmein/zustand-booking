import { Button } from './ui/button';
import { useBookingStore } from '@/stores/booking-store';
import { useDatesStore } from '@/stores/dates-store';
import { useBookingFlow } from '@/stores/booking-flow';
import { usePropertyStore } from '@/stores/property-store';
import { usePaymentStore } from '@/stores/payment-store';
import { resetAllRoomContexts } from '@/contexts/room-context';
import { resetAllExtrasContexts } from '@/contexts/extras-context';
export const ResetStoresButton = () => {
  const resetBooking = useBookingStore((state) => state.resetBooking);
  const resetDates = useDatesStore((state) => state.resetDates);
  const resetFlow = useBookingFlow((state) => state.resetFlow);
  const resetProperty = usePropertyStore((state) => state.resetProperty);
  const resetPayment = usePaymentStore((state) => state.resetPayment);

  const handleReset = () => {
    resetBooking();
    resetDates();
    resetFlow();
    resetProperty();
    resetPayment();
    resetAllRoomContexts();
    resetAllExtrasContexts();
  };

  return (
    <Button variant="destructive" size="sm" onClick={handleReset} className="">
      Reset All Stores
    </Button>
  );
};
