import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

export interface RoomState {
  selectedRoom: string | null;
  setSelectedRoom: (room: string | null) => void;
  resetRoom: () => void;
  reset: () => void;
}

export const createRoomStoreKey = (storeKey: string) => `room-storage-${storeKey}`;

export type RoomStore = ReturnType<typeof createRoomStore>;

export const createRoomStore = (storeKey: string) => {
  return createStore<RoomState>()(
    devtools(
      persist(
        (set) => ({
          selectedRoom: null,
          setSelectedRoom: (room) => set({ selectedRoom: room }),
          resetRoom: () => set({ selectedRoom: null }),
          reset: () => set({ selectedRoom: null }),
        }),
        {
          name: storeKey,
        }
      ),
      { name: storeKey }
    )
  );
};
