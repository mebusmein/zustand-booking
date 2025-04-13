import { createContext, useContext, ReactNode, useRef, useEffect } from 'react';
import { createRoomStore, createRoomStoreKey, RoomStore, RoomState } from '@/stores/room-store';
import { useStore } from 'zustand';

const RoomContext = createContext<RoomStore | undefined>(undefined);

const storeMap = new Map<string, RoomStore>();

export function RoomProvider({
  children,
  propertyId,
}: {
  children: ReactNode;
  propertyId: string | null;
}) {
  const roomStore = useRef<RoomStore>(createRoomStore(createRoomStoreKey('placeholder')));

  useEffect(() => {
    console.log('RoomProvider', propertyId);
    if (propertyId) {
      const storeKey = createRoomStoreKey(propertyId);
      if (storeMap.has(storeKey)) {
        roomStore.current = storeMap.get(storeKey) as RoomStore;
      } else {
        console.log('Creating room store for', propertyId);
        roomStore.current = createRoomStore(storeKey);
        storeMap.set(storeKey, roomStore.current);
      }
    }
  }, [propertyId]);

  return <RoomContext.Provider value={roomStore.current}>{children}</RoomContext.Provider>;
}

export function useRoomContext<T>(selector: (state: RoomState) => T): T {
  const store = useContext(RoomContext);
  if (!store) {
    throw new Error('Missing RoomContext.Provider in the tree');
  }
  return useStore(store, selector);
}

export function resetAllRoomContexts() {
  storeMap.forEach((store) => {
    store.getState().reset();
    store.persist.clearStorage();
  });
}
