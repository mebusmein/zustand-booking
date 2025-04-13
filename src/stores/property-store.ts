import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface PropertyState {
  selectedProperty: string | null;
  setSelectedProperty: (property: string | null) => void;
  resetProperty: () => void;
}

export const usePropertyStore = create<PropertyState>()(
  devtools(
    persist(
      (set) => ({
        selectedProperty: null,
        setSelectedProperty: (property) => set({ selectedProperty: property }),
        resetProperty: () => set({ selectedProperty: null }),
      }),
      {
        name: 'property-storage',
      }
    ),
    { name: 'property-store' }
  )
);
