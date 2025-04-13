import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface BookingState {
  bookingId: string | null;
  isComplete: boolean;
  setBookingId: (id: string | null) => void;
  submitBooking: () => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>()(
  devtools(
    persist(
      (set) => ({
        bookingId: null,
        isComplete: false,
        setBookingId: (id) => set({ bookingId: id }),
        submitBooking: () => set({ isComplete: true }),
        resetBooking: () => set({ bookingId: null, isComplete: false }),
      }),
      {
        name: 'booking-storage',
      }
    ),
    { name: 'booking-store' }
  )
);
