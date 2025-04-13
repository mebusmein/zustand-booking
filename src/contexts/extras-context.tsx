import { createContext, useContext, ReactNode, useRef, useEffect } from 'react';
import { createExtrasStore, ExtrasStore, ExtrasState } from '@/stores/extras-store';
import { useStore } from 'zustand';
import { useRoomContext } from './room-context';

const ExtrasContext = createContext<ExtrasStore | undefined>(undefined);

const storeMap = new Map<string, ExtrasStore>();

export function ExtrasProvider({
  children,
  propertyId,
}: {
  children: ReactNode;
  propertyId: string | null;
}) {
  const extrasStore = useRef<ExtrasStore>(createExtrasStore('placeholder', 'placeholder'));
  const roomId = useRoomContext((state) => state.selectedRoom);

  useEffect(() => {
    if (propertyId && roomId) {
      const storeKey = `${propertyId}-${roomId}`;
      if (storeMap.has(storeKey)) {
        extrasStore.current = storeMap.get(storeKey) as ExtrasStore;
      } else {
        extrasStore.current = createExtrasStore(propertyId, roomId);
        storeMap.set(storeKey, extrasStore.current);
      }
    }
  }, [propertyId, roomId]);

  return <ExtrasContext.Provider value={extrasStore.current}>{children}</ExtrasContext.Provider>;
}

export function useExtrasContext<T>(selector: (state: ExtrasState) => T): T {
  const store = useContext(ExtrasContext);
  if (!store) {
    throw new Error('Missing ExtrasContext.Provider in the tree');
  }
  return useStore(store, selector);
}

export function resetAllExtrasContexts() {
  storeMap.forEach((store) => {
    store.getState().reset();
    store.persist.clearStorage();
  });
}
