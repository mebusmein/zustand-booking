import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface PaymentState {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  setCardNumber: (number: string) => void;
  setExpiryDate: (date: string) => void;
  setCvv: (cvv: string) => void;
  resetPayment: () => void;
}

export const usePaymentStore = create<PaymentState>()(
  devtools(
    persist(
      (set) => ({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        setCardNumber: (number) => set({ cardNumber: number }),
        setExpiryDate: (date) => set({ expiryDate: date }),
        setCvv: (cvv) => set({ cvv: cvv }),
        resetPayment: () =>
          set({
            cardNumber: '',
            expiryDate: '',
            cvv: '',
          }),
      }),
      {
        name: 'payment-storage',
      }
    ),
    { name: 'payment-store' }
  )
);
