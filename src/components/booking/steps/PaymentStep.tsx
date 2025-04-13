import { Input } from '@/components/ui/input';
import { usePaymentStore } from '@/stores/payment-store';
import { validatePayment } from '@/utils/validation';

export function PaymentStep() {
  const { cardNumber, expiryDate, cvv, setCardNumber, setExpiryDate, setCvv } = usePaymentStore();

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Card Number
        </label>
        <Input
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Expiry Date
        </label>
        <Input
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          CVV
        </label>
        <Input placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </div>
    </div>
  );
}

// Export the validation hook for use in MultiStepBookingForm
export const usePaymentStepValidation = () => {
  const { cardNumber, expiryDate, cvv } = usePaymentStore();
  return validatePayment(cardNumber, expiryDate, cvv);
};
