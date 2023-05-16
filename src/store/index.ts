import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CharacterFull } from '../types/Character';

interface RickMortyState {
  detailId?: string;
  changeDetailId: (newDetailId: string) => void;
  removeDetailId: () => void;
  currentPage: number;
  changeCurrentPage: (newCurrentPage: number) => void;
  totalPages: number;
  changeTotalPages: (newTotalPages: number) => void;
  characters?: CharacterFull[];
  addCharacters: (newCharacters: CharacterFull[]) => void;
  selected?: CharacterFull;
  addSelected: () => void;
}

export const useRickMortyStore = create<RickMortyState>()(
  devtools((set) => ({
    detailId: undefined,
    changeDetailId: (newDetailId) => set(() => ({ detailId: newDetailId })),
    removeDetailId: () => set(() => ({ detailId: undefined })),
    currentPage: 1,
    changeCurrentPage: (newCurrentPage) => set({ currentPage: newCurrentPage }),
    totalPages: 1,
    changeTotalPages: (newTotalPages) => set({ totalPages: newTotalPages }),
    characters: undefined,
    addCharacters: (newCharacters) =>
      set(() => ({ characters: newCharacters })),
    selected: undefined,
    addSelected: () =>
      set((state) => {
        const selected = state?.characters?.find((character) => {
          return character.id === state.detailId;
        });
        if (selected) {
          return {
            selected,
          };
        }
        return state;
      }),
  }))
);
