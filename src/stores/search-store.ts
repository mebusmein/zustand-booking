import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

interface SearchState {
  location: string;
  setLocation: (location: string) => void;
  resetSearch: () => void;
}

export const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        location: '',
        setLocation: (location) => set({ location }),
        resetSearch: () => set({ location: '' }),
      }),
      {
        name: 'search-storage',
      }
    ),
    { name: 'search-store' }
  )
);
