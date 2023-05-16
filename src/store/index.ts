import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CharacterFull } from '../types/Character';

interface RickMortyState {
  detailId?: string;
  changeDetailId: (newDetailId: string) => void;
  removeDetailId: () => void;
  currentPage: number;
  changeCurrentPage: (newCurrentPage: number) => void;
  characters?: CharacterFull[];
  addCharacters: (newCharacters: CharacterFull[]) => void;
}

export const useRickMortyStore = create<RickMortyState>()(
  devtools((set) => ({
    detailId: undefined,
    changeDetailId: (newDetailId) => set(() => ({ detailId: newDetailId })),
    removeDetailId: () => set(() => ({ detailId: undefined })),
    currentPage: 1,
    changeCurrentPage: (newCurrentPage) => set({ currentPage: newCurrentPage }),
    characters: undefined,
    addCharacters: (newCharacters) =>
      set(() => ({ characters: newCharacters })),
  }))
);
