import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface DatesState {
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  setCheckIn: (date: string) => void;
  setCheckOut: (date: string) => void;
  setAdults: (adults: string) => void;
  setChildren: (children: string) => void;
  resetDates: () => void;
}

export const useDatesStore = create<DatesState>()(
  devtools(
    persist(
      (set) => ({
        checkIn: '',
        checkOut: '',
        adults: '1',
        children: '0',
        setCheckIn: (date) => set({ checkIn: date }),
        setCheckOut: (date) => set({ checkOut: date }),
        setAdults: (adults) => set({ adults }),
        setChildren: (children) => set({ children }),
        resetDates: () =>
          set({
            checkIn: '',
            checkOut: '',
            adults: '1',
            children: '0',
          }),
      }),
      {
        name: 'dates-storage',
      }
    ),
    { name: 'dates-store' }
  )
);
