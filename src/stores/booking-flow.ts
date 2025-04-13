import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface BookingFlowState {
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  previousStep: () => void;
  resetFlow: () => void;
  setCurrentStep: (step: number) => void;
}

export const useBookingFlow = create<BookingFlowState>()(
  devtools(
    persist(
      (set) => ({
        currentStep: 1,
        totalSteps: 6,
        nextStep: () =>
          set((state) => ({
            currentStep: Math.min(state.currentStep + 1, state.totalSteps),
          })),
        previousStep: () =>
          set((state) => ({
            currentStep: Math.max(state.currentStep - 1, 1),
          })),
        resetFlow: () => set({ currentStep: 1 }),
        setCurrentStep: (step) => set({ currentStep: step }),
      }),
      {
        name: 'booking-flow-storage',
      }
    ),
    { name: 'booking-flow-store' }
  )
);
