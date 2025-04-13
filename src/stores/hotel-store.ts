import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface HotelState {
  selectedHotel: string | null;
  setSelectedHotel: (hotel: string | null) => void;
  resetHotel: () => void;
}

export const useHotelStore = create<HotelState>()(
  devtools(
    persist(
      (set) => ({
        selectedHotel: null,
        setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
        resetHotel: () => set({ selectedHotel: null }),
      }),
      {
        name: 'hotel-storage',
      }
    ),
    { name: 'hotel-store' }
  )
);
