import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface RoomState {
  selectedRoom: string | null;
  setSelectedRoom: (room: string | null) => void;
  resetRoom: () => void;
}

export const useRoomStore = create<RoomState>()(
  devtools(
    persist(
      (set) => ({
        selectedRoom: null,
        setSelectedRoom: (room) => set({ selectedRoom: room }),
        resetRoom: () => set({ selectedRoom: null }),
      }),
      {
        name: 'room-storage',
      }
    ),
    { name: 'room-store' }
  )
);
