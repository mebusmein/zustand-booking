import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export interface ExtrasState {
  breakfast: boolean;
  parking: boolean;
  spa: boolean;
  toggleBreakfast: () => void;
  toggleParking: () => void;
  toggleSpa: () => void;
  resetExtras: () => void;
  reset: () => void;
}

export const createExtrasStoreKey = (propertyId: string, roomId: string) =>
  `extras-storage-${propertyId}-${roomId}`;

export type ExtrasStore = ReturnType<typeof createExtrasStore>;

export const createExtrasStore = (propertyId: string, roomId: string) => {
  const storeKey = createExtrasStoreKey(propertyId, roomId);

  return createStore<ExtrasState>()(
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
          reset: () => set({ breakfast: false, parking: false, spa: false }),
        }),
        {
          name: storeKey,
        }
      ),
      { name: storeKey }
    )
  );
};
