import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface ExtrasState {
  breakfast: boolean;
  parking: boolean;
  spa: boolean;
  toggleBreakfast: () => void;
  toggleParking: () => void;
  toggleSpa: () => void;
  resetExtras: () => void;
}

export const useExtrasStore = create<ExtrasState>()(
  devtools(
    persist(
      (set) => ({
        breakfast: false,
        parking: false,
        spa: false,
        toggleBreakfast: () => set((state) => ({ breakfast: !state.breakfast })),
        toggleParking: () => set((state) => ({ parking: !state.parking })),
        toggleSpa: () => set((state) => ({ spa: !state.spa })),
        resetExtras: () => set({ breakfast: false, parking: false, spa: false }),
      }),
      {
        name: 'extras-storage',
      }
    ),
    { name: 'extras-store' }
  )
);
